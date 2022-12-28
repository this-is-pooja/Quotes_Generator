import { Box, Flex, HStack } from "@chakra-ui/react";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Flex bg="red" h="4rem" w="100%">
        <HStack>
        <Link href="/" passHref>
          <Box color="white" ml="2rem" fontSize="2rem" cursor="pointer">
            Quotes_Generator
          </Box>
          </Link>
        </HStack>
      </Flex>
      <Flex
        h="4rem"
        w="100%"
        bg="black"
        position="fixed"
        bottom="0"
        color="white"
      >
        <Box mt="1.2rem" style={{ marginLeft: "42%" }}>
          &#169; copyright 2021 Quotes_Generator
        </Box>
      </Flex>
    </>
  );
}
