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

  h3 {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: 700;
  }

  h5 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray[500]};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary[400]};
  }

  p {
    font-weight: 600;
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
  console.log(item);
  const getWorkedTime = (workTime: [string, string]): number => {
    const startTime = Number(workTime[0].replace(":", ""));
    const endTime = Number(workTime[1].replace(":", ""));

    const timeGap = endTime - startTime;
    return Math.round(timeGap / 100);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const month = date.getMonth() + 1;
    const day = date.getDate();

    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = weekdays[date.getDay()];

    return `${month}/${day} ${weekday}`;
  };
  return (
    <Container>
      <Info>
        <h3>{item.name}</h3>
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
