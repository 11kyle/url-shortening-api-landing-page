"use client"

import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

type Link = {
  longUrl: string
  shortUrl: string
}

export default function ShortenLinkSection() {
  const [link, setLink] = useState("")
  const [links, setLinks] = useState<Link[]>([
    {
      longUrl: "https://www.frontendmentor.io",
      shortUrl: "https://rel.ink/k4lKyk"
    },
    {
      longUrl: "https://twitter.com/frontendmentor",
      shortUrl: "https://rel.ink/gxOXp9"
    }
  ])

  const shortenLink = async (query: string) => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: query
        })
      })
  
      return response.json()
    } catch (error) {
      return error
    }
  }

  const handleSubmit = () => {
    const res = shortenLink(link).then(
      (data) => {
        // add to links state
        setLinks([...links, {
          longUrl: link,
          shortUrl: data.result_url as string
        }])
      }
    )
  }

  const handleCopy = () => {
    
  }

  return (
    <Flex
      direction="column"
      rowGap="16px"
      width="full"
      className="-translate-y-[108px]"
      marginBottom="-108px"
    >
      <Box
        backgroundColor="#3A3054"
        rounded="10px"
        overflow="hidden"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          rowGap="16px"
          columnGap="24px"
          alignItems="center"
          padding="24px"
          paddingX={{ md: "64px" }}
          paddingY={{ md: "52px" }}
        >
          <Input 
            placeholder="Shorten a link here..."
            color="#34313D"
            fontSize="16px"
            fontWeight="500"
            lineHeight="36px"
            letterSpacing="0.12px"
            className="placeholder:opacity-50"
          />

          <Box 
            as="button"
            backgroundColor="#2BD0D0"
            color="white"
            rounded="5px"
            fontSize="18px"
            fontWeight="700"
            width="full"
            height="48px"
            maxWidth={{ md: "188px" }}
            onClick={handleSubmit}
          >
            Shorten It!
          </Box>
        </Flex>
      </Box>
      {links.map(link => (
        <Flex
          key={link.longUrl}
          backgroundColor="white"
          height={{ base: "155px", md: "72px" }}
          rounded="5px"
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "start", md: "center"}}
          columnGap="24px"
          paddingX="24px"
          paddingY="16px"
        >
          <Text
            color="#34313D"
            fontSize="20px"
            fontWeight="500"
            lineHeight="36px"
            letterSpacing="0.15px"
          >
            {link.longUrl}
          </Text>
          <Text
            marginLeft={{ md: "auto" }}
            color="#2BD0D0"
            fontSize="20px"
            fontWeight="500"
            lineHeight="36px"
            letterSpacing="0.15px"
          >
            {link.shortUrl}
          </Text>
          <Box 
            as="button"
            backgroundColor="#2BD0D0"
            rounded="5px"
            width={{ base: "full", md: "103px" }}
            height="40px"
            color="white"
            fontSize="15px"
            fontWeight="700"
          >Copy</Box>
        </Flex>
      ))}
    </Flex>
  )
}
