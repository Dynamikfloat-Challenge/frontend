import { Table, Badge, Button } from "@radix-ui/themes";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";

function DevsTable({ users }) {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Nickname</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Birth Date</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Stack</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id} className="hover:bg-gray-100">
            <Table.Cell>{user.nickname}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{new Date(user.birth_date).toISOString().slice(0, 10)}</Table.Cell>
            <Table.Cell className="flex flex-wrap gap-1">
              {user.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </Table.Cell>
            <Table.Cell>
                <Link
                  href={`/${user.id}`}
                  className="rounded text-black hover:text-blue-500 p-0 m-0 "
                >
                  <SquareUserRound className="inline-block ml-1" size={17} />
                </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default DevsTable;
