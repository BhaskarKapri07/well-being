import { useEffect } from "react";
import "./UserNotLoggedInAlert.css";
import { useNavigate } from "react-router-dom";

const UserNotLoggedInAlert = (props) => {
  const navigate = useNavigate();

   // Automatically redirect user to login after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      props.handleUserNotLoggedInClick(); // Perform any necessary actions before redirecting
      navigate("/login");// Redirect to login page
    }, 2000);
  });

    // Render alert message
  return (
    <div className="save-journal-alert">
      <p>
        You need to be logged in to access journal . You are being Redirected to
        Login page
      </p>
    </div>
  );
};

export default UserNotLoggedInAlert;
