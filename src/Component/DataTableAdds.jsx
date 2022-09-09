import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { addColumns } from '../datatblesource';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs , doc, deleteDoc ,onSnapshot , setDoc } from "firebase/firestore";


const DataTableAdd = () => {

  const [data,setData] = useState([]);

  useEffect (()=>{
    // const fetchData = async () =>{
    //   let list = []
    //   try{
    //   const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({id: doc.id,...doc.data()})
    //     });
    //     setData(list);
    //     console.log(list)
    //   }catch(err){
    //     console.log(err)
    //   }

    // }
    // fetchData(data)
    const unsub = onSnapshot(collection(db, "adds"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
             list.push({id: doc.id,...doc.data()})
           });
      setData(list);
      list.forEach((elemnt) =>{
        elemnt.Timestamp = elemnt.Timestamp.toDate().toUTCString()
    })

  },
  (error) => {
    console.log(error)
  }
  );
  return () => {
    unsub();
  }
  },[])
  const handleEdit = async (id) => {
    await setDoc(doc(db, "adds", id), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

console.log(data)

const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "adds", id));
    setData(data.filter((item) => item.id !== id));
  } catch (err) {
    console.log(err);
  }

    
  }
  const actionColumn =[
    { field: 'action', headerName: 'Action', width: 200 , renderCell:(params)=>{
      return(
        <div className='cellAction'>
          <Link to="/users/userId"  style={{textDecoration :'none'}}>
            <div className='viewButton'>View</div>
          </Link>
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      );
    } ,},
  ]
  
  
    return(
        <div className="datatable" >
          <div className='datatabletitle'>
          List of adds
            {/* <Link to="/users/new"  style={{textDecoration :'none'}} className="link">
              Add new
            </Link> */}
          </div>

            <DataGrid
                rows={data}
                columns={addColumns.concat(actionColumn)}
                pageSize={7}
                rowsPerPageOptions={[5]}
                //checkboxSelection
        />
        </div>
    )
}
export default DataTableAdd ; 
