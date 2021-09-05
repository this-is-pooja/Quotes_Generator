import React from "react";
import Layout from "/layout";
import {useState} from "react";
import {Box,Center,Textarea,HStack,Spacer} from "@chakra-ui/react";
import { HexColorPicker } from 'react-colorful';
import domtoimage from "dom-to-image";
export default function Thought(){
  const [color,setColor]=useState("black");
  const [c,sc]=useState("white");
  const [value,setValue]=useState("")
  const change=(event)=>{
    setValue(event.target.value);
  }
  const Download=()=>{
    domtoimage.toJpeg(document.getElementById('shot'), { quality: 0.95 })
  .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'my-image.jpeg';
      link.href = dataUrl;
      link.click();
  });
  }
  const green=()=>{
    sc("green");
  }
  const red=()=>{
    sc("red");
  }
  const black=()=>{
    sc("black");
  }
  const white=()=>{
    sc("white");
  }
    return(
        <>
          <Layout>
            <div id="shot">
            <Center bg="white">
              <Box >
                <Textarea 
                bg={color}
                h="16rem"
                w="56rem"
                fonts="italic"
                style={{borderRadius:"10px"}}
                onChange={change}
                color={c} 
                fontSize="2rem"
                align="center"
                mt="2rem" 
                textAlign="center"
                value={value} 
                placeholder="keep smiling"/>
              </Box>
            </Center>
            </div>
            <br />
            <HStack>
            <Box ml="25rem">
             <HexColorPicker  onChange={setColor}/>
            </Box>
            <br />
            <Box as="button" bg="green" h="4rem"w="8rem"style={{borderRadius:"6px"}}onClick={green}></Box>
            <br />
            <Box as="button" bg="red" h="4rem"w="8rem"style={{borderRadius:"6px"}} onClick={red}></Box>
            <br /> 
            <Box as="button" bg="black" h="4rem"w="8rem"style={{borderRadius:"6px"}} onClick={black}></Box>
            
            <br /> 
            <Box as="button" bg="white" h="4rem"w="8rem"style={{borderRadius:"6px",border:"1px solid black"}} onClick={white}></Box>
            <Spacer />
            </HStack>
            <br />
            <Center>
              <Box as="button" fontSize="md" color="red" w="16rem"fontWeight="bold" h="2.5rem"
                border="3px solid #8D021F"style={{borderRadius:"1rem"}} onClick={Download}>
                 Download your Quote
              </Box>
            </Center>
            
          </Layout>
        </>
    )
}
