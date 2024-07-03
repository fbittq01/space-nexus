import EmblaCarousel from "@/components/Banner";
import ButtonCustom from "@/components/Button";
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
      <Stack
        color={"white"}
        height={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
        pt={50}
      >
        <Stack spacing={2}>
          <Typography
            textTransform={"uppercase"}
            fontSize={32}
            fontWeight={700}
            textAlign={"center"}
          >
            Interconect
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            What is your name?
          </Typography>
          <Input></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            ARE YOU REPRESENTING YOURSELF, AN INDIVIDUAL, A PROJECT, AN
            ORCANIZATION, OR SOMETHING ELSE?<br></br> PLEASE DESCRIBE BRIEFLY.
          </Typography>
          <Input></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            THE X ACCOUNT OF. THE ENTITY YOU REPRESENT?
          </Typography>
          <Input></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            CONTACT DETAILS FOR THIS ENTITY?
          </Typography>
          <Input></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            WHAT ARE YOU READY FOR? ARE YOU PREPARED TO BE PART OF OUR NETWORK?
          </Typography>
          <Input></Input>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={0.7}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={12}
              color={"rgb(190, 190, 190)"}
            >
              PLEASE CHECK HERE IF YOU AGREE TO LET US STORE AND CATEGORIZE THE
              INFORMATION YOU HAVE SUBMITTED (REQUIRED).
            </Typography>
            <Input type="checkbox" sx={{ border: "none", width: 100 }}></Input>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={0.7}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={12}
              color={"rgb(190, 190, 190)"}
            >
              PLEASE CHECK HERE IF YOU HAVE FULLY READ AND AGREE TO THE TERMS OF
              SERVICE AND PRIVACY POLICY (REQUIRED).
            </Typography>
            <Input type="checkbox" sx={{ border: "none", width: 100 }}></Input>
          </Stack>

          <Stack spacing={2} alignItems={"center"}>
            <ButtonCustom sx={{ px: 10 }}>SUBMIT</ButtonCustom>
            <Typography
              color={"rgb(190, 190, 190)"}
              width={"60%"}
              textAlign={"center"}
            >
              This information will be kept confidential, and we are committed
              to complying with legal regulations, terms of service, and privacy
              policy.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          spacing={2}
          pb={20}
        >
          <Typography color={"rgb(190, 190, 190)"}>
            If you want to speak with us directly, please contact us
          </Typography>
          <ButtonCustom sx={{ px: 8 }}>CONTACT US</ButtonCustom>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Build;
