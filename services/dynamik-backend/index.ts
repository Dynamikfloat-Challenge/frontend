import axios from "axios";

export async function getAllUsers() {
  const response = await axios({
    method: "get",
    url: "http://localhost:8080/devs",
  });

  return response.data;
}

export async function getUserById(id: string) {
    const response = await axios({
        method: "get",
        url: `http://localhost:8080/devs/${id}`,
    });
    
    return response.data;
}