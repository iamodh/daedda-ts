import ToggleButton from "@components/common/ToggleButton";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  min-height: 36px;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 500;
    margin-right: 8px;

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes.lg};
    }
  }

  img {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const Address = styled.div`
  display: flex;
  align-items: center;
`;

const Controls = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Location = () => {
  return (
    <Container>
      <Address>
        <h2>동래구 중앙대로 1473번길 14-2</h2>
        <img src="/icons/location.svg" />
      </Address>
      <Controls>
        <ToggleButton>3km 이내</ToggleButton>
        <ToggleButton>10km 이내</ToggleButton>
        <ToggleButton>전체 보기</ToggleButton>
      </Controls>
    </Container>
  );
};

export default Location;
