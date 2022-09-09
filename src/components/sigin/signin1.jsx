import './signin.css'
import Select from 'react-select'

import { Navigate } from 'react-router-dom';
import { useState , useEffect} from 'react';


const colourStyle = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "#DCDCDC",
      color: "#3c3a3a",
      cursor: isDisabled ? "not-allowed" : "default"
    };
  }
};

const options = [
  { value: 'Gardener' ,label:"Gardener"},
  { value: 'Babysitter',label:"Babysitter"},
  { value: 'Mechanic',label:"Mechanic" },
  { value: 'Plumber',label:"Plumber" }
];

const Signin=()=>{
const [goTonext,setGoTonext]=useState(false);
const initialValues = {  name:"",familyname:"",email:"",password:"",number:"",cpassword:""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [res,setres]=useState(options.label);
const changer=(e)=>{
  setres(e.label);
  
}  

const handleChange=(e)=>{
 
const {name,value}=e.target;
setFormValues({...formValues,[name]:value});

};
const handleSubmit=(e)=>{
   e.preventDefault();
 setFormErrors(validate(formValues));
    setIsSubmit(true);
}

useEffect(()=>{
  console.log(formErrors);
if(Object.keys(formErrors).length===0&&isSubmit){
  console.log(formValues);
  
  setGoTonext(true);
}
},[formErrors]);

if(Object.keys(formErrors).length===0&&isSubmit&&goTonext){
   
  return(<Navigate to="/Signin2"/>);
}

const validate=(values)=>{
const errors={};
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!values.name){
  errors.name='name is required!';
}
if(!values.familyname){
  errors.familyname='familyname is required!';
}
if(!values.email){
  errors.email='email is required!';
}
else if(!regex.test(values.email)){
  errors.email="this is not a valide email fromat";
}
if(!values.password){
  errors.password='password is required!';
}
if(!values.cpassword){
  errors.cpassword='confirme your password is required!';
}
if(!values.number){
  errors.number='your number is required!';
}

return errors;
}
let d;

    return(
        <div className='sign'>
          
        <form className='back' onSubmit={handleSubmit}>
        <h1 className='title' >create your account:</h1>
         <input
          id="name"
          className="form-field"
          type="text"
          placeholder="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <p>{formErrors.name}</p>
            <input
            className="form-field"
              type="text"
              name="familyname"
              placeholder="family-name"
              value={formValues.familyname}
              onChange={handleChange}
            />
            <p>{formErrors.familyname}</p>
             <input
            className="form-field"
              type="text"
              name="email"
              placeholder="email-adress"
              value={formValues.email}
              onChange={handleChange}
            />
            <p>{formErrors.email}</p>
         <input
            className="form-field"
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
          <p>{formErrors.password}</p>
             <input
            className="form-field"
              type="password"
              name="cpassword"
              placeholder="confirme password"
              value={formValues.cpassword}
              onChange={handleChange}
            />
        <p>{formErrors.cpassword}</p>
        <label htmlFor="services" className='sub-title'>Your services: </label>
      <Select isMulti options={options} placeholder={'Choose your services'}  styles={colourStyle} value={d}className="sel-ect" 
      onChange={changer}
      />
       <label htmlFor="services" className='sub-title' placeholder='choose your services'>Your contacts: </label>
         <input
            className="form-field"
              type="text"
              name="number"
              placeholder="number"
              value={formValues.number}
              onChange={handleChange}
            />
            <p>{formErrors.number}</p>
         <input
          id="f-link"
          className="form-field"
          type="text"
          placeholder="facebook link"
          name="f-link"
        />
      <button class="next-button" onClick={()=>{
        setGoTonext(true);
      }}>NEXT &gt; 	&gt;</button> 
        </form> 
        
        
        </div>
    );
}
export default Signin;