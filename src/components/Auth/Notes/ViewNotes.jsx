
import React ,{useEffect, useState} from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBInput,
 
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function App() {
const [notes,setNotes] = useState([])
const [color, setColor] = useState('#ffffff');
const nav= useNavigate()
    const getNotes = async()=>{
      const response =  await axios.get('https://note-taking-app-s8js.onrender.com/api/note/getnotes')
        const {status,message, data}= response.data
        console.log(data,"data")
      if(status == "success"){
setNotes(data)
      }
    }



 


    const deleteNote = async(id)=>{
        try{
            const token = localStorage.getItem("authToken");
            const response =    await axios.delete(`https://note-taking-app-s8js.onrender.com/api/note/deletenote/${id}`,{
                    headers:{
                        Authorization :`Bearer ${token}`
                    }
                })
                const {status}= response.data
                if(status== "success"){
                    alert('successfully delted')
                 
                }
        }catch(err){
            console.log(err.message,"error")
        }
       



            }



 useEffect(() => {
getNotes()
    }, [setNotes])



    const handleColorChange = (e) => {
        setColor(e.target.value);
      };


  return (
    <>
        <MDBCard alignment='center'>
        {notes.map((note)=>{
            return  <>
            <MDBCardBody style={{ backgroundColor: note.color }}>
   
              <MDBCardTitle>{note.title} t</MDBCardTitle>
              <MDBCardText>{note.description}</MDBCardText>
             
              {/* <MDBInput
                type='color'
                value={color}
                onChange={handleColorChange}
                aria-label='Color Picker'
                style={{ marginRight: '10px' }}
              /> */}
           
              <MDBBtn onClick={()=>nav(`/update/${note._id}`)}>Update</MDBBtn>
              <MDBBtn onClick={()=>{deleteNote(note._id)}}>Delete</MDBBtn>
            </MDBCardBody>
            </>
         } )}

    </MDBCard>

    <MDBBtn  onClick={()=>{nav('/addnote')}}>Add note</MDBBtn>
    </>
  );
}
