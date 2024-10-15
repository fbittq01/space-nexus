import ButtonCustom from "@/components/Button";
import {
  AppBar,
  Box,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

const Wnsic = () => {
  return (
    <Stack
      alignItems={"center"}
      spacing={{
        xs: 2,
        md: 4,
      }}
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        backgroundColor: "rgb(255,255,255)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(30,30,30,1) 100%)",
      }}
    >
      <AppBar
        // position="static"
        sx={{
          bgcolor: "black !important",
          color: "rgb(178, 178, 178)",
          // borderBottom: "1px solid rgb(178, 178, 178)",
        }}
        component={"nav"}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              direction={"row"}
              width={1400}
              alignItems={"center"}
              justifyContent={"space-between"}
              px={{
                md: "15vw",
                sm: 0,
              }}
              pr={{
                md: "20vw",
                sm: 0,
              }}
              spacing={2}
            >
              <Box
                component={"img"}
                src="/logo.png"
                height={32}
                // onClick={handleDirectToHome}
              ></Box>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Stack
        spacing={2}
        alignItems={"center"}
        justifyContent={{
          xs: 'flex-start',
          md: "center"
        }}
        maxWidth={{
          xs: "100%",
          md: "50%",
        }}
        height={"100vh"}
        pl={{
          xs: 0,
          md: 8,
        }}
        zIndex={1}
        pt={{
          xs: 30,
          md: 10,
        }}
      >
        <Typography
          fontSize={{
            xs: 20,
            md: 32,
          }}
          fontWeight={700}
          textAlign={"center"}
          color={"rgb(201, 201, 201)"}
        >
          WNS INFLUENTIAL CIRCLE
        </Typography>
        <Typography
          fontWeight={500}
          fontSize={{
            xs: 12,
            md: 14,
          }}
          textAlign={"center"}
          color={"rgb(201, 201, 201)"}
        >
          PLEASE REACH OUT TO OUR BUSINESS DEVELOPMENT (BD) TEAM VIA TELEGRAM TO
          RECEIVE THE ACCESS LINK TO THE WNS INFLUENTIAL CIRCLE:
        </Typography>
        <ButtonCustom
          sx={{
            width: {
              xs: "100%",
              md: "800px",
            },
            height: "52px",
            p: 0,
            ml: 5,
            backgroundPosition: "center",
            // backgroundImage: 'url("2.svg")',
            fontSize: {
              xs: 12,
              md: 14,
            },
          }}
          onClick={() => window.open("https://t.me/reginawns", "_blank")}
        >
          T.ME/REGINAWNS
        </ButtonCustom>
      </Stack>
      <Stack
        position={"absolute"}
        display={{
          xs: "none",
          md: "flex",
        }}
        right={0}
        alignItems={"flex-end"}
      >
        <Box component={"img"} src="/mkt-15-1.png" width={"50%"}></Box>
      </Stack>
      <Stack
        position={"absolute"}
        display={{
          md: "none",
        }}
        bottom={0}
        alignItems={'flex-end'}
      >
        <Box
          component={"img"}
          src="/mkt-15-1.png"
          width={"90%"}
          display={{
            md: "none",
          }}
        ></Box>
      </Stack>
    </Stack>
  );
};

export default Wnsic;
