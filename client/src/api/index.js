import axios from "axios";
import jwt_decode from "jwt-decode";

const API = axios.create({ baseURL: "http://localhost:4001" });
const refreshToken = async () => {
  try {
    const res = await axios.post("http://localhost:4001/refresh", {
      token: JSON.parse(localStorage.getItem("profile")).refreshToken,
    });
    console.log(res);
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
    };
  } catch (err) {
    console.log(err);
  }
};

API.interceptors.request.use(async (req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).accessToken
    }`;
    const currentDate = new Date();
    const decodedToken = jwt_decode(
      JSON.parse(localStorage.getItem("profile")).accessToken
    );
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      const data = await refreshToken();
      req.headers["authorization"] = "Bearer " + data.accessToken;
      const newData = JSON.parse(localStorage.getItem("profile"));
      newData.accessToken = data.accessToken;
      newData.refreshToken = data.refreshToken;
      localStorage.setItem("profile", JSON.stringify({ ...newData }));
    }
  }
  return req;
});

export const fetchProductLists = () => API.get(`/productlist`);
export const fetchDiseaseLists = () => API.get("/disease");
export const fetchDiseaseListsById = (id) => API.get(`/disease/${id}`);
export const fetchProductListsById = (id) => API.get(`/productlist/${id}`);
export const LogIn = (formData) => API.post("/login", formData);
export const SignUp = (formData) => API.post("/signup", formData);
export const LogOut = (refreshToken) =>
  API.post("/logout", { token: refreshToken });
