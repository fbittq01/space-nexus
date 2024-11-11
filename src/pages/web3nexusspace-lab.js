import ButtonCustom from "@/components/Button";
import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton, Stack, Typography } from "@mui/material";

const Foundation = () => {
  return (
    <Stack
      sx={{
        backgroundImage: {
          xs: 'url("/background-lab-1.png")',
          md: 'url("/background-lab.png")',
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      p={2}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        width={{
          xs: "100%",
        }}
        px={{
          md: 10
        }}
        height={"100%"}
      >
        <Stack width={"fit-content"}>
          <Box
            component={"img"}
            src="logo-lab.png"
            height={{
              xs: "42px",
              md: "52px",
            }}
            // width={"fit-content"}
          ></Box>
        </Stack>
        <Stack
          flex={1}
          justifyContent={{
            xs: "flex-start",
            md: "center",
          }}
          maxWidth={{
            xs: "100%",
            md: "70%",
          }}
          spacing={4}
          alignItems={{
            xs: "center",
            md: "flex-start",
          }}
          pt={{
            xs: 7,
            md: 0,
          }}
        >
          <Typography
            fontSize={{
              xs: 32,
              md: 64,
            }}
            fontWeight={600}
          >
            THE WNS LABS
          </Typography>
          <Typography
            display={{
              xs: "none",
              md: "flex",
            }}
            fontWeight={600}
            fontSize={18}
            color={"rgb(178, 178, 178)"}
            textAlign={{
              xs: "center",
              md: "start",
            }}
          >
            WNS LABS BUILDS AND DEVELOPS INNOVATIVE SOLUTIONS BY SERVING AS THE
            RESEARCH AND DEVELOPMENT ARM OF WEB3 NEXUS SPACE. THE GOAL OF WNS
            LABS IS TO CONTRIBUTE TO THE GROWTH AND EXPANSION OF THE WEB3 NEXUS
            SPACE ECOSYSTEM, ENSURING THAT PROJECTS WITHIN THIS ECOSYSTEM ARE AT
            THE FOREFRONT OF ADOPTING NEW TECHNOLOGIES AND DEVELOPING
            CUTTING-EDGE SOLUTIONS.
          </Typography>
          <Typography
            display={{
              xs: "flex",
              md: "none",
            }}
            fontWeight={600}
            fontSize={14}
            color={"rgb(178, 178, 178)"}
            textAlign={{
              xs: "center",
              md: "start",
            }}
          >
            WNS LABS BUILDS AND DEVELOPS INNOVATIVE SOLUTIONS BY SERVING AS THE
            RESEARCH AND DEVELOPMENT ARM OF WEB3 NEXUS SPACE.
          </Typography>
          <Typography
            display={{
              xs: "flex",
              md: "none",
            }}
            fontWeight={600}
            fontSize={14}
            color={"rgb(178, 178, 178)"}
            textAlign={{
              xs: "center",
              md: "start",
            }}
          >
            THE GOAL OF WNS LABS IS TO CONTRIBUTE TO THE GROWTH AND EXPANSION OF
            THE WEB3 NEXUS SPACE ECOSYSTEM, ENSURING THAT PROJECTS WITHIN THIS
            ECOSYSTEM ARE AT THE FOREFRONT OF ADOPTING NEW TECHNOLOGIES AND
            DEVELOPING CUTTING-EDGE SOLUTIONS.
          </Typography>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
            width={1}
          >
            <ButtonCustom
              sx={{
                background: 'url("2.svg")',
                width: {
                  xs: "100%",
                  md: 530,
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: {
                  md: "flex",
                },
                fontSize: {
                  xs: 10,
                  md: 14,
                },
                left: {
                  md: "-20px",
                },
              }}
              endIcon={
                <Box component={"img"} src="image-18.png" width={32}></Box>
              }
              onClick={() => {
                window.open("https://web3nexus.space/", "_blank");
              }}
            >
              LEARN MORE ABOUT WEB3 NEXUS SPACE
            </ButtonCustom>
            <ButtonCustom
              sx={{
                background: 'url("2.svg")',
                width: {
                  xs: "100%",
                  md: 530,
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: {
                  md: "flex",
                },
                fontSize: {
                  xs: 10,
                  md: 14,
                },
                textTransform: "uppercase",
              }}
              endIcon={
                <Box component={"img"} src="image-18.png" width={32}></Box>
              }
              onClick={() => {
                window.open("https://jobs.polymer.co/wns-labs", "_blank");
              }}
            >
              View open roles
            </ButtonCustom>
          </Stack>
        </Stack>
        <Stack width={1}>
          <Typography
            color={"rgb(178, 178, 178)"}
            fontSize={{
              xs: 12,
              md: 16,
            }}
          >
            © 2024 WNS LABS • ALL RIGHTS RESERVED
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Foundation;
