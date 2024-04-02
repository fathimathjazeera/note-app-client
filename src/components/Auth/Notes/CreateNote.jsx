import React, { useState , useEffect} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBBtn
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function CreateNote() {
const [title,setTitle] = useState([])
const [description,setDescription] = useState([])
const nav = useNavigate()
const addNote = async(event)=>{
    event.preventDefault()
    const token = localStorage.getItem("authToken");
  const response =  await axios.post('https://note-taking-app-s8js.onrender.com/api/note/createnote',{
        title,
        description
    },{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    event.target.reset()
    const {status,message, data}= response.data
    if(status == "success"){
        alert('Successfully created note')
        nav('/viewnotes')
    }else{
        alert('please login')
    }
}




  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody>
                <form action="" onSubmit={addNote}>
            <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label=" Add your title" onChange={(e)=>{setTitle(e.target.value)}}/>
              <MDBInput wrapperClass="mb-4" placeholder="Type comment..." label="+ Add a note" onChange={(e)=>{setDescription(e.target.value)}}/>
              <MDBBtn style={{background:"black"}}>Add</MDBBtn>
              </form>
             
            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
