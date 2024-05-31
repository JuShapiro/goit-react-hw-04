import axios from "axios";

const API_KEY = "Txsf32KSe6VwTctmc-_Kg5l8YZZPimJcwrL-Ho0lWnA";

axios.defaults.baseURL = "https://api.unsplash.com";

const getImages = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 15,
      orientation: "landscape",
      client_id: API_KEY,
    },
  });
  return data;
};

export default getImages;
