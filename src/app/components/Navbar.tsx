"use client"

import { Box, Flex, Image } from "@chakra-ui/react";
import { Logo } from "./icons/logo";

export function Navbar() {
  return (
    <Box 
      as="nav"
      backgroundColor="white"
    >
      <Flex 
        direction="row"
        justifyContent="space-between"
        paddingX="24px"
        paddingTop="40px"
        paddingBottom="30px"
        maxWidth="1110px"
        marginX="auto"
      >
        <Box>
          <Logo fill="#34313D" />
        </Box>
        <Image 
          src="./icon-hamburger.svg"
        />
        {/* <Box as="button"
          backgroundColor="#2BD0D0"
          color="white"
          rounded="28px"
          fontSize="15px"
          fontWeight="700"
          paddingTop="9px"
          paddingBottom="8px"
          paddingLeft="24px"
          paddingRight="23px"
        >
          Sign Up
        </Box> */}
      </Flex>
    </Box>
  )
}
