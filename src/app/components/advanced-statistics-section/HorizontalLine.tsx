import { Box } from "@chakra-ui/react";

export function HorizontalLine() {
  return (
    <Box
      display={{ base: "none", md: "block"}}
      width="600px"
      height="8px"
      backgroundColor="#2BD0D0"
      position="absolute"
      left="50%"
      className="-translate-x-1/2 top-1/2 -translate-y-1/2"
    >
    </Box>
  )
}
