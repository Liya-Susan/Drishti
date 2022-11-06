import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { authActions } from "../store";


export default function Login() {
    
 
  const dispath = useDispatch();

    const [inputs, setInputs] = useState({
    
        email: "",
        password: "",
      });

    const handleEmailInputChange=(event)=>{
        setInputs({...inputs,email:event.target.value})
    }  
    const handlePasswordInputChange=(event)=>{
        setInputs({...inputs,password:event.target.value})
    }  
      
   

      
      
      
  return (

    <div>
      <Card style={{margin:'5%',width:'35%',height:'400px',marginLeft:'35%',marginTop:'10%'}}>
      <h1 style={{margin:'5%'}}>Login</h1>

        <Card.Body>
        <Form >
      
      
        <div className='col'>
          
          <br/>
          <input type='text' className='form-control' value={inputs.email} onChange={handleEmailInputChange} required placeholder='Email'
          />
         
        </div>
        <div className='col'>
          <br/>
          <input type='text' className='form-control' value={inputs.password} onChange={handlePasswordInputChange}  required width={'50'} placeholder='Password'/>
        </div>
        
         <br/>
        
      
      <input type="submit" className='btn btn-primary ' style={{marginBlockStart :'20px'}} value="LOGIN"/>
      </Form>
        </Card.Body>
      </Card>

    </div>
  )
}


