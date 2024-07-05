const { Stack, Box, Typography } = require("@mui/material");

const Footer = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-around"}
      p={4}
    >
      <Stack direction={"row"} spacing={4} alignItems={"center"}>
        <Box component={"img"} src="logo-3.png" width={28}></Box>
        <Typography fontSize={14} fontWeight={500} color={"rgb(175, 175, 175)"}>
          ©2024 WEB3 NEXUS SPACE • ALL RIGHTS RESERVED.
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <Box component={"img"} height={20} src="x.png"></Box>
        <Box component={"img"} height={20} src="discord.png"></Box>
        <Box component={"img"} height={20} src="tele.png"></Box>
        <Box component={"img"} height={20} src="youtube.png"></Box>
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <Typography fontSize={14} fontWeight={500} color={"rgb(175, 175, 175)"}>
          TERMS OF SERVICES
        </Typography>
        <Typography fontSize={14} fontWeight={500} color={"rgb(175, 175, 175)"}>
          PRIVACY POLICY
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
