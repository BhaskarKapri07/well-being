


import React from "react"
import "./JournalNote.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import UserNotLoggedInAlert from "../UserNotLoggedInAlert/UserNotLoggedInAlert"


const JournalNote = () => {

    const [note,setNote] = React.useState({
      title:"",
      content:""
    })
    const [showUserNotLoggedInAlert,setShowUserNotLoggedInAlert] = React.useState(false)
    
    const userToken = localStorage.getItem("token")
    const navigate = useNavigate()
    
    const onSave = () => {
        if(userToken){
          if(note.title && note.content){

          
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
            .then(response => {

              navigate(`allNotes/${response.data.entry._id}`)
              console.log(response.data)
            })
            .catch(error => console.error(error));
          }else{
            console.log("Enter some data ")
          }
        }else{
          setShowUserNotLoggedInAlert(true)
        }
      }

      const handleChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
      }

      const handleUserNotLoggedInClick = () => {
        setShowUserNotLoggedInAlert(false)
      }

     

      const viewAllEntries = () => {
        if(!userToken){
          setShowUserNotLoggedInAlert(true)
        }
        else {
          navigate("/journal/allNotes")
        }
      }

    return (
    <div className="journal-note-container">
        <input type="text" placeholder="Title..." name="title" value={note.title} onChange={handleChange }/>
        <textarea className="note-content" name="content" value={note.content} onChange={handleChange} id="content"  rows="4"  placeholder="Three things you are grateful for..."></textarea>        
        <button className="note-submit-btn" onClick={onSave} >Save</button>
        <button onClick={viewAllEntries}> View All Entries</button>   
        {showUserNotLoggedInAlert && <UserNotLoggedInAlert handleUserNotLoggedInClick={handleUserNotLoggedInClick}/>}
        
    </div>
    )
}

export default JournalNote