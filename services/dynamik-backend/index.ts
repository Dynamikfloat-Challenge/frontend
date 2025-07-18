import axios from "axios";

export async function getAllUsers() {
  const response = await axios({
    method: "get",
    url: "http://localhost:8080/devs",
  });

  return response.data;
}
