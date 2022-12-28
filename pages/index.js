import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";

import { GrAdd } from "react-icons/gr";
import Head from "next/head";
import Layout from "/layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quotes_Generator</title>
      </Head>
      <Layout>
        <Box
          bg="cream"
          h="40rem"
          w="100%"
          style={{
            backgroundImage: "linear-gradient(to bottom,#DCCC9F,#75B7BA)",
          }}
        >
          <Text
            fontSize={{
              base: "2.2rem",
              md: "2.6rem",
              lg: "3.6rem",
              xl: "4.6rem",
            }}
            color="#00008b"
            fonts="sec"
            p="2.1rem 1rem 0 1rem"
            align="center"
            style={{ textShadow: "2px 2px 4px red" }}
          >
            Simple, Fast, Free Quote Image Maker.
          </Text>
          <br />
          <Text
            fontSize={{
              base: "0.9rem",
              md: "1.8rem",
              lg: "2rem",
              xl: "2.2rem",
            }}
            color="red"
            m="0 10rem"
            mb="3rem"
            fonts="sec"
            align="center"
            style={{ fontWeight: 500 }}
          >
            Quotes_Generator turns any text you write for social, web, and
            printouts by combining worry-free licensed fonts.
          </Text>

          <Text
            color="#00008b"
            align="center"
            mb="1rem"
            fontSize={{ base: "1.2rem", md: "1.4rem", lg: "1.6rem" }}
          >
            <b>No SignUp Required.</b>
          </Text>
          <Text align="center" color="black" mb="2rem">
            <b>START CREATING FOR FREE</b>
          </Text>
          <Center>
            <Link href="/Make_thoughts" passHref>
              <HStack direction="row">
                <Flex
                  w="9rem"
                  h="2.5rem"
                  border="3px solid #8D021F"
                  style={{ borderRadius: "1rem" }}
                >
                  <Box mt="0.8rem" ml="1.9rem" mr="0.2rem">
                    <GrAdd />
                  </Box>
                  <Box as="button" fontSize="md" color="red">
                    <b>Create</b>
                  </Box>
                </Flex>
              </HStack>
            </Link>
          </Center>
        </Box>
      </Layout>
    </>
  );
}
