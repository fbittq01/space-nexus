import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Footer from "@/components/FooterMonadTradingBot";
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
            xs: "url('/bg-monad-trading-bot-2.png')",
            md: "url('/monad-bg-trading-bot.png')"
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          fontFamily: "Gramatika, sans-serif",
          flexDirection: "column",
        }}
        component={"div"}
        pt={2}
      >
        <Container maxWidth="xl" sx={{ height: "100vh" }}>
          <Box
            component={"img"}
            src="/monad-trading-bot-logo-2.png"
            height={{
              xs: 42,
              md: 62
            }}
          ></Box>
          <Stack alignItems={{
            xs: 'center',
            md: 'flex-start'
          }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                width: 'fit-content',
                pt: {
                  xs: 10,
                  md: 30,
                },
              }}
              spacing={{
                xs: 4,
                md: 2
              }}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: '2rem',
                    md: "4rem"
                  },
                  fontWeight: 600,
                  // textShadow: "0 1px 8.896px #fff,0 -2px 1px #fff",
                }}
              >
                Monad Trading Bot
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontSize: {
                    md: "2rem"
                  },
                  lineHeight: "2.4rem",
                  fontFamily: 'Gramatika',
                  display: {
                    xs: 'none',
                    md: 'flex'
                  }
                  // textShadow: "0 1px 8.896px #fff,0 -2px 1px #fff",
                }}
              >
                The First Trading Bot on Monad integrated with <br></br>
                Telegram for quick and efficient trading.
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontSize: {
                    md: "2rem"
                  },
                  lineHeight: "1.4rem",
                  fontFamily: 'Gramatika',
                  display: {
                    md: 'none'
                  },
                  textAlign: 'center'
                  // textShadow: "0 1px 8.896px #fff,0 -2px 1px #fff",
                }}
              >
                The First Trading Bot on Monad integrated with <br></br>
                Telegram for quick and efficient trading.
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: 24,
                    md: 42
                  },
                  color: "rgb(138, 106, 254)",
                  fontFamily: "Gramatika, sans-serif",
                  fontWeight: "bold",
                  // textShadow: "-1px 1px 5px rgb(138, 106, 254)",
                }}
              >
                Coming Soon...
              </Typography>
              <Stack width={'100vw'} display={{
                md: 'none'
              }}><Box component={'img'} src="/bg-monad-trading-bot-3.png"></Box></Stack>
            </Stack>
          </Stack>
        </Container>
        <Stack width={"100vw"}>
          <Footer></Footer>
        </Stack>
      </Box>
    </Stack>
  );
};

export default App;
