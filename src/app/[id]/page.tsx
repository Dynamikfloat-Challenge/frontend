import { getUserById } from "../../../services/dynamik-backend";
import UserCard from "../components/card/Card";

export default async function UserPage({params} ) {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <div className="container mx-auto p-4">
      <UserCard user={user} />
    </div>
  );
}
