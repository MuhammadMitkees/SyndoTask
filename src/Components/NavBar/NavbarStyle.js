import styled from "styled-components";

export const NavbarStyle = styled.div`
  padding: 67px 10px;
  /* position: fixed; */
  /* width: 100%; */
  max-width: 1250px;
  margin: auto;

  h1 {
    color: wheat;
  }
  .logoH1 {
    display: none;
  }
  .imageLogoLink img {
    width: 100%;
  }
  .imageLogoLink {
    width: 120px;
  }
  .navbarContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbarContainer a {
    color: white;
    font-size: 16px;
    font-weight: 900;
  }
  .navbarContainerItem {
    width: 30%;
  }
  .navbarContainerItem:nth-child(2) a:nth-child(2) {
    margin-right: 100px;
    margin-left: 100px;
  }

  .navbarContainerItem:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
  }
  .getstartedBtn {
    margin-left: 100px;
    background-color: #00acb1;
    border-radius: 8px;
    padding: 18px 50px;
  }
`;
