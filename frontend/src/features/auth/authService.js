import axios from "axios";

const API_URL = "/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  console.log(`URL: ${response.API_URL}`)
  console.log(`User data to register: ${response.data}`)
  return response.data;
};

const authService = {
  register,
};

export default authService;
