"use client"

import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { Logo } from "./icons/logo";

export function Navbar() {
  return (
    <Box 
      as="nav"
      backgroundColor="white"
    >
      <Flex 
        direction="row"
        alignItems="center"
        justifyContent={{ base: "space-between", md: "start" }}
        paddingX="24px"
        paddingTop="40px"
        paddingBottom="30px"
        maxWidth="1110px"
        marginX="auto"
      >
        <Box>
          <Logo fill="#34313D" />
        </Box>
        <ul 
          className="hidden md:flex items-center gap-x-8 ml-10"
        >
          <li className="text-[#9E9AA8] text-[15px] font-bold">Features</li>
          <li className="text-[#9E9AA8] text-[15px] font-bold">Pricing</li>
          <li className="text-[#9E9AA8] text-[15px] font-bold">Resources</li>
        </ul>
        <Image 
          src="./icon-hamburger.svg"
          className="md:hidden"
        />
        <HStack
          className="hidden md:flex ml-auto"
        >
          <Box as="button"
            backgroundColor="none"
            color="#9E9AA8"
            rounded="28px"
            fontSize="15px"
            fontWeight="700"
            paddingTop="9px"
            paddingBottom="8px"
            paddingLeft="24px"
            paddingRight="23px"
          >
            Login
          </Box>
          <Box as="button"
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
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}
