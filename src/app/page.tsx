import { getAllUsers } from "../../services/dynamik-backend";
import DevsTable from "./components/table/Table";

export default async function Home() {
  const users = await getAllUsers();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Developers List</h1>
      <DevsTable users={users} />
    </div>
  );
}
