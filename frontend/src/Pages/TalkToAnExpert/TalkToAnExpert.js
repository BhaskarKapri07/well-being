import React from "react";
import locationLogo from "../../assets/images/location.jpg";
import axios from "axios";
import "./TalkToAnExpert.css";

const TalkToAnExpert = () => {
  const [userLocation, setUserLocation] = React.useState({});
  const [therapistsData, setTherapistsData] = React.useState([]);

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    fetch("http://localhost:8000/mockData")
      .then((response) => response.json())
      .then((data) => {
        setTherapistsData(JSON.parse(data.data).results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
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
    </div>
  );
};

export default TalkToAnExpert;
