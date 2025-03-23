import ToggleButton from "@components/common/ToggleButton";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 36px;

  h2 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 500;
    margin-right: 8px;
  }

  img {
    cursor: pointer;
  }
`;

const Controls = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 8px;
`;

const Location = () => {
  return (
    <Container>
      <h2>동래구 중앙대로 1473번길 14-2</h2>
      <img src="/icons/location.svg" />
      <Controls>
        <ToggleButton>3km 이내</ToggleButton>
        <ToggleButton>10km 이내</ToggleButton>
        <ToggleButton>전체 보기</ToggleButton>
      </Controls>
    </Container>
  );
};

export default Location;
