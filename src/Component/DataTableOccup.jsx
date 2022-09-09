import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { userColumns } from '../dataSourceOccup';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { db } from '../firebase-config';
import { collection,updateDoc , doc, deleteDoc ,onSnapshot } from "firebase/firestore";

const DataTableOccup = () => {
  const [data,setData] = useState([]);

  useEffect (()=>{
    // const fetchData = async () =>{
    //   let list = []
    //   try{
    //   const querySnapshot = await getDocs(collection(db, "categories"));
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
    const unsub = onSnapshot(collection(db, "categories"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
            //console.log(doc.data().Timestamp.toDate().toString())
             list.push({id: doc.id, ...doc.data()})
            
            
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

//console.log(data)

const handleDelete = async (id) => {
  if (window.confirm("Are you sure you wanted to delete category")){
  try {
    await deleteDoc(doc(db, "categories", id));
    setData(data.filter((item) => item.id !== id));
  } catch (err) {
    console.log(err);
  }
}
  }

 


  const actionColumn =[
    { field: 'action', headerName: 'Action', width: 300 , renderCell:(params)=>{
      return(
        <div className='cellAction'>
          {/* <Link to={`/profile/${params.row.id}`}  style={{textDecoration :'none'}}>
            <div className='viewButton' >Edit</div>
          </Link> */}
            <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      );
    } ,},
   
  ]
  
  
  
    return(
        <div className="datatable" >
          <div className='datatabletitle'>
          List of Occupation
            <Link to="/occupation/new"  style={{textDecoration :'none'}} className="link">
              Add new
            </Link>
          </div>

            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={7}
                rowsPerPageOptions={[5]}
                //checkboxSelection
        />
        </div>
    )
}
export default DataTableOccup ; 
