import React ,{useState}from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()
const login =async(event)=>{
    event.preventDefault()

 const response =   await axios.post('https://note-taking-app-s8js.onrender.com/api/auth/login',{
        email,
        password
    })
    const {status, message, data, token} = response.data

    if(status == "success"){
        console.log(token)
        localStorage.setItem('authToken', token);
alert("successfully logged In")
nav('/viewnote')
    }else{
        alert('login failed')
    }
}


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">
<form action="" onSubmit={login}>
      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>



          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e)=>{setEmail(e.target.value)}}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={(e)=>{setPassword(e.target.value)}}/>


          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

     
      </form>
    </MDBContainer>
  );
}

export default Login;
