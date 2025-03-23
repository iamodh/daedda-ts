import styled from "styled-components";

const Container = styled.footer`
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 640px;
  margin: 0 auto;
`;

const Tab = styled.div`
  display: flex;
  flex: 1;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xs};
`;

const Footer = () => {
  return (
    <Container>
      <Tab>
        <img src="/icons/history.svg" />
        <span>히스토리</span>
      </Tab>
      <Tab>
        <img src="/icons/home.svg" />
        <span>홈</span>
      </Tab>
      <Tab>
        <img src="/icons/me.svg" />
        <span>내 정보</span>
      </Tab>
    </Container>
  );
};

export default Footer;
