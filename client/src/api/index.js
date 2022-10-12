import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4001" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export const fetchProductLists = () => API.get(`/productlist`);
export const fetchDiseaseLists = () => API.get("/disease");
export const fetchDiseaseListsById = (id) => API.get(`/disease/${id}`);
export const fetchProductListsById = (id) => API.get(`/productlist/${id}`);
