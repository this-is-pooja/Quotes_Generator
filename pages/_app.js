import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "/theme.js";
import "../styles/small.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

