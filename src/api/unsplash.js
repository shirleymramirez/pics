import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 7b79c8e23c38e388c02d6d2af99253c49e0a56d9f8b00babaa029f33a85d2cd2"
  }
});
