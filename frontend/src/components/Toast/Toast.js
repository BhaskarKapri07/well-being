

import { useEffect } from "react"
import "./Toast.css"

const Toast = (props) => {

    useEffect(()=>{
        
        setTimeout(()=>{
            props.handleToastRemove()
        },2000)
    },[])

    return (
        <div className="toast">
            <p className="toast-msg">{props.msg}</p>
        </div>
    )
}

export default Toast