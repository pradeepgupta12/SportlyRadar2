import axios from "axios";
import { VITE_BACKEND_URL } from "../../config.js";




// 🔹 Cricket News
export const getCricketNews = async () => {
  try {
    const res = await axios.get(`${ VITE_BACKEND_URL}/news/cricket`)
    return res.data
  } catch (err) {
    console.error("Cricket News Error:", err)
    return { success: false, data: [] }
  }
}

// 🔹 IPL News
export const getIPLNews = async () => {
  try {
    const res = await axios.get(`${ VITE_BACKEND_URL}/news/ipl`)
    return res.data
  } catch (err) {
    console.error("IPL News Error:", err)
    return { success: false, data: [] }
  }
}



