import Dropdown from "@components/common/Dropdown";
import SearchForm from "@components/common/SearchForm";
import Location from "@components/home/Location";
import PostCard from "@components/home/PostCard";
import useMediaQuery from "@hooks/useMediaQuery";
import axiosInstance from "@libs/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import styled from "styled-components";
import { JobPost, ProductResponse } from "types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FilterSection = styled.section`
  display: flex;
  gap: 8px;
  height: 32px;
  margin-bottom: 8px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 8px;
  }
  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
`;

const timeFilterOpts = [
  {
    name: "시간 순 정렬",
    value: "default",
  },
  {
    name: "0 ~ 4 시간",
    value: "short",
  },
  {
    name: "4 ~ 8 시간",
    value: "medium",
  },
  {
    name: "8시간 초과",
    value: "long",
  },
];

const payFilterOpts = [
  {
    name: "시급 순 정렬",
    value: "default",
  },
  {
    name: "10,000원 이하",
    value: "low",
  },
  {
    name: "10,000원 초과",
    value: "high",
  },
];

const Home = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const { data, isLoading } = useQuery<
    AxiosResponse<ProductResponse>,
    AxiosError,
    JobPost[]
  >({
    queryKey: ["proucts"],
    queryFn: () => {
      return axiosInstance.get("/products");
    },
    select: (res) => {
      console.log(res);
      return res.data.item;
    },
    staleTime: 1000 * 10,
  });

  return (
    <Container>
      <Location />
      <SearchForm />
      <FilterSection>
        <Filter>
          <span>시간</span>
          <Dropdown
            options={timeFilterOpts}
            width={isTablet ? "100px" : "120px"}
          />
        </Filter>
        <Filter>
          <span>시급</span>
          <Dropdown
            options={payFilterOpts}
            width={isTablet ? "100px" : "120px"}
          />
        </Filter>
      </FilterSection>
      <PostSection>
        {!isLoading &&
          data &&
          data.map((item, index) => <PostCard item={item} key={index} />)}
      </PostSection>
    </Container>
  );
};

export default Home;
