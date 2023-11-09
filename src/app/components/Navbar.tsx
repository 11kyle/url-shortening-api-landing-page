"use client"

import { Box, Flex, Image } from "@chakra-ui/react";

export function Navbar() {
  return (
    <Flex 
      as="nav"
      direction="row"
      justifyContent="space-between"
      paddingX="24px"
      paddingTop="40px"
    >
      <Box>
        <Image 
          alt=""
          src="./logo.svg"
        />
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
  )
}
