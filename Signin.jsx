import React from 'react'
import "./Signin.css"
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form } from "react-bootstrap"

const Signin = () => {

  return (
    <div className="container">
    <div className="sinone">
    <div className="sintwo">
       <h1 style={{color:"red"}}>Login</h1>
        <div style={{
display:"flex",
alignItems:"center",
justifyContent:"center",
height:"40vh",
        }}>
      <div className="mb-3">
     <TextField 
     id="outlined-basic" 
     label="Email" 
     variant="outlined"
     type='Email'
     
     style={{width:"300px",marginTop:"-18%"}}
  
    
sx={{
".MuiInputLabel-root":{
  color:"red",
  fontSize:"15px",
},

".MuiOutlinedInput-root":{
  input:{
  fontFamily:"monospace",
  color:"chocolate",
  fontSize:"18px"
},
fieldset:{
  border:"3px solid darkgreen"
},
"&.Mui-focused fieldset":{
   border:"3px solid darkgreen"
},

  },

}}
/>
</div>
 </div>
 <div className="mb-3">
 <TextField 
 type='password'
     id="standard-adornment-password" 
     label="Password" 
     variant="outlined"
     style={{width:"300px",marginTop:"-35%",marginLeft:"8%"}}
  
    
sx={{
".MuiInputLabel-root":{
  color:"red",
  fontSize:"15px",
},

".MuiOutlinedInput-root":{
  input:{
  fontFamily:"monospace",
  color:"chocolate",
  fontSize:"18px"
},
fieldset:{
  border:"3px solid darkgreen"
},
"&.Mui-focused fieldset":{
   border:"3px solid darkgreen"
},

  },

}}
/>
</div>
<div className="mb-3">
 <FormControlLabel control={<Checkbox  />} label="New Subscriber" id='chk1' />
 <FormControlLabel control={<Checkbox  />} label="Forget Password" id='chk1' />
 </div>
 <div className="mb-3">
  <Button variant="primary" className='loginbtn'>Submit</Button>     
  </div>
    
        </div>   
    </div>
    </div>
     
  );
}

export default Signin; 



