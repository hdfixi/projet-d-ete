import { useState } from 'react';
import './signin.css'
// import Select from 'react-select'

 
const options = [{ value: 'Ariana' ,label:"Ariana"},
  { value: 'Béja',label:"Béja"},
  { value: 'Ben Arous',label:"Ben Arous" },
  { value: 'Bizerte',label:"Bizerte" },
{ value: 'Gabès',label:"Gabès" },
{ value: 'Gafsa',label:"Gafsa" },
{ value: 'Jendouba',label:"Jendouba" },
{ value: 'Kairouan',label:"Kairouan" },
{ value: 'Kasserine',label:"Kasserine" },
{ value: 'Kébili',label:"Kébili" },
{ value: 'Le Kef',label:"Le Kef" },{ value: 'Mahdia',label:"Mahdia" },
{ value: 'La Manouba',label:"La Manouba" },{ value: 'Médenine',label:"Médenine" },{ value: 'Monastir',label:"Monastir" },{ value: 'Nabeul',label:"Nabeul" },
{ value: 'Sfax',label:"Sfax" },{ value: 'Sidi Bouzid',label:"Sidi Bouzid" },{ value: 'Siliana',label:"Siliana" },
{ value: 'Sousse',label:"Sousse" },{ value: 'Tataouine',label:"Tataouine" },{ value: 'Tozeur',label:"Tozeur" },{ value: 'Tunis',label:"Tunis" },
{ value: 'Zaghouan',label:"Zaghouan" }
];



const Signin1=()=>{
    const [selects,setSelects]=useState();
    const [des,setdes]=useState();

    return(
        <div>
        <form className='back1'>

        <label className='sub-title'>Your location</label>
        <select className='sel' onClick={(e)=>setSelects(e.target.value)}>
          <option value="" disabled selected hidden>Choose your location</option>
          <option value="Ariana">Ariana</option>
          <option value="Béja">Béja</option>
          <option value="Ben Arous">Ben Arous</option>
          <option value="Bizerte">Bizerte</option>
          <option value="Gabès">Gabès</option>
          <option value="Jendouba">Jendouba</option>
          <option value="Kairouan">Kairouan</option>
          <option value="Kasserine">Kasserine</option>
          <option value="Kébili">Kébili</option>
          <option value="Béja">Béja</option>
          <option value="Le Kef">Le Kef</option>
          <option value="La Manouba">La Manouba</option>
          <option value="Médenine">Médenine</option>
          <option value="Monastir">Monastir</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Ariana">Ariana</option>
          <option value="Sfax">Sfax</option>
          <option value="Sidi Bouzid">Sidi Bouzid</option>
          <option value="Siliana">Siliana</option>
          <option value="Sousse">Sousse</option>
          <option value="Tataouine">Tataouine</option>
          <option value="Tozeur">Tozeur</option>
          <option value="Tunis">Tunis</option>
          <option value="Zaghouan">Zaghouan</option>
        </select>
        <br />
        <textarea placeholder="Description"  className="text-area" id="" cols="30" rows="10"
        onChange={e=>setdes(e.target.value)}
        ></textarea>
        <br />
        <div class="file-input">
        <input type="file" id="file" class="file"></input>
         <label for="file">Select an image 📥</label>
        </div>
         <button class="next-button" type="submit">SIGNIN</button> 
        </form>
        </div>
       
    );
}
export default Signin1
   {/* <form action="" className='back1'>
            <label htmlFor="services" className='sub-title'>Your location: </label>
           <Select  options={options}  placeholder={'selct your region'}  style={styles.select}  className="sel-ect" ></Select>
           <label htmlFor="services" className='sub-title'>Describe Yourself: </label>
               <textarea className='des'  name="description"  rows="15" cols="80"></textarea>
           
        
            </form> */}