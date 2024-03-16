import axios from "axios";

const API_URL = "http://localhost:5000";


export const isAPIup = async () => {
  try {
    const response = await axios.get(`${API_URL}/up`, {
      timeout: 2000
    });
    return true;
  } catch (error) {
    console.log("Error occurred");
    if (error.code === 'ECONNABORTED') {
      console.log('Request timed out');
    } else {
      console.log(error.message);
    }
    return false;
  }
};
