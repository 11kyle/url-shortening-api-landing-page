import { Box, Link, Image, Flex, Heading, Text } from "@chakra-ui/react";
import { IconFacebook } from "./icons/socials/icon-facebook";
import { IconTwitter } from "./icons/socials/icon-twitter";
import { IconPinterest } from "./icons/socials/icon-pinterest";
import { IconInstagram } from "./icons/socials/icon-instagram";
import { Logo } from "./icons/logo";
import { color } from "framer-motion";

const navigation = [
  {
    heading: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    heading: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
]

const socialNavigation = [
  {
    name: "facebook",
    icon: <IconFacebook className="fill-white hover:fill-[#2BD0D0]" />,
  },
  {
    name: "twitter",
    icon: <IconTwitter className="fill-white hover:fill-[#2BD0D0]" />,
  },
  {
    name: "pinterest",
    icon: <IconPinterest className="fill-white hover:fill-[#2BD0D0]" />,
  },
  {
    name: "instagram",
    icon: <IconInstagram className="fill-white hover:fill-[#2BD0D0]" />,
  },
]

export function Footer() {
  return (
    <Box 
      as="footer" 
      backgroundColor="#232127"
      paddingTop="54px"
      paddingBottom="56px"
    >
      <Flex 
        maxWidth="1110px" 
        paddingX="24px" 
        marginX="auto"
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={{ md: "space-between"}}
      >
        <Box marginBottom="49px">
          <Logo fill="white" />
        </Box>
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justifyContent={{ md: "space-between" }} 
          rowGap="38px"
          columnGap="70px"
          maxWidth={{ md: "461px" }}
        >
          {navigation.map(linkGroup => (
            <Box key={linkGroup.heading}>
              <Heading
                color="white"
                fontSize="16px"
                fontWeight="700"
                letterSpacing="-0.25px"
                marginBottom="22px"
                textAlign={{ base: "center", md: "left" }}
              >{linkGroup.heading}</Heading>
              <Flex as="ul" role="links" direction="column" alignItems={{ base: "center", md: "start" }} gap="10px">
                {linkGroup.links.map(link => (
                  <li key={link}>
                    <Text
                      color="#BFBFBF"
                      fontSize="15px"
                      fontWeight="500"
                      letterSpacing="-0.234px"
                      _hover={{
                        color: "#2BD0D0",
                        cursor: "pointer"
                      }}
                    >{link}</Text>
                  </li>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
        
        <Flex 
          direction="row" 
          justifyContent="space-between" 
          width="168px" 
          height="24px" 
          marginTop={{ base: "46px", md: "0px"}}
        >
          {socialNavigation.map(link => (
            <Link key={link.name}>
              {link.icon}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
