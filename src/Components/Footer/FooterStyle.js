import styled from "styled-components";

export const FooterStyle = styled.div`
  margin-top: 200px;
  .headerDivFooter {
    display: flex;
    justify-content: space-between;
  }
  .logoDivFooter h5,
  .seconDivHeaderFooter div h5 {
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    color: #ffffff;
  }
  .footerLogoLinks,
  .footerLink {
    text-decoration: none;
    color: #ffffff;
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
    width: 1300px;
    color: #656f77;
    margin-top: 50px;
  }
  .footerRightsTxt,
  .footerMainTxt,
  .footerLogoLinks,
  .footerLink {
    font-size: 16px;
    font-weight: 400;
  }
  .footerRightsTxt {
    color: #ffffff;
    margin-bottom: 0;
  }
`;
