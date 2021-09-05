import { Box,Flex,HStack} from "@chakra-ui/react";
export default function Navbar(){
    return(
        <>
         <Flex bg="red" h="4rem" w="100%">
         <HStack>
            <Box color="white"ml="2rem" fontSize="2rem">Quotes_Generator</Box>
         </HStack>
         </Flex>
        <Flex h="6rem" w="100%" bg="black"position="fixed" bottom="0" color="white">
            <Box mt="2.2rem"ml="42rem">&#169; copyright 2021 Quotes_Generator
            </Box>
        </Flex>
        </>
    )
}
