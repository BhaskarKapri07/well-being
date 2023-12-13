


import React from "react"
import "./JournalNote.css"

const JournalNote = () => {
    return (
    <div className="journal-note-container">

        
        <input className="note-heading" type="text" id="title" name="title" placeholder="Title..."/>
    
        <textarea className="note-content" id="content" name="content" rows="4"  placeholder="Three things you are grateful for..."></textarea>
    
        <button className="note-submit-btn" type="submit">Submit</button>
      
    </div>
    )
}

export default JournalNote