import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad5cc9efa5b849b99eecbf578bdea83d",
  },
});
