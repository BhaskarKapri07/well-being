

import React from "react"
import "./JournalPage.css"
import JournalNote from "./JournalNote"

const JournalPage = () => {
    
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const [todayDate,setTodayDate] = React.useState({})
    const [weekDates,setWeekDates] =  React.useState()

    React.useEffect( () => {
        const today = new Date()
        setTodayDate({
            date: today.getDate(),
            day:today.getDay(),
            month:today.getMonth(),
            year:today.getFullYear()
        })
        
        const arr = []; 

        for (let i = -3; i <= 3; i++) {
            const newDate = new Date(today.getTime());
            if(i==0){
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
    


        const weekDatesElements = weekDates.map(date => {
            return  <div className={ date.day === todayDate.day ?  "single-day-container today-date" : "single-day-container"}>
                    <p>{ days[date.day]}</p>
                    <p>{date.date}-{date.month}-{date.year}</p>
                    </div>
        })

        return (
            <div>
                <div className="week-days-container">
                    {weekDatesElements}
                </div>
                <JournalNote />
            </div>
    )
}

export default JournalPage