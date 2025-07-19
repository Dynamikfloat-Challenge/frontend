import { Box, Card, Text, Badge, Heading, Flex } from "@radix-ui/themes";

function UserCard({ user }) {
  const { name, nickname, birth_date, stack } = user;
  return (
    <Box px="5" py="6" className="max-w-xl mx-auto shadow-lg mt-4 rounded">
      <Flex direction="column" align="center" justify="center" gap="2">
        {/* Name + nickname */}
        <Heading size="8" weight="bold">
          {name}
        </Heading>
        <Text color="gray" size="3">
          @{nickname}
        </Text>

        {/* Birth date */}
        <Text as="p" mt="3" size="3">
          <strong>Birth date:</strong> {birth_date}
        </Text>

        {/* Stack badges */}
        <Text as="p" mt="5" mb="2" size="3" weight="medium">
          Tech stack
        </Text>

        {stack?.length ? (
          <Flex gap="2" wrap="wrap">
            {stack.map((item) => {
              return (
                <Badge key={item} size="2" color="purple">
                  {item}
                </Badge>
              );
            })}
          </Flex>
        ) : (
          <Text color="gray" size="2">
            No stack listed.
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default UserCard;
