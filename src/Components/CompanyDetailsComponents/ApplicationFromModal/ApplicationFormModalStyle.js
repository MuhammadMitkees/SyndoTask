import styled from "styled-components";

export const ApplicationFormModalStyle = styled.div`
  padding: 100px 0 100px 50px;
  height: 100%;
  z-index: 100;
  background: #000000;
  .mainDiv {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .modalIconsDiv {
    display: flex;
    flex-direction: column;
    width: 3%;
  }
  .briefCaseIconSelected,
  .paymentIconSelected,
  .briefCaseIcon,
  .paymentIcon {
    font-size: 40px;
  }
  .briefCaseIcon,
  .paymentIcon {
    color: #acb8c2;
  }
  .briefCaseIconSelected,
  .paymentIconSelected {
    color: #00acb1;
  }
  .briefCaseIconDiv p,
  .paymentIconDiv p {
    font-weight: 900;
    font-size: 16px;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 30px;
  }
  .briefCaseIconDiv {
    text-align: center;
    padding-bottom: 100px;
    border-bottom: 1px solid #acb8c2;
    margin-bottom: 100px;
  }
  .paymentIconDiv {
    text-align: center;
  }
  .applicationFormDiv {
    width: 25%;
    margin-left: 90px;
  }
  .applicationFormDiv > h3 {
    font-weight: 900;
    font-size: 24px;
    color: #ffffff;
  }
  .slider {
    color: #00acb1;
  }
  label {
    font-weight: 900;
    font-size: 16px;
    color: #ffffff;
    display: block;
    margin-bottom: 20px;
  }
  .inputAndError {
    position: relative;
    margin-bottom: 65px;
  }
  .firstNameInput {
    background-color: transparent;
    border: none;
    width: 100%;
    border-bottom: 2px solid #acb8c2;
    padding-bottom: 15px;
    color: #656f77;
    font-weight: 400;
    font-size: 16px;
  }
  .firstNameInputError {
    border-bottom: 2px solid red;
  }
  .firstnameError,
  .checkboxError,
  .creditErrorMsg {
    color: red;
    font-weight: 400;
    font-size: 16px;
    position: absolute;
    top: 30px;
  }
  .checkBoxAndError,
  .creditInputAndError {
    position: relative;
  }
  .sliderLabelDiv p {
    font-weight: 400;
    font-size: 16px;
  }
  .sliderLabelDiv p:first-child {
    color: #00acb1;
  }
  .sliderLabelDiv p:last-child {
    color: #ffffff;
  }
  .sliderLabelDiv {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .disclaimerTitle {
    font-weight: 900;
    font-size: 16px;
    color: #ffffff;
  }
  .disclaimerTxt,
  .termsTxt {
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
  .termsTxt {
    display: inline-block;
    margin-bottom: 50px;
  }
  .inputCheckbox {
    width: 30px;
    background-color: transparent;
    border-radius: 8px;
    color: #00acb1;
    display: inline-block;
    margin-right: 15px;
  }
  .termsLinks {
    text-decoration: none;
    color: #00acb1;
  }
  .modalCardDiv {
    margin-left: 280px;
  }
  .closeIconModal {
    position: absolute;
    top: 40px;
    right: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .creditCardRow {
    width: 300px;
    padding-bottom: 55px;
  }
  .creditCardRowLabel {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    display: block;
    width: 100%;
  }
  .firstCreditDiv,
  .secCreditDiv {
    display: flex;
    justify-content: space-between;
  }
  .secCreditDiv {
    margin-top: 115px;
    padding-bottom: 200px;
  }
  .creditCardRowInput {
    width: 300px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #00acb1;
    width: 100%;
    color: #00acb1;
    font-weight: 400;
    font-size: 16px;
  }
  .creditCardRowInputError {
    border-bottom: 2px solid red;
  }
  .creditCardRowDiv {
    display: flex;
    flex-direction: column;
  }
  .firstNameLabel,
  .firstCreditDiv {
    margin-top: 130px;
  }
  .formBtn {
    width: 580px;
    padding-top: 18px;
    padding-bottom: 18px;
    color: #ffffff;
    background: #00acb1;
    border-radius: 8px;
    margin: auto;
    display: block;
  }
`;
