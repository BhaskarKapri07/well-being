


import React from "react"
import "./JournalNote.css"

const JournalNote = () => {
    return (
    <div className="journal-note-container">

        <textarea className="note-content" id="content" name="content" rows="4"  placeholder="Three things you are grateful for..."></textarea>
        
        <button className="note-submit-btn" type="submit">Save</button>
      
    </div>
    )
}

export default JournalNote