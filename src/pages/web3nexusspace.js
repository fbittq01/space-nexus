import ButtonCustom from "@/components/Button";
import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Foundation = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen((preValue) => !preValue);
  return (
    <Stack
      sx={{
        backgroundImage: 'url("/background-foundation.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      p={2}
      alignItems={"center"}
    >
      <Stack width={"1200px"} height={"100%"}>
        <Stack width={1}>
          <Box
            component={"img"}
            src="logo.png"
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
              "&:active": {
                opacity: 1,
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
      <Dialog
        open={open}
        sx={{
          ".MuiDialog-paper": {
            backdropFilter: "blur(10px)",
            backgroundColor: "rgb(23,23,23)",
            borderRadius: "10px",
            minWidth: 800,
          },
        }}
        onClose={handleOpen}
        fullWidth
      >
        <Stack p={4} alignItems={"center"} spacing={4} position={"relative"}>
          <Stack position={"absolute"} top={10} right={10}>
            <IconButton onClick={handleOpen}>
              <Close
                sx={{
                  color: "rgb(175,175,175)",
                  width: 14,
                  height: 14,
                }}
              ></Close>
            </IconButton>
          </Stack>
          <Stack
            alignItems={"center"}
            position={"relative"}
            justifyContent={"center"}
          >
            <Box
              component={"img"}
              src="setting.png"
              position={"absolute"}
              height={"50%"}
            ></Box>
            <Box component={"img"} src="image-16.png" height={80}></Box>
          </Stack>
          <Typography
            color={"white"}
            fontSize={32}
            fontWeight={700}
            whiteSpace={"nowrap"}
          >
            WEBSITE MAINTENANCE ANNOUNCEMENT
          </Typography>

          <Stack spacing={2}>
            <Typography color={"rgb(175, 175, 175)"}>Dear Visitors,</Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              We are currently conducting scheduled maintenance on our website.
              During this time, most buttons, content, and features on the site
              will be disabled for updates and improvements.
            </Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              If you need assistance, please contact us at:{" "}
              <a
                onClick={() => {
                  window.location.href = `mailto:contact@web3nexusspace.foundation`;
                }}
              >
                contact@web3nexusspace.foundation.
              </a>
              We appreciate your understanding and cooperation.
            </Typography>
            <Typography color={"rgb(175, 175, 175)"}>Best regards,</Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              WNS Foundation.
            </Typography>
          </Stack>
          <ButtonCustom onClick={handleOpen}>ACKNOWLEDGE</ButtonCustom>
        </Stack>
      </Dialog>
    </Stack>
  );
};

export default Foundation;
