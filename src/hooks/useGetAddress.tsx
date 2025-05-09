import { getRoadAdress } from "@utils/kakao";
import { useState } from "react";
import { KakaoCoordToAddressResponse } from "types";

const useGetAddress = () => {
  const [address, setAddress] = useState<
    KakaoCoordToAddressResponse["documents"][0] | null
  >(null);
  const [isAddressLoading, setIsAddressLoaing] = useState<boolean>(false);

  const fetchAddress = () => {
    setIsAddressLoaing(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const newAddress = await getRoadAdress(
          position.coords.latitude,
          position.coords.longitude
        );
        if (newAddress) {
          setAddress(newAddress);
          setIsAddressLoaing(false);
        }
      },
      (error) => {
        console.log("Geolocation error : " + error);
        setIsAddressLoaing(false);
      }
    );
  };

  return { address, isAddressLoading, fetchAddress };
};

export default useGetAddress;
