import { useEffect } from "react";
import "./UserNotLoggedInAlert.css";
import { useNavigate } from "react-router-dom";

const UserNotLoggedInAlert = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      props.handleUserNotLoggedInClick();
      navigate("/login");
    }, 2000);
  });

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
