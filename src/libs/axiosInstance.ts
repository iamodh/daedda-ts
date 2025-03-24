import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://11.fesp.shop",
  timeout: 1000 * 15,
  headers: {
    "Content-Type": "application/json", // request의 데이터 타입
    accept: "application/json", // response의 데이터 타입
    "client-id": "final01",
  },
});

export default axiosInstance;
