import React from "react";
import locationLogo from "../../assets/images/location.jpg";
import axios from "axios";
import "./TalkToAnExpert.css";





const TalkToAnExpert = () => {
  
  const [therapistsData, setTherapistsData] = React.useState([]);
  const [showData,setShowData] = React.useState(false)
  
  
  const userToken = localStorage.getItem("token")
  const handleClick = async() => {
    let location = {}
    // console.log("before fetching")
    await navigator.geolocation.getCurrentPosition((position) => {
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      // console.log("After updating")
    });

    // console.log("After use await api")
    setTimeout(()=>{
        
        fetchTherapists(location)
    },"2000")
  };

  const fetchTherapists = (location) => {
    
    const requestOptions = {
      method: 'post',
      url: `http://localhost:3001/therapistData`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    };  


    axios(requestOptions)
      .then(response => {
        console.log(response)
        setTherapistsData(response.data.data.results);
        setShowData(true)
      })
      .catch(error => console.error(error));
    
  }

  const therapistsDataElements = therapistsData.map((data,index) => {
    
    return (
      <div className="single-therapist-container" key={index}>
        <h1 className="therapist-clinic-name">Name : {data.name}</h1>
        <p className="therapist-vicinity">Vicinity : {data.vicinity}</p>
        <p className="open-or-close">{data.opening_hours ? "Open" : "Closed"}</p>
      </div>
    )
  })

  return (!showData ?
    (<div className="talk-to-expert-container">
      <img
        src={locationLogo}
        className="location-logo"
        alt="location-logo"
      ></img>
      <p>
        We will need your location to give you the list of therapists near you
      </p>
      <button onClick={handleClick} className="permission-btn">
        Fetch Therapists
      </button>
      
    </div>) 
    :
    (
      <div className="therapists-container">
        {therapistsDataElements}
      </div>
    )
  );
};

export default TalkToAnExpert;
