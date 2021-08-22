import Link from 'next/link';
import Layout from "./com/layout";
import {useState} from "react";
import {Box,Center,Textarea} from "@chakra-ui/react";
import { HexColorPicker } from 'react-colorful';
import domtoimage from "dom-to-image";
function Thought(){
  const [color,setColor]=useState("black");
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
                color="white" 
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
            <Center>
              <Box>
                <HexColorPicker  onChange={setColor}/>
              </Box>
            </Center>
            <br />
            
            <Center>
              <Box as="button" fontSize="md" color="red" w="12rem"fontWeight="bold" h="2.5rem"
                border="3px solid #8D021F"style={{borderRadius:"1rem"}} onClick={Download}>
                 Download your Quote
              </Box>
            </Center>
            
          </Layout>
        </>
    )
}
export default Thought
