import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react';
import { db } from '../firebase-config';
import { collection,updateDoc , doc, deleteDoc ,onSnapshot } from "firebase/firestore";

const Comment = () => {
    const [data,setData] = useState([]);
    const [single,setSingle] = useState({});
    useEffect (()=>{
        const unsub = onSnapshot(collection(db, "comments"), (snapShot) => {
          let list = [];
         
          snapShot.docs.forEach((doc) => {
                 list.push({id: doc.id, ...doc.data()})
                })     
          setData(list);
          console.log(list)
      },
      (error) => {
        console.log(error)
      }
      );
      return () => {
        unsub();
      }},[])

      // const fetchSignle = async (id) => {
      //       const fetchSignle = onSnapshot(doc(db, "users","3Md1nTb8XvZgD5i0tB0n"), (snapShot) => {

      //           setSingle(snapShot.data());
  
      //       },)
          
      //     }
          
          let fetchSignle = (id) => {
            if (id) {
              db.collection("users")
                .doc(id)
                .get()
                .then((snapShot) => {
                  setSingle(snapShot.data());
                });
            }
          };
  

      const handleDelete = async (id) => {
        if (window.confirm("Are you sure you wanted to delete category")){
        try {
          await deleteDoc(doc(db, "comments", id));
          setData(data.filter((item) => item.id !== id));
        } catch (err) {
          console.log(err);
        }
      }
        }
      return (
        <>
            <div className="comment" >
                <div className='commenttitle'>
                    List of Comments
                </div>
                <div>
                    {data.map((doc)=>{
                        return(
                            <>
                                <div className='singleComment'>
                                    <> 
                                        <div ></div> 
                                        {/* <img onload='fetchSignle("3Md1nTb8XvZgD5i0tB0n")' className="cellImg" src={single.userImage} alt="avator"/>{single.name} */}
                                        <p className='commentdate'>{doc.Timestamp.toDate().toUTCString()}</p>
                                        <p>{doc.description}</p> 
                                        <div className='deleteButton' onClick={() => handleDelete(doc.id)}>Delete</div>
                                    </>
                                </div>  
                            </>                 
                        
                        )

                    })}
                </div>
            </div>
        </>
      )
}
export default Comment ; 
