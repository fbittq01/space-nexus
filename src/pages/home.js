import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Loading from "@/components/Loading";
import useDirect from "@/customHook/directHook";
import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((preValue) => !preValue);
  const nexusBenifit = [
    {
      image: "image-49.png",
      title: "INTERCONNECTIVITY",
      description:
        "Facilitate seamloss connections within the Webs ecosystom, enabling secure and eflicient interactions between projects, communities, and users.",
    },
    {
      image: "image-49.png",
      title: "SECURITY",
      description:
        "Employ advanced security measures, robust risk controls, and stansure the integio gies our platform.",
    },
    {
      image: "image-49.png",
      title: "INNOVATION",
      description:
        "Provido accoss to pioncoring Web3 projects and services. Join us and explore the future of decentralized technology.",
    },
    {
      image: "image-49.png",
      title: "COMMUNITY EMPOWERMENT",
      description:
        "Strengthen and grow your community with our expert setup and management sorvices, ensuring active and engaged participants.",
    },
    {
      image: "image-49.png",
      title: "COMPREHENSIVE SUPPORT",
      description:
        "From strategic planning to execution, we provide continuous support to ensure your project's success at every stage.",
    },
  ];
  const services = [
    "Community Setup and Operation",
    "Marketing & Promotion",
    "Collaboration and Partnerships",
    "Strategy & Management",
    "Talent Acquisition and Human Resources Support",
  ];
  const partners = [
    "image-24.png",
    "image-25.png",
    "image-26.png",
    "image-27.png",
    "image-28.png",
    "image-29.png",
    "image-30.png",
    "image-31.png",
    "image-32.png",
    "image-33.png",
    "image-34.png",
    "image-35.png",
    "image-36.png",
  ];
  const {
    handleDirectToServiceAndTool,
    handleDirectToInterConect,
    handleDirectToPartner,
  } = useDirect();
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        minHeight={{
          xs: "100vh",
          md: "90vh",
        }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        pt={10}
        position={"relative"}
        px={{
          xs: 2,
          md: 10,
        }}
      >
        <Stack spacing={0} zIndex={10}>
          <Typography
            fontSize={{
              xs: 20,
              md: 42,
            }}
            fontWeight={700}
          >
            SPACE FOR WEB3 NEXUS
          </Typography>
          <Typography
            fontSize={{
              xs: 10,
              md: 12,
            }}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
            maxWidth={{
              xs: "80%",
              md: "unset",
            }}
          >
            EMPOWERING WEB3 INTERCONNECTIONS, UNLEASHING INFINITE POSSIBILITIES
          </Typography>
          <ButtonCustom
            sx={{
              mt: 2,
              width: "280px",
              height: "56px",
              borderRadius: "30px",
            }}
          >
            NEXUS NOW
          </ButtonCustom>
        </Stack>
        <Box
          component={"img"}
          src="image-14.png"
          height={{
            xs: "40vh",
            md: "50vh",
          }}
          position={{
            xs: "absolute",
            md: "relative",
          }}
          top={{
            xs: "40%",
            md: "unset",
          }}
          right={{
            xs: "-20px",
            md: "unset",
          }}
        ></Box>
      </Stack>
      <Stack
        minHeight={"90vh"}
        py={4}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={10}
        sx={{
          backgroundImage: 'url("/bg-linear-2.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack spacing={4} alignItems={"center"}>
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
          >
            WHY WEB3 NEXUS SPACE?
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
            maxWidth={{
              xs: "90vw",
              md: "40vw",
            }}
            textAlign={"center"}
          >
            WE OFFER A COMPREHENSIVE SUITE OF SERVICES OPTIMIZED FOR WEB3
            PROJECTS, INCLUDING CONNECTIVITY, SECURITY, COMMUNITY SETUP, AND
            STRATEGIC INNOVATION.
          </Typography>
        </Stack>
        <Grid
          container
          gap={2}
          px={{
            xs: 4,
            md: 16,
          }}
          justifyContent={"center"}
        >
          {nexusBenifit.map((benifit, index) => (
            <Grid
              md={2.4 - 0.2}
              sm={3.6}
              xs={12}
              key={index}
              minHeight={"100%"}
            >
              <Stack
                alignItems={"center"}
                spacing={2}
                border={"2px solid rgb(23, 23, 23)"}
                borderRadius={2}
                p={2}
                sx={{
                  transition: "all 0.3s linear",
                  ":hover": {
                    bgcolor: "rgb(40, 40, 40)",
                  },
                }}
                minHeight={"100%"}
              >
                <Stack
                  position={"relative"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Box
                    component={"img"}
                    src={benifit.image}
                    width={68}
                    height={68}
                  ></Box>
                  <Stack position={"absolute"}>
                    <Typography
                      fontSize={24}
                      fontWeight={700}
                      color={"rgb(178, 178, 178)"}
                    >
                      {index + 1}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography fontSize={12} fontWeight={700} textAlign={"center"}>
                  {benifit.title}
                </Typography>
                <Typography
                  fontSize={10}
                  fontWeight={500}
                  textAlign={"center"}
                  color={"rgb(178, 178, 178)"}
                >
                  {benifit.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack
        minHeight={"90vh"}
        py={4}
        direction={{
          xs: "column",
          md: "row",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        px={{
          xs: 4,
          md: 20,
        }}
        pt={{
          xs: 20,
          md: 0,
        }}
        spacing={2}
        position={"relative"}
        sx={{
          backgroundImage: 'url("/bg-linear-3.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack spacing={2} flex={5}>
          <Typography
            fontSize={{
              xs: 20,
              md: 26,
            }}
            fontWeight={700}
          >
            SERVICES WE OFFER DURING PHASE 1
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
          >
            {`DURING PHASE 1`}
            <br></br>
            {`(AS WE COMPLETE THE DATABASE TO PROVIDE THE SPECIAL "NEXUS" SERVICE
            IN PHASE 2), WE ARE READY TO OFFER THE FOLLOWING KEY SERVICES:`}
          </Typography>
          <Stack
            direction={"row"}
            spacing={{
              xs: 0.5,
              md: 2,
            }}
            bgcolor={"rgb(23, 23, 23)"}
            p={{
              xs: 1,
              md: 2,
            }}
            borderRadius={"8px"}
            color={"rgb(178, 178, 178)"}
            divider={
              <Stack
                sx={{ bgcolor: "white", color: "white", width: "1px" }}
              ></Stack>
            }
          >
            {services.map((service, index) => (
              <Typography
                fontSize={{
                  xs: 8,
                  md: 12,
                }}
                key={index}
              >
                {service}
              </Typography>
            ))}
          </Stack>
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
            onClick={handleDirectToServiceAndTool}
          >
            DISCOVER MORE ABOUT THESE SERVICES
          </ButtonCustom>
        </Stack>
        <Stack
          flex={5}
          alignItems={"center"}
          position={"relative"}
          justifyContent={"center"}
        >
          <Box
            component={"img"}
            src="image-48.png"
            maxWidth={"400px"}
            minWidth={"250px"}
            height={{
              xs: "100%",
              md: "70%",
            }}
            width={{
              xs: "100%",
              md: "70%",
            }}
          ></Box>
          <Stack
            position={"absolute"}
            top={"80%"}
            alignContent={"center"}
            justifyContent={"center"}
            width={"120%"}
          >
            <ButtonCustom
              sx={{
                background: 'url("2.svg")',
                px: 4,
                width: {
                  xs: "100%",
                  sm: "90%",
                  md: 530,
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: {
                  xs: "flex",
                  md: "none",
                },
                margin: "auto",
                whiteSpace: "nowrap",
              }}
              endIcon={
                <Box component={"img"} src="image-18.png" width={32}></Box>
              }
              onClick={handleDirectToServiceAndTool}
            >
              DISCOVER MORE ABOUT THESE SERVICES
            </ButtonCustom>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        minHeight={"90vh"}
        py={4}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={{
          xs: 4,
          md: 20,
        }}
        spacing={2}
        sx={{
          backgroundImage: 'url("/bg-linear-4.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography
          fontSize={{
            xs: 20,
            md: 26,
          }}
          fontWeight={700}
        >
          {`LET'S BUILD A ROBUST NETWORK IN WEB3 TOGETHER`}
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={600}
          color={"rgb(178, 178, 178)"}
          textAlign={{
            xs: "start",
            md: "center",
          }}
          px={{
            xs: 0,
            md: 10,
          }}
        >
          WE ARE AMBITIOUS TO CREATE A SEAMLESS NETWORK THAT ENABLES PROJECTS TO
          EASILY AND CONVENIENTLY FIND AND INTERACT WITH USERS, INVESTORS, AND
          OTHER KEY ENTITIES, AND VICE VERSA,
        </Typography>
        <Box
          component={"img"}
          src="image-19.png"
          height={{
            xs: "40vh",
            md: "40vh",
          }}
          py={{
            xs: 5,
            md: 0,
          }}
        ></Box>
        <ButtonCustom onClick={handleDirectToInterConect}>
          BUILD WITH US
        </ButtonCustom>
      </Stack>
      <Stack
        minHeight={"90vh"}
        py={4}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={{
          xs: 4,
          md: 20,
        }}
        spacing={4}
      >
        <Typography fontSize={26} fontWeight={700}>
          TRUSTED BY MAJOR PARTNERS & FRIENDS
        </Typography>
        <Stack
          direction={"row"}
          spacing={6}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          {partners.map((partner, index) => (
            <Box key={index} component={"img"} src={partner} width={32}></Box>
          ))}
        </Stack>
        <Grid
          container
          rowGap={1}
          alignItems={"center"}
          justifyContent={"center"}
          display={{
            xs: "flex",
            md: "none",
          }}
        >
          {partners.map((partner, index) => (
            <Grid
              xs={2 - 0.1}
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
            >
              <Box key={index} component={"img"} src={partner} width={32}></Box>
            </Grid>
          ))}
        </Grid>
        <Grid container gap={4} justifyContent={"center"}>
          <Grid sm={6 - 0.4} xs={12}>
            <Stack
              spacing={2}
              border={"1px solid rgb(56,56,56)"}
              borderRadius={"8px"}
              p={2}
              minHeight={148}
            >
              <Box component={"img"} src="image-21.png" width={32}></Box>
              <Stack alignItems={"center"}>
                <Loading></Loading>
              </Stack>
            </Stack>
          </Grid>
          <Grid sm={6 - 0.4} xs={12}>
            <Stack
              spacing={2}
              border={"1px solid rgb(56,56,56)"}
              borderRadius={"8px"}
              p={2}
              minHeight={148}
            >
              <Box component={"img"} src="image-23.png" width={32}></Box>
              <Stack alignItems={"center"}>
                <Loading></Loading>
              </Stack>
            </Stack>
          </Grid>
          <Grid sm={6 - 0.4} xs={12}>
            <Stack
              spacing={2}
              border={"1px solid rgb(56,56,56)"}
              borderRadius={"8px"}
              p={2}
            >
              <Box component={"img"} src="image-37.png" width={32}></Box>
              <Typography fontSize={12} color={"rgb(212, 212, 212)"}>
                {`I think you guys are great and am genuinely impressed with your
                work. I'm also curious to know what areas you're focusing on to
                improve, as I'm sure any enhancements will only make the
                experience even better.`}
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Box
                  component={"img"}
                  src="image-22.png"
                  width={28}
                  height={28}
                ></Box>
                <Stack>
                  <Typography fontSize={10} color={"rgb(212, 212, 212)"}>
                    OpenTheFridge
                  </Typography>
                  <Typography fontSize={10} color={"rgb(212, 212, 212)"}>
                    Leadership Team at AP Collective
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid sm={6 - 0.4} xs={12}>
            <Stack
              spacing={2}
              border={"1px solid rgb(56,56,56)"}
              borderRadius={"8px"}
              p={2}
              height={"100%"}
            >
              <Box component={"img"} src="image-29.png" width={32}></Box>
              <Typography fontSize={12} color={"rgb(212, 212, 212)"}>
                Definitely one of our favorite people to collaborate with. We
                love the high-quality content you create and the outstanding
                engagement you bring. Your creativity and dedication make every
                collaboration enjoyable and rewarding. Keep up the great work!
              </Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Box
                  component={"img"}
                  src="image-39.png"
                  width={28}
                  height={28}
                ></Box>
                <Stack>
                  <Typography fontSize={10} color={"rgb(212, 212, 212)"}>
                    Carisne
                  </Typography>
                  <Typography fontSize={10} color={"rgb(212, 212, 212)"}>
                    Carisne, CMO at Inferno Labs
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <ButtonCustom
          endIcon={<Box component={"img"} src="image-18.png" width={32}></Box>}
          sx={{
            right: 10,
          }}
          onClick={handleDirectToPartner}
        >
          VIEW ALL
        </ButtonCustom>
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
            <Typography color={"rgb(175, 175, 175)"}>Dear users,</Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              We are currently conducting scheduled maintenance. During this
              period, some services may be temporarily unavailable, and certain
              buttons will be temporarily disabled for updates and maintenance.
            </Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              We appreciate your understanding and cooperation.
            </Typography>
            <Typography color={"rgb(175, 175, 175)"}>Best regards,</Typography>
            <Typography color={"rgb(175, 175, 175)"}>
              Web3 Nexus Space Team.
            </Typography>
          </Stack>
          <ButtonCustom onClick={handleOpen}>ACKNOWLEDGE</ButtonCustom>
        </Stack>
      </Dialog>
      <Footer></Footer>
    </Stack>
  );
};

export default Home;
