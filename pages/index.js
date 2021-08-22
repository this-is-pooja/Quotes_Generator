import { Box,Text,Center,Flex,HStack } from "@chakra-ui/react";
import {GrAdd} from "react-icons/gr";
import Layout from "./com/layout";
import Link from 'next/link';
import Head from "next/head";
function Home(){
return(
  <>
  <Head><title>Quotes_Generator</title></Head>
    <Layout>
      <Box bg="cream" h="40rem" w="100%">
        <Text fontSize="4rem"color="#00008b" fonts="sec" align="center"pt="2.1rem"style={{ textShadow: "2px 2px 4px red"}}>Simple, Fast, Free Quote Image Maker.</Text>
        <br />
        <Text fontSize="2.5rem" color="red" ml="4rem"mr="4rem" fonts="sec" align="center" style={{textShadow: "2px 2px #FFFFFF"}}>
        QuotesCover turns any text you write into beautiful graphics for social,
        web, and printouts by combining worry-free licensed fonts and
        breathtaking backgrounds.
        </Text>
        <br />
        <Text color="#00008b" align="center" fontSize="1.6rem"><b>No Design Skill Or SignUp Required.</b></Text>
        <br />
        <Text align="center" color="black"><b>START CREATING FOR FREE</b></Text>
        <br />
        <br />
        <Center>
          <Link href="/Make_thoughts">
          <HStack direction="row" >
         <Flex w="9rem" h="2.5rem"border="3px solid #8D021F"style={{borderRadius:"1rem"}}>
						<Box mt="0.6rem"ml="1.9rem"mr="0.2rem"><GrAdd /></Box>
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
)
}
export default Home