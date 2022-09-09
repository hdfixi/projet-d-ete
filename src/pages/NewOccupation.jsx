import SidebarAdmin from '../Component/SidebarAdmin';
import NavbarAdmin from '../Component/NavbarAdmin';
import img3 from '../images/none.jpg';
import img from '../images/choose.png';
import { useEffect, useState } from 'react';
import { collection, doc, addDoc,Timestamp, serverTimestamp,onSnapshot } from "firebase/firestore";  
import { db ,storage} from '../firebase-config';
import {  uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {ref} from "firebase/database";

const occupationInput = {
        category: "" 
    }



const NewOccupation = () => {
    const [file,setFile] = useState("")
    const [data,setData] = useState({})
    const [per,setPer] = useState (null)
    const [state,setState]= useState(occupationInput);
    const {id} = useParams();
    console.log(id)
    const navigate = useNavigate()
    const { category} = state;

    useEffect(()=>{
        const uploadFile = () => {
            const name = new Date().getTime() + file.name //to make it unique

            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setPer(progress)
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                  default :
                  break ;
                }
              }, 
              (error) => {
                console.log(error)
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setData((prev)=>({...prev,img:downloadURL}))
                 ///setDoc((prev)=>({...prev,img:downloadURL}))
                });
              }
            );
            
            
        }
    file && uploadFile();
    },[file])
    console.log(data)
    

    // useEffect(()=> {
        
    //     firebase.database().reference("categories").on("value",(snapshot) => {
    //         if (snapshot.val() !== null){
    //             setData({...snapshot.val()});
    //         }
    //         else {
    //             setData({});
    //         }
    //     })
    // })
    // useEffect (()=>{
    //     const unsub = onSnapshot(collection(db, "categories"), (snapShot) => {
    //         let list = [];
    //         snapShot.docs.forEach((doc) => {
    //                list.push({id: doc.id,...doc.data()})
                   
    //              });
              
    //         setData(list);
    //     },(error) => {
    //         console.log(error)
    //       })
    //     return () => {
    //         unsub();
    //       }
    // },[])
    
    // useEffect(()=> {
    //     if(id){
    //         setState({...data[id]})
    //     }
    //     else{
    //         setState({...occupationInput})
    //     }
    //     return()=>{
    //         setState({...occupationInput})
    //     }
    // },[id,data])


    const handleInput =(e)=>{
        const {category,value} = state ;
        setState({...state,[category]:value})
    } //function to have the data from web which we created

    const handleadd = async(e) => {
        e.preventDefault()
        try{
            const res = await addDoc(collection(db, "categories"), {
                ...state,
                Timestamp: serverTimestamp() ,
            });
            console.log(res.id)
            navigate(-1)
        }catch(err){
            console.log(err)
        } //function to add the data to database
        // const res = await addDoc(collection(db, "cities"
         
        //   await setDoc(doc(db, "cities", "LA"), {
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        //   });
    }
   
    return(
        <div className='profile'>
                <SidebarAdmin/>
                <div className='profileContainer'>
                    <NavbarAdmin/>
                    <div className='top'>
                        <h1>add new</h1>
                    </div>
                    <div className='bottom'>
                        <div className='left'>
                            <img src={file ? URL.createObjectURL(file) : img3} className="img"/>
                        </div>
                        <div className='right'>
                            <form onSubmit={handleadd}>
                                <div className='formInput'>
                                    <label htmlFor='file'>
                                        Image:<img src={img} className="chooseicon"/>
                                    </label>
                                    <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
                                </div>
                                <div className='formInput'></div>
                                
                                    <div className='formInput' >
                                        <label>category</label>
                                        <input id="category" type="text" placeholder="category" value={category} onChange={handleInput}/>
                                    </div>
                                
                                <br/>
                                <div className='formInput'></div>
                                <button disabled={per !== null && per<100} type='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>

    )
}
export default NewOccupation;