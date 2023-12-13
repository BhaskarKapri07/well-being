

import React from "react"
import "./JournalPage.css"
import JournalNote from "../../components/JournalNote/JournalNote"
import journalArt from "../../assets/images/journal-art.jpg"

const JournalPage = () => {    
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const journalQuotes = [
        "Take a moment to reflect on your day. What are you grateful for? What challenges did you face?",
        "Even a short note is better than no note at all. Give yourself the gift of reflection.",
        "Today is a blank canvas. Write something to paint it with your thoughts and feelings.",
        "Write down something that made you smile today. Capture the little joys of life.",
        "Journaling is a powerful tool for self-discovery. Start writing to learn more about yourself.",
        "Don't let today pass without saying hello to yourself. Write your first note."
    ]

    const [quote,setQuote] = React.useState(journalQuotes[Math.floor(Math.random()*6)])
    const [todayDate,setTodayDate] = React.useState({
        date: new Date().getDate(),
        day:new Date().getDay(),
        month:new Date().getMonth(),
        year:new Date().getFullYear()
    })
    const [weekDates,setWeekDates] =  React.useState([])
    const [showNotesEditor,setShowNotesEditor] = React.useState(false)


    React.useEffect( () => {
        const today = new Date()
        const arr = []; 

        for (let i = -3; i <= 3; i++) {
            const newDate = new Date(today.getTime());
            if(i===0){
                arr.push(todayDate)
                continue
            }
            newDate.setDate(newDate.getDate() + i);
            arr.push({
              date: newDate.getDate(),
              day:newDate.getDay(),
              month:newDate.getMonth(),
              year:newDate.getFullYear()
            });
          }

        setWeekDates(arr)
        
        
    },[])
    


        const weekDatesElements = weekDates.map((date,index) => {
            return  <div key={index} className={ date.day === todayDate.day ?  "single-day-container today-date" : "single-day-container"}>
                    <p>{ days[date.day]}</p>
                    <p>{date.date}-{date.month}-{date.year}</p>
                    </div>
        })

        return (
            <div className="journal-container">
                <div className="week-days-container">
                    {weekDatesElements}
                </div>
                { !showNotesEditor ? 
                (<>
                <img className="journal-art" src={journalArt} alt="journal-art" />
                <p className="journal-quote">{quote}</p>
                <button className="create-icon-btn" onClick={() => setShowNotesEditor(true)}></button></>):
                 <JournalNote /> }
            </div>
    )
}

export default JournalPage