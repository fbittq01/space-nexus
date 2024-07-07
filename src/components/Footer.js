import useDirect from "@/customHook/directHook";

const { Stack, Box, Typography } = require("@mui/material");

const Footer = () => {
  const { handleDirectToPolicy, handleDirectToTermsOfServices } = useDirect();
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
        <Box
          component={"img"}
          src="x.png"
          height={20}
          width={"fit-content"}
          onClick={() => {
            window.open("https://x.com/Web3NexusSpace", "_blank");
          }}
        ></Box>
        <Box
          component={"img"}
          src="discord.png"
          height={20}
          width={"fit-content"}
          onClick={() => {
            window.open("https://discord.com/invite/web3nexusspace", "_blank");
          }}
        ></Box>
        <Box
          component={"img"}
          src="youtube.png"
          height={20}
          width={"fit-content"}
          onClick={() => {
            window.open("https://discord.com/invite/web3nexusspace", "_blank");
          }}
        ></Box>
        <Box
          component={"img"}
          src="tele.png"
          height={20}
          width={"fit-content"}
          onClick={() => {
            window.open("https://t.me/Web3NexusSpace", "_blank");
          }}
        ></Box>
        <Box
          component={"img"}
          src="tele.png"
          height={20}
          width={"fit-content"}
          onClick={() => {
            window.open("https://t.me/WNSCom", "_blank");
          }}
        ></Box>
      </Stack>
      <Stack direction={"row"} spacing={4}>
        <Typography
          fontSize={14}
          fontWeight={500}
          color={"rgb(175, 175, 175)"}
          sx={{ cursor: "pointer" }}
          component={"div"}
          onClick={handleDirectToTermsOfServices}
        >
          TERMS OF SERVICES
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={500}
          color={"rgb(175, 175, 175)"}
          sx={{ cursor: "pointer" }}
          component={"div"}
          onClick={handleDirectToPolicy}
        >
          PRIVACY POLICY
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
