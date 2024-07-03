import EmblaCarousel from "@/components/Banner";
import HeaderApp from "@/components/HeaderApp";
import { Stack, Typography } from "@mui/material";

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
      image: "image-43.png",
    },
    {
      title: "Collaboration and Partnerships",
      description:
        "Description: Leverage our extensive Web3, network to facilitate partnerships and collaborations with global Web3 communities. We connect projects with potential partners, influencers, and other key entities to drive mutual growth.",
      image: "image-43.png",
    },
    {
      title: "Strategy & Management",
      description:
        "Description: Develop and implement effective strategies for project minting, growth, and management. Our experts guide projects from initial planning to execution and beyond.",
      image: "image-43.png",
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
        <Typography color={"white"} fontSize={14} fontWeight={500}>
          CURRENTLY, IN PHASE I, WE ARE READY TO OFFER ESSENTIAL AND IMPACTFUL
          SERVICES TO PROJECTS AT ANY STAGE, INCLUDING:
        </Typography>

        <Stack width={1} p={2}>
          <EmblaCarousel slides={services} options={OPTIONS}></EmblaCarousel>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Build;
