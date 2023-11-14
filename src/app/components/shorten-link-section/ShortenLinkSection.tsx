"use client"

import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
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

  const handleSubmit = async () => {
    const res = await shortenLink(link)

    console.log(res)
    if (res.error) {
      return
    }

    setLinks([...links, {
      longUrl: link,
      shortUrl: res.result_url as string
    }])

    setLink("") // clear input
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
        position="relative"
      >
        <Box
          position="absolute"
          className="z-0 inset-0"
        >
          <Image 
            width="full"
            height="full"
            src="/bg-shorten-desktop.svg"
          />
        </Box>
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
            className="placeholder:opacity-50 z-10"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Box 
            as="button"
            backgroundColor="#2BD0D0"
            color="white"
            _hover={{ backgroundColor: "#9AE3E3" }}
            _disabled={{ backgroundColor: "#9AE3E3" }}
            rounded="5px"
            fontSize="18px"
            fontWeight="700"
            width="full"
            height="48px"
            maxWidth={{ md: "188px" }}
            className="z-10"
            onClick={handleSubmit}
            disabled={link.length < 1}
          >
            Shorten It!
          </Box>
        </Flex>
      </Box>
      {links.map((link, i) => (
        <Flex
          key={i}
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
