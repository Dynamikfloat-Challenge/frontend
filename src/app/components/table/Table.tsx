import { Table, Badge } from "@radix-ui/themes";

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
              <button className="text-blue-500 hover:underline">
                View Profile
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default DevsTable;
