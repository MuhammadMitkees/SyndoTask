import styled from "styled-components";

export const FooterStyle = styled.div`
  margin-top: 200px;
  padding-bottom: 20px;
  .headerDivFooter {
    display: flex;
    justify-content: space-between;
  }
  .logoDivFooter img {
    width: 10vw;
    ${(props) =>
      !props.isDark &&
      `    background-color: black;
      border-radius: 8px;
      padding:10px
`}
  }
  .logoDivFooter h5,
  .seconDivHeaderFooter div h5 {
    font-size: 16px;
    font-weight: 900;
    text-transform: uppercase;
    color: #ffffff;
    ${(props) => !props.isDark && `color: black`}
  }
  .footerLogoLinks,
  .footerLink {
    text-decoration: none;
    color: #ffffff;
    ${(props) => !props.isDark && `color: black`}
  }
  .footerLogoLinks:last-child {
    margin-left: 60px;
  }
  .seconDivHeaderFooter {
    display: flex;
  }
  .subDivseconDivHeaderFooter {
    display: flex;
    flex-direction: column;
    margin-left: 120px;
  }
  .footerLink {
    margin-top: 30px;
  }
  .footerMainTxt {
    width: 1100px;
    color: #656f77;
    margin-top: 50px;
    ${(props) => !props.isDark && `color: black`}
  }
  .footerRightsTxt,
  .footerMainTxt,
  .footerLogoLinks,
  .footerLink {
    font-size: 12px;
    font-weight: 400;
  }
  .footerRightsTxt {
    color: #ffffff;
    margin-bottom: 0;
    ${(props) => !props.isDark && `color: black`}
  }
`;
