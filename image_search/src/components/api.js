import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 4rNIj-eRp4GocFyvhaLX-cta0kp1vsD19_xc-3GcYZE",
    },
    params: {
      query: term,
    },
  });
  // console.log(response);
  return response.data.results;
};

export default searchImages;
