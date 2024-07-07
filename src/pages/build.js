import EmblaCarousel from "@/components/Banner";
import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
import { Box, Stack, Typography } from "@mui/material";

const Build = () => {
  const OPTIONS = { loop: true };
  const services = [
    {
      title: "Community Setup and Operation",
      description:
        "Description: Establish and manage vibrant communities both globally and locally on various platforms.",
      image: "image-43.png",
    },
    {
      title: "Marketing & Promotion",
      description:
        "Description: Provide comprehensive marketing strategies, including campaign planning, content creation, social media management, AMA sessions, viral events, and event promotion to enhance visibility and engagement for projects.",
      image: "image-44.png",
    },
    {
      title: "Collaboration and Partnerships",
      description:
        "Description: Leverage our extensive Web3, network to facilitate partnerships and collaborations with global Web3 communities. We connect projects with potential partners, influencers, and other key entities to drive mutual growth.",
      image: "image-41.png",
    },
    {
      title: "Strategy & Management",
      description:
        "Description: Develop and implement effective strategies for project minting, growth, and management. Our experts guide projects from initial planning to execution and beyond.",
      image: "image-42.png",
    },
    {
      title: "Talent Acquisition and Human Resources Support",
      description:
        `Description: Assist projects in finding and
        recruiting the right talent to build their teams
        We connect you with skilled professionals,
        including developers, marketers, community
        managers, and other key roles necessary for
        your project&s success,`,
      image: "image-60.png",
    },
  ];

  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        color={"white"}
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
        pt={10}
      >
        <Typography
          color={"white"}
          fontSize={32}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          Services and tools
        </Typography>
        <Typography color={"white"} fontSize={30} fontWeight={700}>
          Services
        </Typography>
        <Typography
          color={"rgb(182, 182, 182)"}
          fontSize={14}
          fontWeight={600}
          maxWidth={"40%"}
          textAlign={"center"}
        >
          CURRENTLY, IN PHASE I, WE ARE READY TO OFFER ESSENTIAL AND IMPACTFUL
          SERVICES TO PROJECTS AT ANY STAGE, INCLUDING:
        </Typography>
        <Stack width={1} p={2}>
          <EmblaCarousel slides={services} options={OPTIONS}></EmblaCarousel>
        </Stack>
      </Stack>
      <Stack
        color={"white"}
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
      >
        <Typography
          color={"white"}
          fontSize={32}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          Services and tools
        </Typography>
        <Typography color={"white"} fontSize={30} fontWeight={700}>
          Tools
        </Typography>
        <Typography
          color={"rgb(182, 182, 182)"}
          fontSize={14}
          fontWeight={600}
          maxWidth={"60%"}
          textAlign={"center"}
        >
          {`AS WE TRANSITION INTO PHASE II, WE WILL CONTINUE PROVIDING THESE
          SERVICES AND INTRODUCE ADVANCED TOOLS TO SUPPORT THEM. THESE TOOLS
          WILL ENHANCE THE EFFECTIVENESS AND EFFICIENCY OF OUR SERVICES,
          ENSURING COMPREHENSIVE SUPPORT FOR YOUR PROJECT'S GROWTH AND SUCCESS.
          STAY TUNED FOR THESE UPCOMING FEATURES...`}
        </Typography>
        <Stack
          width={1}
          p={2}
          alignItems={"center"}
          direction={"row"}
          justifyContent={"center"}
          spacing={2}
        >
          <Box component={"img"} src="image-15.png" width={200}></Box>
          <Stack>
            <Box
              component={"img"}
              src="image-46.png"
              height={"100%"}
              width={250}
            ></Box>
          </Stack>
          <Box component={"img"} src="image-45.png" width={200}></Box>
          <Stack>
            <Box
              component={"img"}
              src="image-47.png"
              height={"100%"}
              width={250}
            ></Box>
          </Stack>
          <Box component={"img"} src="image-15.png" width={200}></Box>
        </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Build;
