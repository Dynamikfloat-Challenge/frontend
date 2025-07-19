import axios from "axios";

export async function getAllUsers(term) {
  const response = await axios({
    method: "get",
    url: `http://localhost:8080/devs${term}`,
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

export async function createUser(userData) {
    const response = await axios({
        method: "post",
        url: "http://localhost:8080/devs",
        data: userData,
    });

    return response.data;
}