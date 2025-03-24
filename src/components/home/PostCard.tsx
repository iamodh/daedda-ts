import styled from "styled-components";

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
  div {
    aspect-ratio: 1 / 1;
    width: 124px;
    background-color: ${(props) => props.theme.colors.gray[300]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius.lg};
  }
`;

type PostCardPropType = {
  item: object;
};

const PostCard = ({ item }: PostCardPropType) => {
  return (
    <Container>
      <Info>
        <h3>{item.name}</h3>
        <h5>기장대게할인마트ㆍ민락동</h5>
        <h4>90,000원ㆍ시급 15,000원</h4>
        <p>12/19 목ㆍ10:00 ~ 16:00ㆍ6시간</p>
      </Info>
      <Thumbnail>
        <div>이미지</div>
      </Thumbnail>
    </Container>
  );
};

export default PostCard;
