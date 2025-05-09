import ToggleButton from "@components/common/ToggleButton";
import styled from "styled-components";
import { KakaoCoordToAddressResponse } from "types";

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

type LocationProps = {
  address: KakaoCoordToAddressResponse["documents"][0] | null;
  isLoading: boolean;
  onFetchAddress: () => void;
  toggledDistance: null | string;
  handleToggledDistance: (value: string) => void;
};

const distances = [
  { text: "3km 이내", value: "3km" },
  { text: "10km 이내", value: "10km" },
  { text: "전체보기", value: "all" },
];

const Location = ({
  address,
  isLoading,
  onFetchAddress,
  toggledDistance,
  handleToggledDistance,
}: LocationProps) => {
  console.log(isLoading);
  return (
    <Container>
      <Address>
        <h2>
          {isLoading
            ? "위치를 불러오는 중입니다."
            : address?.road_address.address_name ??
              "현재 위치를 불러올 수 없습니다."}
        </h2>
        <img src="/icons/location.svg" onClick={onFetchAddress} />
      </Address>
      <Controls>
        {distances.map((distance, index) => (
          <ToggleButton
            key={index}
            isActive={toggledDistance === distance.value}
            value={distance.value}
            onClick={handleToggledDistance}
          >
            {distance.text}
          </ToggleButton>
        ))}
      </Controls>
    </Container>
  );
};

export default Location;
