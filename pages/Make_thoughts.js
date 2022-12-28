import {
  Box,
  Button,
  Center,
  HStack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

import { HexColorPicker } from "react-colorful";
import Image from "next/image";
import Layout from "/layout";
import React from "react";
import SwipeableCloseImg from "../public/swipeableClose.svg";
import SwipeableOpenImg from "../public/swipeableOpen.svg";
import domtoimage from "dom-to-image";
import { useState } from "react";

export default function Thought() {
  const [bgColor, setBgColor] = useState("black");
  const [fontColor, setFontColor] = useState("white");
  const [toggleSwipeableLeft, setToggleSwipeableLeft] = useState(false);
  const [value, setValue] = useState("");
  const change = (event) => {
    setValue(event.target.value);
  };

  const Download = () => {
    domtoimage
      .toJpeg(document.getElementById("shot"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };
  const green = () => {
    localStorage.setItem("fontColor", "green");
  };
  const red = () => {
    localStorage.setItem("fontColor", "red");
  };
  const black = () => {
    localStorage.setItem("fontColor", "black");
  };
  const white = () => {
    localStorage.setItem("fontColor", "white");
  };

  const resetHandler = () => {
    setToggleSwipeableLeft(!toggleSwipeableLeft);
    setBgColor("black");
    setFontColor("white");
  };

  const ApplyHandler = () => {
    const fColor = localStorage.getItem("fontColor");
    const bColor = localStorage.getItem("bgColor");
    setFontColor(fColor);
    setBgColor(bColor);
    setToggleSwipeableLeft(!toggleSwipeableLeft);
  };

  return (
    <>
      <Layout>
        <HStack justify="center" mb="2rem">
          <div id="shot">
            <Textarea
              bg={bgColor}
              h="24rem"
              w="56rem"
              size="md"
              fonts="italic"
              style={{ borderRadius: "10px" }}
              onChange={change}
              color={fontColor}
              fontSize="2rem"
              mt="4rem"
              textAlign="center"
              value={value}
              placeholder=""
              resize={"none"}
            />
          </div>
          <Drawer
            isOpen={toggleSwipeableLeft}
            placement="right"
            onClose={() => setToggleSwipeableLeft(!toggleSwipeableLeft)}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="red" />
              <DrawerHeader>Create your theme</DrawerHeader>
              <DrawerBody>
                <Box color="red" fontSize="md" fontWeight="bold">
                  Choose text color
                </Box>
                <Box>
                  <section className="small">
                    <HexColorPicker
                      onChange={(color) => {
                        localStorage.setItem("bgColor", color);
                      }}
                    />
                  </section>
                </Box>
                <Box color="red" fontSize="md" fontWeight="bold" mb="2rem">
                  Choose background color
                </Box>

                <VStack spacing={3}>
                  <HStack spacing={8}>
                    <Box
                      _focus={{ border: "3px solid #000" }}
                      as="button"
                      bg="green"
                      h="4.9rem"
                      w="5rem"
                      style={{ borderRadius: "38px" }}
                      onClick={green}
                    ></Box>
                    <Box
                      _focus={{ border: "3px solid #000" }}
                      as="button"
                      bg="red"
                      h="4.9rem"
                      w="5rem"
                      style={{ borderRadius: "38px" }}
                      onClick={red}
                    ></Box>
                  </HStack>
                  <HStack spacing={8}>
                    <Box
                      _focus={{ border: "3px solid #000" }}
                      as="button"
                      bg="black"
                      h="4.9rem"
                      w="5rem"
                      style={{ borderRadius: "38px" }}
                      onClick={black}
                    ></Box>
                    <Box
                      _focus={{ border: "3px solid #000" }}
                      as="button"
                      bg="white"
                      h="4.9rem"
                      w="5rem"
                      borderRadius="38px"
                      border="1px solid #000"
                      onClick={white}
                    ></Box>
                  </HStack>
                </VStack>
              </DrawerBody>
              <DrawerFooter>
                <Button
                  color="red"
                  border="2px solid #8D021F"
                  mr={3}
                  onClick={resetHandler}
                >
                  Cancel
                </Button>
                <Button bg="red" color="white" onClick={ApplyHandler}>
                  Apply
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <div
            style={{
              position: "absolute",
              left: "-10px",
              top: "45%",
              borderRadius: 4,
              height: "56px",
              width: "20.06px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setToggleSwipeableLeft(!toggleSwipeableLeft)}
          >
            {toggleSwipeableLeft ? (
              <Image src={SwipeableOpenImg} alt="open" />
            ) : (
              <Image src={SwipeableCloseImg} alt="close" />
            )}
          </div>
        </HStack>
        <Center>
          {value && (
            <Box
              as="button"
              fontSize="md"
              color="red"
              w="16rem"
              fontWeight="bold"
              h="2.5rem"
              border="3px solid #8D021F"
              style={{ borderRadius: "1rem" }}
              onClick={Download}
            >
              Download your Quote
            </Box>
          )}
        </Center>
      </Layout>
    </>
  );
}
