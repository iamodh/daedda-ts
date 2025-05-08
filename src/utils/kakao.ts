import axios from "axios";
import { KakaoCoordToAddressResponse } from "types";

export const getRoadAdress = async (
  x: number,
  y: number
): Promise<string | null> => {
  try {
    const res = await axios.get<KakaoCoordToAddressResponse>(
      "https://dapi.kakao.com/v2/local/geo/coord2address.json",
      {
        params: {
          // x: 128.79518859198913,
          // y: 35.18941522755004,
          x: String(x),
          y: String(y),
        },
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
        },
      }
    );
    if (res.data.documents.length === 0) return null;

    return res.data.documents[0].road_address.address_name ?? null;
  } catch (error) {
    console.error("Error fetching address:", error);
    return null;
  }
};
