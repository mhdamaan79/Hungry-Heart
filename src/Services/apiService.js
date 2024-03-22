import axios from "axios";

const CORS_PROXY_URL = "https://cors-proxy4.p.rapidapi.com";

const makeRequestThroughProxy = async (
  targetUrl,
  method = "GET",
  data = null
) => {
  try {
    const requestUrl = `${CORS_PROXY_URL}/?url=${encodeURIComponent(
      targetUrl
    )}`;
    const response = await axios({
      method: method,
      url: requestUrl,
      headers: {
        "x-rapidapi-host": "cors-proxy4.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`, // Using the environment variable
        "Content-Type": "application/json",
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error("Error making request through CORS proxy:", error);
    throw error;
  }
};

export { makeRequestThroughProxy };
