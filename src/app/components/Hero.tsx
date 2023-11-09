"use client"

import { Box, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box 
      backgroundColor="white" 
    >
      <Grid 
        rowGap="37px"
        paddingX="24px" 
        maxWidth="1110px" 
        marginX="auto" 
      >
        <GridItem
          position="relative"
          width="full"
          height="337px"
          overflowX="visible"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            height="337px"
            width="511px"
          >
            <Image 
              src="./illustration-working.svg"
              alt=""
              height="337px"
              width="511px"
            />
          </Box>
        </GridItem>
        <GridItem>
          <VStack>
            <Heading
              color="#34313D"
              textAlign="center"
              fontSize="42px"
              fontWeight="700"
              lineHeight="48px"
              letterSpacing="-1.05px"
              marginBottom="15px"
            >
              More than just shorter links
            </Heading>
            <Text
              color="#9E9AA8"
              textAlign="center"
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
        </GridItem>
      </Grid>
    </Box>
  )
}
