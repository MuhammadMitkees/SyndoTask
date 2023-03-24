import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 100%;
  margin: auto;
  background: #000001;

  ${(props) =>
    !props.navbarFixed &&
    `  opacity: 0.7;
      position: fixed;
`}
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
    max-width: 1200px;
    margin: auto;
    padding: 67px 10px;
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
