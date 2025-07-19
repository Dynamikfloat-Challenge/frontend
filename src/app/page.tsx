"use client";

import { getAllUsers } from "../../services/dynamik-backend";
import DevsTable from "./components/table/Table";
import SearchBar from "./components/search-bar/SearchBar";
import { useState, useEffect } from "react";

export default function Home() {
  const [term, setTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const query = term ? `?terms=${term}` : "";
      const data = await getAllUsers(query);
      setUsers(data);
    }
    fetchUsers();
  }, [term]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Developers List</h1>
      <SearchBar onSubmit={setTerm} />
      <DevsTable users={users} />
    </div>
  );
}
