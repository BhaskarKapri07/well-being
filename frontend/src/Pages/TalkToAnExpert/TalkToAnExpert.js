import React from "react";
import locationLogo from "../../assets/images/location.jpg";
import axios from "axios";
import "./TalkToAnExpert.css";

const TalkToAnExpert = () => {
  const [userLocation, setUserLocation] = React.useState({});
  const [therapistsData, setTherapistsData] = React.useState([]);
  const [showData,setShowData] = React.useState(false)

  const userToken = localStorage.getItem("token")


  const handleClick = () => {
    
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    axios.get("http://localhost:3001/mockTherapistData")
    .then((response) => {
      setTherapistsData(JSON.parse(response.data.data).results);
      setShowData(true)
    })
    .catch((error) => {
      console.error(error);
    })
  };



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
