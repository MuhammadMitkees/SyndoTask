import React, { useState } from "react";
import DarkModeContainer from "../../Components/DarkModeContainer/darkModeContainer";
import { CompanyDetailsStyle } from "./CompanyDetailsStyle";
import AuthenticationIcon from "../../images/CompanyDetails/Authenticated.png";
import trellaIcon from "../../images/Cards/trella-logo.png";
import CompanyDetailsCard from "../../Components/CompanyDetailsCard/CompanydetalisCard";
import { Link } from "react-router-dom";
import ShareIcon from "../../images/CompanyDetails/shareIcon.png";
import fbIcon from "../../images/CompanyDetails/fbIcon.png";
import instagramIcon from "../../images/CompanyDetails/instagramIcon.png";
import linkedinIcon from "../../images/CompanyDetails/linkedinIcon.png";
import AboutCompany from "../../Components/CompanyDetailsComponents/AboutCompany/AboutCompany";
import HeaderNavigationIcons from "../../Components/CompanyDetailsComponents/HeaderNavigationIcons/HeaderNavigationIcons";
import ApplicationFormModal from "../../Components/CompanyDetailsComponents/ApplicationFromModal/ApplicationFormModal";

function CompanyDetails() {
  const [showModal, setShowModal] = useState(true);
  return (
    <CompanyDetailsStyle>
      {showModal ? (
        <ApplicationFormModal />
      ) : (
        <>
          <DarkModeContainer />
          <div className="HeaderCompanyDetails">
            <div className="HeaderCompanyDetailsSubDiv">
              <HeaderNavigationIcons />
              <div className="detailsHeaderCompanyDetails">
                <div className="logoAndApply">
                  <div className="FirstDivLogoAndApply">
                    <div className="logoAndApplyLogo">
                      <img src={trellaIcon} />
                    </div>
                    <div>
                      <h2>Trella</h2>
                      <p>LIVE</p>
                    </div>
                    <img
                      className="authenticationIcon"
                      src={AuthenticationIcon}
                    />
                  </div>
                  <button>Apply</button>
                </div>
                <div className="CardHeaderCompanyDetails">
                  <CompanyDetailsCard isApplicationform={false} />
                </div>
              </div>
            </div>
          </div>
          <div className="CompanyDetailsMainContainer">
            <div className="SMIconsCompanydetails">
              <Link className="SMIconsLinksCompanydetails">
                <img src={ShareIcon} />
              </Link>
              <Link className="SMIconsLinksCompanydetails">
                <img src={fbIcon} />
              </Link>
              <Link className="SMIconsLinksCompanydetails">
                <img src={instagramIcon} />
              </Link>
              <Link className="SMIconsLinksCompanydetails">
                <img src={linkedinIcon} />
              </Link>
            </div>
            <div className="classficationCompanydetails">
              <div className="cardBgClassificationContainer">
                <p>PRE-SEED</p>
              </div>
            </div>
            <div className="aboutCompanyCompanydetails">
              <AboutCompany />
            </div>
          </div>
        </>
      )}
    </CompanyDetailsStyle>
  );
}

export default CompanyDetails;
