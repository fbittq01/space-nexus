import useDirect from "@/customHook/directHook";

const { Stack, Box, Typography } = require("@mui/material");

const Footer = () => {
  const { handleDirectToPolicy, handleDirectToTermsOfServices } = useDirect();
  return (
    <Stack>
      <Stack
        direction={{
          xs: 'column',
          md: "row"
        }}
        alignItems={"center"}
        justifyContent={"space-around"}
        p={{
          xs: 2,
          md: 4,
        }}
        spacing={{
          xs: 2,
          md: 0
        }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={{
              xs: 10,
              md: 18,
            }}
            fontWeight={400}
          >
            ©2024
          </Typography>
          <Box component={"img"} src="/monad-logo.png" width={{
            xs: 'unset',
            md: 86
          }} height={{
            xs: 42,
            md: 'unset'
          }}></Box>
          <Typography
            fontSize={{
              xs: 10,
              md: 18,
            }}
            fontWeight={400}
          >
            • Powered by
          </Typography>

          <Box component={"img"} src="/logo.png" height={{
            xs: 24,
            md: 32
          }}></Box>
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
            src="x-social-media.png"
            height={{
              xs: 16,
              md: 20*1.15,
            }}
            width={{
              xs: 17.64,
              md: 20.05*1.15,
            }}
            onClick={() => {
              window.open("https://x.com/MonadswapAI", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="discord-logo.png"
            height={{
              xs: 16,
              md: 20*1.5,
            }}
            width={{
              xs: 21.18,
              md: 26.48*1.5,
            }}
            onClick={() => {
              window.open(
                "https://discord.gg/monadswapai",
                "_blank"
              );
            }}
          ></Box>
          <Box
            component={"img"}
            src="telegram-icon.png"
            height={{
              xs: 16,
              md: 20*1.2,
            }}
            width={{
              xs: 19.2,
              md: 24*1.2,
            }}
            onClick={() => {
              window.open("https://t.me/MonadswapAI", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="gitbook.png"
            height={{
              xs: 16,
              md: 20*1.3,
            }}
            width={{
              xs: 19.2,
              md: 24*1.3,
            }}
            onClick={() => {
              window.open("https://docs.monadswap.ai/", "_blank");
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
            onClick={() => {
              window.open("https://docs.monadswap.ai/legal-and-compliance/terms-of-service", "_blank");
            }}
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
            onClick={() => {
              window.open("https://docs.monadswap.ai/legal-and-compliance/privacy-policy", "_blank");
            }}
            whiteSpace={"nowrap"}
          >
            PRIVACY POLICY
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
