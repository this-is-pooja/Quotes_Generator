import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "/theme.js";
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

