import React, { useState } from "react";
import { HeaderNavigationIconsStyle } from "./HeaderNavigationIconsStyle";
import HomeIcon from "../../../images/CompanyDetails/HomeIcon.png";
import NotificationIcon from "../../../images/CompanyDetails/Notification.png";
import ProfileIcon from "../../../images/CompanyDetails/ProfileIcon.png";
import closeIcon from "../../../images/CompanyDetails/closeIcon.png";

function HeaderNavigationIcons() {
  const [notificationClicked, setNotificationClicked] = useState(false);

  const handleIconClick = () => {
    setNotificationClicked(!notificationClicked);
  };
  const SingleIcon = (props) => {
    return (
      <button
        style={props.hasNotification && { position: "relative" }}
        onClick={props.hasNotification ? handleIconClick : null}
      >
        <img src={props.src} />
        {props.hasNotification && notificationClicked && (
          <div className="notificationBox">
            <h2>Notifications</h2>
            <SingleNotification title="Welcome to Syndo" hasBorder />
            <SingleNotification title="Your account is now active" hasBorder />
            <SingleNotification
              title="Congrats! Your account is now upgraded to Premium."
              hasBorder
            />
            <SingleNotification
              title="Trella approved your access request, you can now view their Round."
              hasBorder={false}
            />
          </div>
        )}
      </button>
    );
  };
  const SingleNotification = (props) => {
    return (
      <div
        className={
          props.hasBorder
            ? "singleNotificationWithBorder"
            : "singleNotificationWithoutBorder"
        }
      >
        <p>{props.title}</p>
        <button className="closeButton">
          <img src={closeIcon} />
        </button>
      </div>
    );
  };
  return (
    <HeaderNavigationIconsStyle>
      <div className="HeaderIconsDiv">
        <SingleIcon src={HomeIcon} />
        <SingleIcon src={NotificationIcon} hasNotification />
        <SingleIcon src={ProfileIcon} />
      </div>
    </HeaderNavigationIconsStyle>
  );
}

export default HeaderNavigationIcons;
