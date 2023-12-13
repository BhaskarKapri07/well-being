

import React from "react"
import "./SingleNote.css"
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"


const SingleNote = ({match}) => {
    
    const {noteId} = useParams()
    const userToken = localStorage.getItem("token")
    const navigate = useNavigate()

    const [note,setNote] = React.useState({
        title:"",
        content:""
    })


    React.useEffect(()=>{
        const requestOptions = {
            method:"get",
            url: `http://localhost:3001/api/journal/${noteId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
              },
        }

        axios(requestOptions)
            .then(response => setNote(response.data))
            .catch(error => console.error(error))
    },[])

    const handleChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
    }

    const updateNote = () => {
        const requestOptions = {
            method: 'put',
            url: `http://localhost:3001/api/journal/${noteId}`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            },
            data: {
              title: note.title,
              content: note.content
            }
          };  

          axios(requestOptions)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
        navigate("/journal/allNotes")
    }

    const deleteNote = () => {
        const requestOptions = {
            method: 'delete',
            url: `http://localhost:3001/api/journal/${noteId}`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`
            },
          };  

          axios(requestOptions)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
        navigate("/journal/allNotes")
    }

    return  (
        <div>
            <div className="journal-note-container">
                <input type="text" placeholder="Title..." name="title" value={note.title} onChange={handleChange }/>
                <textarea className="note-content" name="content" value={note.content} onChange={handleChange} id="content"  rows="4"  placeholder="Three things you are grateful for..."></textarea>        
                <button className="note-submit-btn" onClick={updateNote} >Modify</button>
                <button className="note-delete" onClick={deleteNote}> Delete</button>
            </div>    
        </div>
    )
}

export default SingleNote   