import React from "react";
import DarkModeContainer from "../../Components/DarkModeContainer/darkModeContainer";
import { CompanyDetailsStyle } from "./CompanyDetailsStyle";
import AuthenticationIcon from "../../images/CompanyDetails/Authenticated.png";
import CompanyDetailsCard from "../../Components/CompanyDetailsCard/CompanydetalisCard";
import { Link } from "react-router-dom";
import ShareIcon from "../../images/CompanyDetails/shareIcon.png";
import fbIcon from "../../images/CompanyDetails/fbIcon.png";
import instagramIcon from "../../images/CompanyDetails/instagramIcon.png";
import linkedinIcon from "../../images/CompanyDetails/linkedinIcon.png";
import AboutCompany from "../../Components/CompanyDetailsComponents/AboutCompany/AboutCompany";
import HeaderNavigationIcons from "../../Components/CompanyDetailsComponents/HeaderNavigationIcons/HeaderNavigationIcons";
import ApplicationFormModal from "../../Components/CompanyDetailsComponents/ApplicationFromModal/ApplicationFormModal";
import { useDispatch, useSelector } from "react-redux";
import teldaIcon from "../../images/Cards/Telda-logo.png";
import { showApplicationModal } from "../../Redux/DarkModeReducer";

function CompanyDetails() {
  const dispatch = useDispatch();
  const { isModalVisible: isModalVisible } = useSelector((state) => state);
  return (
    <CompanyDetailsStyle>
      {isModalVisible ? (
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
                      <img src={teldaIcon} />
                    </div>
                    <div>
                      <h2>Telda</h2>
                      <p>LIVE</p>
                    </div>
                    <img
                      className="authenticationIcon"
                      src={AuthenticationIcon}
                    />
                  </div>
                  <button
                    onClick={() => {
                      dispatch(showApplicationModal());
                    }}
                  >
                    Apply
                  </button>
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
