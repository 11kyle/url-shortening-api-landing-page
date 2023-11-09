import { Box } from "@chakra-ui/react";

export function VerticalLine() {
  return (
    <Box
      display={{ md: "none"}}
      width="8px"
      height="600px"
      backgroundColor="#2BD0D0"
      position="absolute"
      left="50%"
      bottom="92px"
      className="-translate-x-1/2"
    >
    </Box>
  )
}
