import styled from "styled-components";

const Container = styled.form`
  position: relative;

  input {
    width: 100%;
    height: 40px;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    border: ${(props) => props.theme.colors.primary[300]} solid 2px;
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSizes.base};
    padding-left: 14px;
    padding-right: calc(16px + 24px + 4px);
    outline-color: ${(props) => props.theme.colors.primary[400]};
  }

  img {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const SearchForm = () => {
  return (
    <Container>
      <input type="text" placeholder="관심있는 장소를 검색해보세요." />
      <img src="/icons/search.svg" />
    </Container>
  );
};

export default SearchForm;
