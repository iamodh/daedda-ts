import Dropdown from "@components/common/Dropdown";
import SearchForm from "@components/common/SearchForm";
import Location from "@components/home/Location";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterSection = styled.section`
  display: flex;
  gap: 8px;
  height: 32px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
  }
`;

const Home = () => {
  return (
    <Container>
      <Location />
      <SearchForm />
      <FilterSection>
        <Filter>
          <span>시간</span>
          <Dropdown>0 ~ 4시간</Dropdown>
        </Filter>
        <Filter>
          <span>급여</span>
          <Dropdown>시급 10,000원 이하</Dropdown>
        </Filter>
      </FilterSection>
    </Container>
  );
};

export default Home;
