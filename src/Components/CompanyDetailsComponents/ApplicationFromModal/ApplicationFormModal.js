import React, { useState } from "react";
import { ApplicationFormModalStyle } from "./ApplicationFormModalStyle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PaymentIcon from "@mui/icons-material/Payment";
import { Checkbox, Slider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CompanyDetailsCard from "../../CompanyDetailsCard/CompanydetalisCard";
import closeIcon from "../../../images/CompanyDetails/closeIcon.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { hideApplicationModal } from "../../../Redux/DarkModeReducer";

import * as yup from "yup";
import { useDispatch } from "react-redux";
function ApplicationFormModal() {
  const [sliderValue, setSliderValue] = useState(0);
  const [isNameInput, setIsNameInput] = useState(true);
  const [isCreditCard, setIsCreditCard] = useState(false);
  const navigate = useNavigate();
  const handlesubmitComplete = () => {
    navigate("/CompanyDetails");
  };
  const dispatch = useDispatch();

  const handleSliderChange = (e, newValue) => {
    setSliderValue(newValue);
  };
  const FirstNameForm = () => {
    const firstNameSchema = yup
      .object({
        firstName: yup.string().min(3).required("you must enter a valid name"),
        checkbox: yup
          .boolean()
          .oneOf([true], "You must accept the terms and conditions"),
      })
      .required();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(firstNameSchema),
    });
    const onNameInputSubmit = () => {
      setIsNameInput(false);
      setIsCreditCard(true);
    };
    return (
      <form onSubmit={handleSubmit(onNameInputSubmit)}>
        <label className="firstNameLabel">First name*</label>
        <div className="inputAndError">
          <input
            placeholder="jane doe"
            className={
              errors.firstName
                ? "firstNameInput firstNameInputError"
                : "firstNameInput"
            }
            {...register("firstName")}
          />
          <p className="firstnameError">{errors.firstName?.message}</p>
        </div>

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
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s.
        </p>
        <div className="checkBoxAndError">
          <Checkbox className="inputCheckbox" {...register("checkbox")} />
          <p className="termsTxt">
            By clicking <Link className="termsLinks">Next</Link> you agree to
            syndo’s <Link className="termsLinks">terms</Link>
          </p>
          <p className="checkboxError">{errors.checkbox?.message}</p>
        </div>

        <button type="submit" className="formBtn">
          Next
        </button>
      </form>
    );
  };
  const CreditCardForm = () => {
    const creditCardSchema = yup
      .object({
        CardHolderName: yup
          .string()
          .min(3)
          .required("you must enter a valid name"),
        cardNumber: yup
          .number()
          .min(3)
          .required("invalid value (should be numbers only)"),
        cvv: yup
          .number()
          .min(3)
          .required("invalid value (should be 3 digits only)"),
      })
      .required();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(creditCardSchema),
    });
    const handlecreditCardSumbit = () => {
      alert("form submitted");
      setTimeout(() => {
        handlesubmitComplete();
      }, 3000);
    };
    return (
      <form onSubmit={handleSubmit(handlecreditCardSumbit)}>
        <div className="firstCreditDiv">
          <div className="creditCardRowDiv">
            <label className="creditCardRowLabel">Cardholder Name*</label>
            <div className="creditInputAndError">
              <input
                type="text"
                className={
                  errors.CardHolderName
                    ? "creditCardRowInput creditCardRowInputError"
                    : "creditCardRowInput"
                }
                {...register("CardHolderName")}
              />
              {errors.CardHolderName && (
                <p className="creditErrorMsg">
                  {errors.CardHolderName.message}
                </p>
              )}
            </div>
          </div>
          <div className="creditCardRowDiv">
            <label className="creditCardRowLabel">Card Number *</label>
            <div className="creditInputAndError">
              <input
                type="text"
                className={
                  errors.cardNumber
                    ? "creditCardRowInput creditCardRowInputError"
                    : "creditCardRowInput"
                }
                {...register("cardNumber")}
              />
              {errors.cardNumber && (
                <p className="creditErrorMsg">{errors.cardNumber.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="secCreditDiv">
          <div className="creditCardRowDiv">
            <label className="creditCardRowLabel">Expiry Date*</label>
            <div className="creditInputAndError">
              <input type="date" className="creditCardRowInput" />
            </div>
          </div>
          <div className="creditCardRowDiv">
            <label className="creditCardRowLabel">CVV*</label>
            <div className="creditInputAndError">
              <input
                type="text"
                className={
                  errors.cvv
                    ? "creditCardRowInput creditCardRowInputError"
                    : "creditCardRowInput"
                }
                {...register("cvv")}
              />
              {errors.cvv && (
                <p className="creditErrorMsg">{errors.cvv.message}</p>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="formBtn">
          Submit
        </button>
      </form>
    );
  };
  return (
    <ApplicationFormModalStyle>
      <div className="mainDiv">
        <div className="modalIconsDiv">
          <div className="briefCaseIconDiv">
            <BusinessCenterIcon
              className={
                isNameInput ? "briefCaseIconSelected" : "briefCaseIcon"
              }
            />
            <p>
              01
              <br /> Step-1
            </p>
          </div>
          <div className="paymentIconDiv">
            <PaymentIcon
              className={isCreditCard ? "paymentIconSelected" : "paymentIcon"}
            />
            <p>
              02
              <br /> Step-02
            </p>
          </div>
        </div>
        <div className="applicationFormDiv">
          <h3>Application Form</h3>

          {isNameInput && <FirstNameForm />}
          {isCreditCard && <CreditCardForm />}
        </div>
        <div className="modalCardDiv">
          <CompanyDetailsCard />
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(hideApplicationModal());
        }}
        className="closeIconModal"
      >
        <img src={closeIcon} />
      </button>
    </ApplicationFormModalStyle>
  );
}

export default ApplicationFormModal;
