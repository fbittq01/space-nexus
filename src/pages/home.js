import ButtonCustom from "@/components/Button";
import HeaderApp from "@/components/HeaderApp";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Home = () => {
  const nexusBenifit = [
    {
      image: "image-16.png",
      title: "INTERCONNECTIVITY",
      description:
        "Facilitate seamloss connections within the Webs ecosystom, enabling secure and eflicient interactions between projects, communities, and users.",
    },
    {
      image: "image-16.png",
      title: "SECURITY",
      description:
        "Employ advanced security measures, robust risk controls, and stansure the integio gies our platform.",
    },
    {
      image: "image-16.png",
      title: "INNOVATION",
      description:
        "Provido accoss to pioncoring Web3 projects and services. Join us and explore the future of decentralized technology.",
    },
    {
      image: "image-16.png",
      title: "COMMUNITY EMPOWERMENT",
      description:
        "Strengthen and grow your community with our expert setup and management sorvices, ensuring active and engaged participants.",
    },
    {
      image: "image-16.png",
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
  ];
  const partners = [
    "image-21.png",
    "image-22.png",
    "image-23.png",
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
  ];
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        height={"90vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack spacing={0}>
          <Typography fontSize={32} fontWeight={700}>
            SPACE FOR WEB3 NEXUS
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
          >
            EMPOWERING WEB3 INTERCONNECTIONS, UNLEASHING INFINITE POSSIBILITIES
          </Typography>
          <ButtonCustom
            sx={{
              bgcolor: "transparent",
              mt: 2,
              width: "fit-content",
              borderRadius: "30px",
              px: "32px",
            }}
          >
            NEXUS NOW
          </ButtonCustom>
        </Stack>
        <Box
          component={"img"}
          src="image-14.png"
          height={"50vh"}
          sx={{ ":hover": {
            scale: 2
          } }}
        ></Box>
      </Stack>
      <Stack
        height={"90vh"}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={10}
      >
        <Stack spacing={4} alignItems={"center"}>
          <Typography fontSize={32} fontWeight={700}>
            WHY WEB3 NEXUS SPACE?
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
            maxWidth={"40vw"}
          >
            WE OFFER A COMPREHENSIVE SUITE OF SERVICES OPTIMIZED FOR WEB3
            PROJECTS, INCLUDING CONNECTIVITY, SECURITY, COMMUNITY SETUP, AND
            STRATEGIC INNOVATION.
          </Typography>
        </Stack>
        <Grid container gap={2} px={16}>
          {nexusBenifit.map((benifit, index) => (
            <Grid xs={2.4 - 0.2} key={index}>
              <Stack
                alignItems={"center"}
                spacing={2}
                border={"2px solid rgb(23, 23, 23)"}
                borderRadius={2}
                p={2}
                sx={{
                  transition: "all 0.3s linear",
                  ":hover": {
                    bgcolor: "rgb(23, 23, 23)",
                  },
                }}
                height={'100%'}
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
                <Typography fontSize={12} fontWeight={700}>
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
        height={"90vh"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={20}
        spacing={2}
      >
        <Stack spacing={2} flex={5}>
          <Typography fontSize={26} fontWeight={700}>
            SERVICES WE OFFER DURING PHASE 1
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={600}
            color={"rgb(178, 178, 178)"}
          >
            {`DURING PHASE 1
            <br />
            (AS WE COMPLETE THE DATABASE TO PROVIDE THE SPECIAL "NEXUS" SERVICE
            IN PHASE 2), WE ARE READY TO OFFER THE FOLLOWING KEY SERVICES:`}
          </Typography>
          <Stack
            direction={"row"}
            spacing={2}
            bgcolor={"rgb(23, 23, 23)"}
            p={2}
            borderRadius={"8px"}
            color={"rgb(178, 178, 178)"}
          >
            {services.map((service, index) => (
              <Typography fontSize={12} key={index}>{service}</Typography>
            ))}
          </Stack>
          <ButtonCustom
            sx={{
              width: "fit-content",
              borderRadius: "30px",
            }}
            endIcon={
              <Box component={"img"} src="image-18.png" width={32}></Box>
            }
          >
            DISCOVER MORE ABOUT THESE SERVICES
          </ButtonCustom>
        </Stack>
        <Stack flex={5} alignItems={"center"}>
          <Box
            component={"img"}
            src="image-17.png"
            height={"50%"}
            width={"50%"}
          ></Box>
        </Stack>
      </Stack>
      <Stack
        height={"90vh"}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={20}
        spacing={2}
      >
        <Typography fontSize={26} fontWeight={700}>
          TRUSTED BY MAJOR PARTNERS & FRIENDS
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={600}
          color={"rgb(178, 178, 178)"}
          textAlign={"center"}
          px={10}
        >
          WE ARE AMBITIOUS TO CREATE A SEAMLESS NETWORK THAT ENABLES PROJECTS TO
          EASILY AND CONVENIENTLY FIND AND INTERACT WITH USERS, INVESTORS, AND
          OTHER KEY ENTITIES, AND VICE VERSA,
        </Typography>
        <Box component={"img"} src="image-19.png" height={"40vh"}></Box>
        <ButtonCustom
          sx={{
            bgcolor: "transparent",
            mt: 2,
            width: "fit-content",
            borderRadius: "30px",
            px: "32px",
          }}
        >
          BUILD WITH US
        </ButtonCustom>
      </Stack>
      <Stack
        height={"90vh"}
        // direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        px={20}
        spacing={4}
      >
        <Typography fontSize={26} fontWeight={700}>
          {`LET'S BUILD A ROBUST NETWORK IN WEB3 TOGETHER`}
        </Typography>
        <Stack direction={"row"} spacing={6}>
          {partners.map((partner, index) => (
            <Box key={index} component={"img"} src={partner} width={32}></Box>
          ))}
        </Stack>
        <Grid container gap={4}>
          <Grid sm={6 - 0.4} xs={12}>
            <Stack
              spacing={2}
              border={"1px solid rgb(56,56,56)"}
              borderRadius={"8px"}
              p={2}
            >
              <Box component={"img"} src="image-21.png" width={32}></Box>
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
            >
              <Box component={"img"} src="image-21.png" width={32}></Box>
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
            >
              <Box component={"img"} src="image-21.png" width={32}></Box>
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
            >
              <Box component={"img"} src="image-29.png" width={32}></Box>
              <Typography fontSize={12} color={"rgb(212, 212, 212)"}>
                Definitely one of our favorite people to collaborate with. We
                love the high-quality Coatcaton make ony colaboration onfoat and
                tovar ding kcop up ine groat work
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
        </Grid>
        <ButtonCustom
          sx={{
            bgcolor: "transparent",
            mt: 2,
            width: "fit-content",
            borderRadius: "30px",
            px: "32px",
          }}
          endIcon={<Box component={"img"} src="image-18.png" width={32}></Box>}
        >
          VIEW ALL
        </ButtonCustom>
      </Stack>
    </Stack>
  );
};

export default Home;
