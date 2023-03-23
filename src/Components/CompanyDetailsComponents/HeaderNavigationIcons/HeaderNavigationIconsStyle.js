import styled from "styled-components";

export const HeaderNavigationIconsStyle = styled.div`
  .HeaderIconsDiv {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .HeaderIconsDiv button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 15px;
  }
  .notificationBox {
    position: absolute;
    top: 60px;
    right: 0;
    /* height: 390px; */

    width: 480px;
    padding-left: 60px;
    padding-right: 70px;
    padding-bottom: 20px;
    background-color: #141618;
    z-index: 2;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .notificationBox h2 {
    font-weight: 900;
    font-size: 30px;
    color: #ffffff;
    text-align: start;
    margin-bottom: 25px;
  }
  .singleNotificationWithBorder,
  .singleNotificationWithoutBorder {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .singleNotificationWithBorder::before,
  .singleNotificationWithoutBorder::before {
    content: " ";
    background-color: #00acb1;
    width: 12px;
    height: 12px;
    border-radius: 8px;
    position: absolute;
    left: -25px;
    top: 35px;
  }
  .singleNotificationWithBorder {
    border-bottom: 0.5px solid #ffffff;
  }
  .singleNotificationWithBorder p,
  .singleNotificationWithoutBorder p {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
  .singleNotificationWithBorder img {
    width: 12px;
  }
`;
