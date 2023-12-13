


import React from "react"
import "./JournalNote.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const JournalNote = () => {

    const [note,setNote] = React.useState({
      title:"",
      content:""
    })

    


    const userToken = localStorage.getItem("token")
    const navigate = useNavigate()
    
    const onSave = () => {
        const requestOptions = {
            method: 'post',
            url: `http://localhost:3001/api/journal`,
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
        
      }

      const handleChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
      }

    return (
    <div className="journal-note-container">
        <input type="text" placeholder="Title..." name="title" value={note.title} onChange={handleChange }/>
        <textarea className="note-content" name="content" value={note.content} onChange={handleChange} id="content"  rows="4"  placeholder="Three things you are grateful for..."></textarea>        
        <button className="note-submit-btn" onClick={onSave} >Save</button>
        <button onClick={()=>navigate("/journal/allNotes")}> View All Entries</button>   
    </div>
    )
}

export default JournalNote