import { Box, Flex, Heading } from "@chakra-ui/react";

export function TagLine() {
  return (
    <Box 
      backgroundColor="#3A3054"
      height={{ base: "300px", md: "250px" }}
      className="grid place-content-center"
    >
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
        >
          Getting Started
        </Box>
      </Flex>
    </Box>
  )
}
