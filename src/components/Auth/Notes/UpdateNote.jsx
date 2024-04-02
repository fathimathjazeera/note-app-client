import React, { useState } from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateNote() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
const nav= useNavigate()
  const updateNote = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
   const response =   await axios.put(
        `https://note-taking-app-s8js.onrender.com/api/note/updatenote/${id}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const {status} =response.data
      if(status == "success"){
        alert('successfully updated')
        nav('/viewnotes')
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="mt-5" style={{ maxWidth: "1000px" }}>
      <form onSubmit={updateNote}>
        <MDBInput
          wrapperClass="mb-4"
          placeholder="title"
          label='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="description"
          label='desc'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <MDBBtn style={{ background: "black" }} type="submit">
          Update
        </MDBBtn>
      </form>
    </div>
  );
}
