import axios from "axios";

// axios 객체 생성
export default axios.create({
  // baseURL: "http://13.124.214.146:80/happyhouse", // AWS 서버랑 연결해서 쓰려면
  baseURL: "http://localhost:8051/zipsin", // 로컬용
  headers: {
    "Content-type": "application/json"
  }
});
