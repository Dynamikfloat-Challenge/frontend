import { Table, Badge, Button } from "@radix-ui/themes";
import Link from "next/link";

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
          <Table.Row key={user.id}>
            <Table.RowHeaderCell>{user.nickname}</Table.RowHeaderCell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.birth_date}</Table.Cell>
            <Table.Cell className="flex flex-wrap gap-1">
              {user.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </Table.Cell>
            <Table.Cell>
                <Link
                  href={`/${user.id}`}
                  className="bg-purple-100 rounded text-blue-800 hover:bg-purple-200 p-1.5 "
                >
                  View profile
                </Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default DevsTable;
