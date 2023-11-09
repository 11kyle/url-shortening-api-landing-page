"use client"

import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react"
import { VerticalLine } from "./VerticalLine"
import { HorizontalLine } from "./HorizontalLine"

const cards = [
  {
    icon: "./icon-brand-recognition.svg",
    title: "Brand Recognition",
    body: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: "./icon-detailed-records.svg",
    title: "Detailed Records",
    body: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: "./icon-fully-customizable.svg",
    title: "Fully Customizable",
    body: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
]

export function AdvancedStatisticsSection() {
  return (
    <VStack 
      marginTop="92px"
      position="relative"
    >
      <VerticalLine />
      <VStack gap="16px" textAlign="center" marginBottom="92px" maxWidth="540px">
        <Heading
          color="#34313D"
          fontSize="28px"
          fontWeight="700"
          lineHeight="48px"
          letterSpacing="-0.7px"
        >
          Advanced Statistics
        </Heading>
        <Text
          color="#9E9AA8"
          fontSize="16px"
          fontWeight="500"
          lineHeight="28px"
          letterSpacing="0.109px"
        >
          Track how your links are performing across the web with our advanced statistics dashboard.
        </Text>
      </VStack>
      <Flex direction={{ base: "column", md: "row" }} rowGap="92px" columnGap={{ md: "30px"}} position="relative">
        <HorizontalLine />
      {cards.map(card => (
        <Card 
          position="relative"
          paddingX="32px"
          paddingTop="77px"
          paddingBottom="32px"
          rounded="5px"
          shadow="none"
          backgroundColor="white"
          textAlign={{ base: "center", md: "left" }}
          maxWidth="350px"
        >
          <Box
            position="absolute"
            top="0"
            left="50%"
            backgroundColor="#3A3054"
            width="88px"
            height="88px"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="visible"
            className="-translate-x-1/2 -translate-y-1/2"
          >
            <Image 
              src={card.icon}
            />
          </Box>
          <CardHeader padding="0px">
            <Heading 
              color="#34313D"
              fontSize="22px"
              fontWeight="700"
              marginBottom="12px"
            >
              {card.title}
            </Heading>
          </CardHeader>
          <CardBody padding="0px">
            <Text
              color="#9E9AA8"
              fontSize="15px"
              fontWeight="500"
              lineHeight="26px"
            >
              {card.body}
            </Text>
          </CardBody>
        </Card>
      ))}
      </Flex>
    </VStack>
  )
}
