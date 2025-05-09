import Dropdown from "@components/common/Dropdown";
import SearchForm from "@components/common/SearchForm";
import Location from "@components/home/Location";
import PostCard from "@components/home/PostCard";
import useGetAddress from "@hooks/useGetAddress";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import useMediaQuery from "@hooks/useMediaQuery";
import axiosInstance from "@libs/axiosInstance";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import { JobPost } from "types";

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

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam }) => {
      return await axiosInstance.get(`/products?page=${pageParam}&limit=5`);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, totalPages } = lastPage.data.pagination;
      return page < totalPages ? page + 1 : null;
    },
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.data.item),
      pageParams: data.pageParams,
    }),
    staleTime: 1000 * 10,
  });

  const handleIntersect = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const lastItemRef = useIntersectionObserver(handleIntersect);

  /* 위치 주소 획득 */
  const { address, isAddressLoading, fetchAddress } = useGetAddress();

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <Container>
      <Location
        address={address}
        isLoading={isAddressLoading}
        onClick={fetchAddress}
      />
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
          data?.pages.map((post: JobPost, index, pages) => (
            <PostCard
              item={post}
              key={post._id}
              ref={index === pages.length - 1 ? lastItemRef : null}
            />
          ))}
      </PostSection>
    </Container>
  );
};

export default Home;
