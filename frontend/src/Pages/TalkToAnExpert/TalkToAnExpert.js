

// React and required libraries
import React from "react";
import locationLogo from "../../assets/images/location.jpg";
import axios from "axios";
import "./TalkToAnExpert.css";




// Functional component for TalkToAnExpert page
const TalkToAnExpert = () => {
    // State variables for therapists data, showing data, and loading
  const [therapistsData, setTherapistsData] = React.useState([]);
  const [showData,setShowData] = React.useState(false)
  
  
    // Function triggered on "Fetch Therapists" button click
  const handleClick = async() => {
    let location = {}
    
      // Get user location using navigator API
    await navigator.geolocation.getCurrentPosition((position) => {
      location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
    });

    
    setTimeout(()=>{    
        fetchTherapists(location)
    },"2000")
  };


   // Function to fetch therapists data from API using user location
  const fetchTherapists = (location) => {
    const requestOptions = {
      method: "post",
      url: `https://well-being.onrender.com/therapistData`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
    };

    axios(requestOptions)
      .then(response => {
        console.log(response)
        setTherapistsData(response.data.data.results);
        setShowData(true);
      })
      .catch((error) => console.error(error));
  };


    // Render therapists data elements
  const therapistsDataElements = therapistsData.map((data, index) => {
    return (
      <div className="single-therapist-container" key={index}>
        <h1 className="therapist-clinic-name">Name : {data.name}</h1>
        <p className="therapist-vicinity">Vicinity : {data.vicinity}</p>
        <p className="open-or-close">
          {data.opening_hours ? "Open" : "Closed"}
        </p>
      </div>
    );
  });


  // Render different content based on data availability and loading state
  return !showData ? (
     // Initial screen requesting location permission
    <div className="talk-to-expert-container">
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
          // Display therapists data list
      <div className="therapists-container">
        {therapistsDataElements}
      </div>
    )
  
};

export default TalkToAnExpert;

