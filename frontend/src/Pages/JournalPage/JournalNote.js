


import React from "react"
import "./JournalNote.css"
import axios from "axios"

const JournalNote = () => {

    const [note,setNote] = React.useState("")

    const onSave = () => {
        const requestOptions = {
            method: 'post',
            url: `http://localhost:3001/api/journal`,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTc5MzBlZDlkY2Q3ZmExMjM0NWE4ODQiLCJpYXQiOjE3MDI0NDE2MjIsImV4cCI6MTcwMjQ0NTIyMn0.fdEuwtCjSaYQYzIT0KquyWOnkrlxkTF0C742Y8Wn1-E`
            },
            data: {
              title: 'My Journal Entry',
              content: 'Today I learned about huehue.'
            }
          };

          axios(requestOptions)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

    return (
    <div className="journal-note-container">
        <textarea className="note-content" value={note} onChange={(e)=>setNote(e.target.value)} id="content" name="content" rows="4"  placeholder="Three things you are grateful for..."></textarea>        
        <button className="note-submit-btn" onClick={onSave} type="submit">Save</button>
    </div>
    )
}

export default JournalNote