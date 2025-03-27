import { formatDate, getWorkedTime } from "@utils/time";
import styled from "styled-components";
import { JobPost } from "types";

const Container = styled.article`
  display: flex;
  padding: 16px;
  box-shadow: ${(props) => props.theme.shadows.postCard};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  min-width: 0;

  h3 {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: 700;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes["sm"]};
    }
  }

  h5 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray[500]};

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes["xs"]};
    }
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary[400]};

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes["sm"]};
    }
  }

  p {
    font-weight: 600;

    @media only screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes["xs"]};
    }
  }
`;

const Thumbnail = styled.div`
  margin-left: auto;
  div,
  img {
    aspect-ratio: 1 / 1;
    width: 124px;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    object-fit: cover;

    @media only screen and (max-width: 768px) {
      width: 100px;
      margin-left: 16px;
    }
  }

  div {
    background-color: ${(props) => props.theme.colors.gray[300]};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

type PostCardProps = {
  item: JobPost;
};

const PostCard = ({ item }: PostCardProps) => {
  return (
    <Container>
      <Info>
        <h3 title={item.name}>{item.name}</h3>
        <h5>{item.extra.condition.company}</h5>
        <h4>
          {item.price.toLocaleString()}원ㆍ시급{" "}
          {(
            item.price / getWorkedTime(item.extra.condition.workTime)
          ).toLocaleString()}
          원
        </h4>
        <p>
          {formatDate(item.extra.condition.date)}ㆍ
          {item.extra.condition.workTime[0]} ~{" "}
          {item.extra.condition.workTime[1]}ㆍ
          {getWorkedTime(item.extra.condition.workTime)}시간
        </p>
      </Info>
      <Thumbnail>
        {item.mainImages ? (
          <img
            src={`https://11.fesp.shop/files/final01/${item.mainImages[0].name}`}
          />
        ) : (
          <div>이미지</div>
        )}
      </Thumbnail>
    </Container>
  );
};

export default PostCard;
