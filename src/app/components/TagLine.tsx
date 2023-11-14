import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export function TagLine() {
  return (
    <Box 
      backgroundColor="#3A3054"
      height={{ base: "300px", md: "250px" }}
      position="relative"
      className="grid place-content-center"
    >
      <Box
          position="absolute"
          className="z-0 inset-0"
        >
          <Image 
            width="full"
            height="full"
            src="/bg-boost-desktop.svg"
          />
        </Box>
      <Flex 
        direction="column" 
        alignItems="center"
        rowGap={{ base: "16px", md: "32px" }}
        maxWidth="1110px"
        marginX="auto"
      >
        <Heading
          color="white"
          fontSize={{ base: "28px", md: "40px" }}
          fontWeight="700"
          lineHeight="48px"
          letterSpacing={{ base: "-0.7px", md: "-1px" }}
          zIndex="10"
        >Boost your links today</Heading>
        <Box 
          as="button"
          backgroundColor="#2BD0D0"
          color="white"
          rounded="28px"
          fontSize="20px"
          fontWeight="700"
          paddingX="40px"
          height="56px"
          zIndex="10"
        >
          Getting Started
        </Box>
      </Flex>
    </Box>
  )
}
