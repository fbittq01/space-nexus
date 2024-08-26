import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Footer from "@/components/FooterMonad";
// import {
//   DiscordIcon,
//   TelegramIcon,
//   TwitterIcon,
//   InstagramIcon,
//   GitHubIcon,
//   DocumentIcon,
//   FacebookIcon,
// } from '@mui/x-social-media/icons';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleMouseMove = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Stack>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212",
          backgroundImage: {
            xs: "url('/bg-monad-swap-2.png')",
            md: "url('/monad-bg.png')"
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          fontFamily: "Gramatika, sans-serif",
          flexDirection: "column",
        }}
        component={"div"}
        py={2}
      >
        <Container maxWidth="xl" sx={{ height: {
          xs: "100%",
          md: '86vh'
        } }}>
          <Box component={"img"} src="/monad-logo.png" height={{
            xs: 62,
            md: 102
          }}></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
              pt: {
                xs: 10,
                md: 30,
              },
            }}
          >
            <Box
              component={"img"}
              src="/monad-text.png"
              width={{
                xs: "70%",
                md: "40%",
              }}
            ></Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{
                fontSize: {
                  xs: '1.4rem',
                  md: "2rem"
                },
                // fontFamily: 'Gramatika',
                textShadow: "0 1px 8.896px #fff,0 -2px 1px #fff",
                width: '100%'
              }}
            >
              First DEX/AMM using AI on Monad
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontSize: {
                  xs: 24,
                  md: 32
                },
                color: "rgb(138, 106, 254)",
                fontFamily: "Gramatika, sans-serif",
                fontWeight: "bold",
                textShadow: "-1px 1px 5px rgb(138, 106, 254)",
              }}
              pt={{
                xs: '2rem',
                md: 'unset'
              }}
            >
              COMING SOON...
            </Typography>
            <Stack width={'100vw'} display={{
              md: 'none'
            }}><Box component={'img'} src="/bg-monad-swap-3.png"></Box></Stack>
          </Box>
        </Container>
        <Stack width={"100vw"}>
          <Footer></Footer>
        </Stack>
      </Box>
    </Stack>
  );
};

export default App;
