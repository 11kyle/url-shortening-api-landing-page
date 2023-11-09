import { Box, HStack, Link, Image, VStack, Flex, Heading, Text } from "@chakra-ui/react";

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
    icon: "./icon-facebook.svg",
  },
  {
    name: "twitter",
    icon: "./icon-twitter.svg",
  },
  {
    name: "pinterest",
    icon: "./icon-pinterest.svg",
  },
  {
    name: "instagram",
    icon: "./icon-instagram.svg",
  },
]

export function Footer() {
  return (
    <Box 
      as="footer" 
      backgroundColor="#232127"
    >
      <Box 
        maxWidth="1110px" 
        paddingX="24px" 
        marginX="auto"
      >
        <Box>
          <Image 
            src="./logo.svg"
          />
        </Box>
        <Flex 
          direction={{ base: "column", md: "row" }} 
          justifyContent={{ md: "space-between" }} 
          rowGap="38px"
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
                    >{link}</Text>
                  </li>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
        
        <Flex direction="row" justifyContent="space-between" width="168px" height="24px">
          {socialNavigation.map(link => (
            <Link key={link.name}>
              <Image src={link.icon} alt={link.name} />
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
