import useDirect from "@/customHook/directHook";

const { Stack, Box, Typography } = require("@mui/material");

const Footer = () => {
  const { handleDirectToPolicy, handleDirectToTermsOfServices } = useDirect();
  return (
    <Stack>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        alignItems={"center"}
        justifyContent={"space-around"}
        p={{
          xs: 2,
          md: 4,
        }}
        spacing={2}
      >
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
          display={{
            md: "flex",
          }}
        >
          <Typography
            fontSize={{
              xs: 10,
              md: 18,
            }}
            whiteSpace={"nowrap"}
            fontWeight={400}
          >
            ©2024
          </Typography>
          <Box
            component={"img"}
            src="/monad-trading-bot-logo-2.png"
            width={106}
            height={{
              xs: 32,
              md: "unset",
            }}
          ></Box>
          <Typography
            fontSize={{
              xs: 10,
              md: 18,
            }}
            whiteSpace={"nowrap"}
            fontWeight={400}
          >
            • Powered by
          </Typography>

          <Box
            component={"img"}
            src="/logo.png"
            height={{
              xs: 24,
              md: 32,
            }}
          ></Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{
            xs: 2,
            md: 4,
          }}
          pr={1}
          justifyContent={"center"}
        >
          <Box
            component={"img"}
            src="monad-trading-bot-logo.png"
            height={{
              xs: 16,
              md: 20 * 1.4,
            }}
            width={{
              xs: 19.2,
              md: 24 * 1.2,
            }}
            onClick={() => {
              window.open("https://T.me/MonadTrading_Bot", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="telegram-white-icon.png"
            height={{
              xs: 16,
              md: 20 * 1.2,
            }}
            width={{
              xs: 19.2,
              md: 24 * 1.2,
            }}
            onClick={() => {
              window.open("https://t.me/MonadTradingBot_Portal", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="telegram-white-icon.png"
            height={{
              xs: 16,
              md: 20 * 1.2,
            }}
            width={{
              xs: 19.2,
              md: 24 * 1.2,
            }}
            onClick={() => {
              window.open("https://t.me/MonadTradingBot_Channel", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="x-white-icon.png"
            height={{
              xs: 16,
              md: 20 * 1.2,
            }}
            width={{
              xs: 17.64,
              md: 20.05 * 1.2,
            }}
            onClick={() => {
              window.open("https://x.com/MonadTradingBot", "_blank");
            }}
          ></Box>
          <Box
            component={"img"}
            src="gitbook-white-icon.png"
            height={{
              xs: 16,
              md: 20 * 1.2,
            }}
            width={{
              xs: 17.64,
              md: 20.05 * 1.2,
            }}
            onClick={() => {
              window.open("https://docs.monadtrading.bot/", "_blank");
            }}
          ></Box>
        </Stack>
        <Stack
          direction={"row"}
          spacing={{
            xs: 4,
            md: 4,
          }}
          alignItems={"center"}
          justifyContent={"center"}
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
              window.open(
                "https://docs.monadtrading.bot/legal-and-compliance/terms-of-service",
                "_blank"
              );
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
              window.open(
                "https://docs.monadtrading.bot/legal-and-compliance/privacy-policy",
                "_blank"
              );
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
