import React, { useState } from "react";
import { ApplicationFormModalStyle } from "./ApplicationFormModalStyle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaymentIcon from "@mui/icons-material/Payment";
import { Checkbox, Slider } from "@mui/material";
import { Link } from "react-router-dom";
import CompanyDetailsCard from "../../CompanyDetailsCard/CompanydetalisCard";
import closeIcon from "../../../images/CompanyDetails/closeIcon.png";
function ApplicationFormModal() {
  const [sliderValue, setSliderValue] = useState(0);
  const [isNameInput, setIsNameInput] = useState(false);
  const [isCreditCard, setIsCreditCard] = useState(true);
  const CreditCardRow = (props) => {
    return (
      <div className="creditCardRowDiv">
        <label className="creditCardRowLabel">{props.label}</label>
        <input
          placeholder={props.placeholder}
          type={props.type}
          className="creditCardRowInput"
        />
      </div>
    );
  };
  const handleSliderChange = (e, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <ApplicationFormModalStyle>
      <div className="mainDiv">
        <div className="modalIconsDiv">
          <div className="briefCaseIconDiv">
            <BusinessCenterIcon className="briefCaseIcon" />
            <p>
              01
              <br /> Step-1
            </p>
          </div>
          <div className="paymentIconDiv">
            <PaymentIcon className="paymentIcon" />
            <p>
              02
              <br /> Step-02
            </p>
          </div>
        </div>
        <div className="applicationFormDiv">
          <h3>Application Form</h3>

          {isNameInput && (
            <form>
              {" "}
              <label className="firstNameLabel">First name*</label>
              <input placeholder="jane doe" className="firstNameInput" />
              <label>Amount*</label>
              <Slider
                max={100000}
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                className="slider"
                onChange={handleSliderChange}
              />
              <div className="sliderLabelDiv">
                <p>{sliderValue} EGP</p>
                <p> 100,000 EGP</p>
              </div>
              <h3 className="disclaimerTitle">Disclaimer</h3>
              <p className="disclaimerTxt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <Checkbox defaultChecked className="inputCheckbox" />
              <p className="termsTxt">
                By clicking <Link className="termsLinks">Next</Link> you agree
                to syndo’s <Link className="termsLinks">terms</Link>
              </p>
              <button type="submit" className="formBtn">
                Next
              </button>
            </form>
          )}
          {isCreditCard && (
            <form>
              <div className="firstCreditDiv">
                <CreditCardRow label="Cardholder Name*" type="text" />
                <CreditCardRow label="Card Number *" type="text" />
              </div>
              <div className="secCreditDiv">
                <CreditCardRow label="Expiry Date*" type="date" />
                <CreditCardRow label="CVV*" type="number" />
              </div>
              <button type="submit" className="formBtn">
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="modalCardDiv">
          <CompanyDetailsCard />
        </div>
      </div>

      <button className="closeIconModal">
        <img src={closeIcon} />
      </button>
    </ApplicationFormModalStyle>
  );
}

export default ApplicationFormModal;
