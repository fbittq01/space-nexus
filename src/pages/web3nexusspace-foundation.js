import ButtonCustom from "@/components/Button";
import { Box, Stack, Typography } from "@mui/material";

const Foundation = () => {
  return (
    <Stack
      sx={{
        backgroundImage: 'url("/background-foundation.png")',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        height: "100vh",
      }}
      p={2}
      alignItems={"center"}
    >
      <Stack width={"1200px"} height={"100%"}>
        <Stack width={1}>
          <Box
            component={"img"}
            src="logo-foundation.png"
            height={"42px"}
            width={"fit-content"}
          ></Box>
        </Stack>
        <Stack flex={1} justifyContent={"center"} maxWidth={"55%"} spacing={4}>
          <Typography fontSize={32} fontWeight={600}>
            THE WNS FOUNDATION
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={14}
            color={"rgb(178, 178, 178)"}
          >
            THE WNS FOUNDATION (WEB3 NEXUS SPACE FOUNDATION) IS A NON-PROFIT
            ORGANIZATION, FOCUSED ON THE DECENTRALIZATION, INNOVATION, AND
            INTERCONNECTIVITY WITHIN THE WEB3 NEXUS SPACE ECOSYSTEM IN
            PARTICULAR, AND THE BROADER WEBS SPACE IN GENERAL.
          </Typography>
          <ButtonCustom
            sx={{
              background: 'url("2.svg")',
              width: {
                xs: "80%",
                md: 530,
              },
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            endIcon={
              <Box component={"img"} src="image-18.png" width={32}></Box>
            }
            onClick={() => {
              window.location.href = `https://web3nexus.space/`
            }}
          >
            LEARN MORE ABOUT WEB3 NEXUS SPACE
          </ButtonCustom>
        </Stack>
        <Stack width={1}>
          <Typography color={"rgb(178, 178, 178)"} fontSize={12}>
            © 2024 WNS FOUNDATION • ALL RIGHTS RESERVED.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Foundation;
