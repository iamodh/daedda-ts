import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
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
