import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.main};
`;

const Home = () => {
  return (
    <div>
      메인 홈<Button>버튼</Button>
    </div>
  );
};

export default Home;
