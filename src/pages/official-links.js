import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import { Box, Stack, Typography } from "@mui/material";

const OfficialLinks = () => {
  const linkItems = [
    {
      icon: "logo-3.png",
      link: "https://web3nexus.space/",
    },
    {
      icon: "x.png",
      link: "https://x.com/Web3NexusSpace",
    },
    {
      icon: "discord.png",
      link: "https://discord.com/invite/web3nexusspace",
    },
    {
      icon: "youtube.png",
      link: "https://www.youtube.com/@Web3NexusSpace",
    },
    {
      icon: "tele.png",
      link: "https://t.me/Web3NexusSpace",
    },
    {
      icon: "tele.png",
      link: "https://t.me/WNSCom",
    },
  ];

  return (
    <Stack alignItems={"center"} spacing={2}>
      <HeaderApp></HeaderApp>
      <Stack
        spacing={{
          xs: 2,
          md: 20,
        }}
        p={4}
        pt={{
          xs: 2,
          md: 20
        }}
        direction={{
          xs: 'column',
          md: "row"
        }}
        // alignItems={"center"}
        justifyContent={"center"}
        minHeight={"90vh"}
      >
        <Stack spacing={2} pt={10}>
          <Typography
            fontSize={{
              xs: 20,
              md: 64,
            }}
            fontWeight={700}
          >
            OFFICIAL LINKS
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            component={"div"}
            onClick={() => {
              window.open("https://x.com/Web3NexusSpace", "_blank");
            }}
          >
            <Box component={"img"} src="x.png" height={20} width={22.05}></Box>
            <Typography
              color={"#999"}
              fontSize={{
                xs: 12,
                md: 18
              }}
              sx={{
                textDecoration: "underline",
                cursor: 'pointer'
              }}
            >
              https://web3nexus.space/
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            component={"div"}
            onClick={() => {
              window.open(
                "https://discord.com/invite/web3nexusspace",
                "_blank"
              );
            }}
          >
            <Box
              component={"img"}
              src="discord.png"
              height={20}
              width={26.48}
            ></Box>
            <Typography
              color={"#999"}
              fontSize={{
                xs: 12,
                md: 18
              }}
              sx={{
                textDecoration: "underline",
                cursor: 'pointer'
              }}
            >
              https://discord.com/invite/web3nexusspace
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            component={"div"}
            onClick={() => {
              window.open("https://www.youtube.com/@Web3NexusSpace", "_blank");
            }}
          >
            <Box
              component={"img"}
              src="youtube.png"
              height={20}
              width={30.57}
            ></Box>
            <Typography
              color={"#999"}
              fontSize={{
                xs: 12,
                md: 18
              }}
              sx={{
                textDecoration: "underline",
                cursor: 'pointer'
              }}
            >
              https://www.youtube.com/@Web3NexusSpace
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            component={"div"}
            onClick={() => {
              window.open("https://t.me/Web3NexusSpace", "_blank");
            }}
          >
            <Box component={"img"} src="tele.png" height={20} width={24}></Box>
            <Typography
              color={"#999"}
              fontSize={{
                xs: 12,
                md: 18
              }}
              sx={{
                textDecoration: "underline",
                cursor: 'pointer'
              }}
            >
              https://t.me/Web3NexusSpace
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            component={"div"}
            onClick={() => {
              window.open("https://t.me/WNSCom", "_blank");
            }}
          >
            <Box component={"img"} src="tele.png" height={20} width={24}></Box>
            <Typography
              color={"#999"}
              fontSize={{
                xs: 12,
                md: 18
              }}
              sx={{
                textDecoration: "underline",
                cursor: 'pointer'
              }}
            >
              https://t.me/WNSCom
            </Typography>
          </Stack>
        </Stack>
        <Stack width={{
          xs: '100%',
          md: "40%"
        }} alignItems={"center"} justifyContent={"center"}>
          <Box component={"img"} src="official-links.png" width={{
            xs: '100%',
            md: "100%"
          }}></Box>
        </Stack>
      </Stack>

      <Stack width={"100vw"}>
        <Footer></Footer>
      </Stack>
    </Stack>
  );
};

export default OfficialLinks;
