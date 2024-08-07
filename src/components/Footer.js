import useDirect from "@/customHook/directHook";

const { Stack, Box, Typography } = require("@mui/material");

const Footer = () => {
  const { handleDirectToPolicy, handleDirectToTermsOfServices } = useDirect();
  return (
    <Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
        p={{
          xs: 2,
          md: 4,
        }}
        borderBottom={{
          xs: "1px solid white",
          md: "none",
        }}
      >
        <Stack
          direction={"row"}
          spacing={4}
          alignItems={"center"}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          <Box component={"img"} src="logo-3.png" width={28}></Box>
          <Typography
            fontSize={14}
            fontWeight={500}
            color={"rgb(175, 175, 175)"}
          >
            ©2024 WEB3 NEXUS SPACE • ALL RIGHTS RESERVED.
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{
            xs: 2,
            md: 4,
          }}
          pr={1}
        >
          <Box
            component={"img"}
            src="x.png"
            height={{
              xs: 16,
              md: 20,
            }}
            width={"fit-content"}
            onClick={() => {
              window.open("https://x.com/Web3NexusSpace", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="discord.png"
            height={{
              xs: 16,
              md: 20,
            }}
            width={"fit-content"}
            onClick={() => {
              window.open(
                "https://discord.com/invite/web3nexusspace",
                "_blank"
              );
            }}
          ></Box>
          <Box
            component={"img"}
            src="youtube.png"
            height={{
              xs: 16,
              md: 20,
            }}
            width={"fit-content"}
            onClick={() => {
              window.open("https://www.youtube.com/@Web3NexusSpace", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="tele.png"
            height={{
              xs: 16,
              md: 20,
            }}
            width={"fit-content"}
            onClick={() => {
              window.open("https://t.me/Web3NexusSpace", "_blank");
            }}
          ></Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{
            xs: 1,
            md: 4,
          }}
        >
          <Typography
            fontSize={{
              xs: 10,
              md: 14,
            }}
            fontWeight={500}
            color={"rgb(175, 175, 175)"}
            sx={{ cursor: "pointer" }}
            component={"div"}
            onClick={handleDirectToTermsOfServices}
            whiteSpace={"nowrap"}
          >
            TERMS OF SERVICES
          </Typography>
          <Typography
            fontSize={{
              xs: 10,
              md: 14,
            }}
            fontWeight={500}
            color={"rgb(175, 175, 175)"}
            sx={{ cursor: "pointer" }}
            component={"div"}
            onClick={handleDirectToPolicy}
            whiteSpace={"nowrap"}
          >
            PRIVACY POLICY
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        spacing={4}
        alignItems={"center"}
        display={{
          xs: "flex",
          md: "none",
        }}
        p={2}
        px={2.5}
      >
        <Box component={"img"} src="logo-3.png" width={20}></Box>
        <Typography fontSize={10} fontWeight={500} color={"rgb(175, 175, 175)"}>
          ©2024 WEB3 NEXUS SPACE • ALL RIGHTS RESERVED.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
