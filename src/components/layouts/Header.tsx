import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 640px;
  padding: 0 24px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;

  img {
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  img {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <img src="/logo.png" width="140px" />
      <Icons>
        <img src="/icons/bar.svg" />
      </Icons>
    </Container>
  );
};

export default Header;
