"use client"

import { Box, Grid, GridItem, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box 
      backgroundColor="white" 
      paddingBottom="168px"
    >
      <SimpleGrid 
        columns={{ base: 1, md: 2 }}
        rowGap="37px"
        paddingX="24px" 
        maxWidth="1110px" 
        marginX="auto" 
        alignItems="center"
        columnGap="100px"
      >
        <Box
          order={{ md: 2 }}
          position="relative"
          width="full"
          height={{ base: "337px", md: "482px" }}
          overflowX="visible"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            height={{ base: "337px", md: "482px" }}
            width={{ base: "511px", md: "733px" }}
          >
            <Image 
              src="./illustration-working.svg"
              alt=""
              height={{ base: "337px", md: "482px" }}
              width={{ base: "511px", md: "733px" }}
            />
          </Box>
        </Box>
        <Box order={{ md: 1 }}>
          <VStack
            textAlign={{ base: "center", md: "left"}}
            align={{ base: "center", md: "start" }}
            maxWidth="564px"
            marginX="auto"
          >
            <Heading
              color="#34313D"
              fontSize="42px"
              fontWeight="700"
              lineHeight="48px"
              letterSpacing="-1.05px"
              marginBottom="15px"
            >
              More than just <br />shorter links
            </Heading>
            <Text
              color="#9E9AA8"
              fontSize="18px"
              fontWeight="500"
              lineHeight="30px"
              letterSpacing="0.123px"
              marginBottom="32px"
            >
              Build your brand’s recognition and get detailed insights on how your links are performing.
            </Text>
            <Box as="button"
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
          </VStack>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
