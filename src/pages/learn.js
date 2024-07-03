import ButtonCustom from "@/components/Button";
import HeaderApp from "@/components/HeaderApp";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const Learn = () => {
  const aboutUs = [
    "Community Setup and Operation",
    "Marketing & Promotion",
    "Collaboration and Partnerships",
    "Strategy & Management",
  ];

  const askQuestions = [
    {
      title: "1. WHAT IS WEB3 NEXUS SPACE?",
      description: `WEB3 NEXUS SPACE is a pioneering Web3 project with the ambition to connect projects with every possible entity within the Web3 ecosystem. We redefine decentralized connectivity by creating a seamless network that fosters collaboration and innovation. Our mission is to help these projects build and achieve everything they aspire to within the realm of Web3. At WEB3 NEXUS SPACE, we don't just connect entities; we create a space where limitless possibilities unfold, enabling projects to engage with users, investors, and other key entities, and vice versa.`,
    },
    {
      title: '2. WHAT IS THE "NEXUS" FEATURE AND WHEN WILL IT BE AVAILABLE?',
      description: `This is our key feature in Phase II. It is a special feature we are currently building and will reveal as soon as we are ready.
      `,
    },
    {
      title: "3. WHAT SERVICES DOES WEB3 NEXUS SPACE OFFER?",
      description: `In Phase I, we offer the following services:
      \n- Community Setup and Operation: Establish and manage vibrant communities globally and locally (Vietnam & Turkey) on various platforms.
      \n- Marketing & Promotion: Provide comprehensive marketing strategies, including campaign planning, content creation, social media management, AMA sessions, viral events, and event promotion.
      \n- Collaboration and Partnerships: Facilitate partnerships and collaborations with global Web3 communities.
      \n- Strategy & Management: Develop and implement effective strategies for project minting, growth, and management.
      \n- Talent Acquisition and Human Resources Support: Assist projects in finding and recruiting the right talent to build their teams.
   `,
    },
    {
      title: "4. HOW DOES WEB3 NEXUS SPACE SUPPORT DECENTRALIZATION?",
      description: `We function as a fully decentralized, community-governed project dedicated to expanding the Web3 ecosystem through thorough project exploration and research. Our services are designed to foster decentralized connections and interactions among projects, users, and other key entities.
      `,
    },
    {
      title: "5. WHO CAN BENEFIT FROM WEB3 NEXUS SPACE?",
      description: `- Projects: Everything needed for your project.
      \n- Users: Discovering promising projects and more.
      \n- Investors: Finding investment opportunities.
      \n- Other key entities: Engaging with various stakeholders in the Web3 ecosystem.
   `,
    },
    {
      title: "6. HOW CAN I GET INVOLVED WITH WEB3 NEXUS SPACE?",
      description: `You can get involved by contacting us directly to discuss what your needs are and how we can support you. Additionally, you can join our community on Discord and Telegram to stay updated and participate in our activities.      `,
    },
    {
      title: "7. WHAT MAKES WEB3 NEXUS SPACE UNIQUE?      ",
      description: `WEB3 NEXUS SPACE is unique in its comprehensive approach to interconnecting every possible entity within the Web3 ecosystem. Our focus on providing a seamless network for collaboration and innovation, along with our range of services, sets us apart from other platforms.
      `,
    },
    {
      title:
        "8. WHERE CAN I FIND MORE INFORMATION ABOUT YOUR CAREER OPPORTUNITIES?      ",
      description: `You can find information about our career opportunities by visiting our Careers page.
      `,
    },
    {
      title: "9. WHO SHOULD I CONTACT FOR FURTHER QUESTIONS?      ",
      description: ` If you have any further questions or need additional assistance, please feel free to contact us. We are here to assist you with any questions or support you may need regarding our services and your goals.`,
    },
  ];
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack spacing={10} px={20} component={"div"} position={"relative"}>
        <Stack height={"90vh"} direction={"row"}>
          <Stack
            spacing={10}
            flex={1}
            py={30}
            height={"90vh"}
            overflow={"scroll"}
            sx={{
              scrollbarWidth: "none",
            }}
          >
            <Stack spacing={2} height={"fit-content"}>
              <Typography fontSize={32} fontWeight={799}>
                WHAT IS WEB3 NEXUS SPACE?
              </Typography>
              <Typography fontSize={12} fontWeight={400}>
                {
                  "WEB3 NEXUS SPACE is a pioneering Web3 project with the ambition to connect projects with every possible entity within the Web3 ecosystem.Our mission is to help these projects build and achieve-everything they aspire to within the realm of Web3.We redefine decentralized connectivity by creating a seamless network that fosters collaboration and innovation. At WEB3 NEXUS SPACE, we don't just connect entities; we create a space where limitless possibilities unfold, enabling projects to engage with users,investors, and other key entities, and vice versa."
                }
              </Typography>
            </Stack>
            <Stack spacing={2} height={"fit-content"}>
              <Typography fontSize={32} fontWeight={799}>
                More About Us for Now
              </Typography>
              <Typography fontSize={12} fontWeight={400}>
                {`Currently, in Phase I, we are gathering Web3 databases, striving to create a vast network with other entities in Web3 to fully prepare for the"Nexus" feature of our project (to be unveiled in Phase Il). We are focusing on Layer Blockchain, GameFi and Memetoken projects are also attracting significant interest. Nevertheless, even at this early stage, we function as a fully decentralized, community-governed project dedicated to expanding the ecosystem through thorough project exploration and research. Therefore, we are ready to offer fundamental but outstanding and useful services to projects, whether they are in their early stages or have grown significantly, such as:`}
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                bgcolor={"rgb(23, 23, 23)"}
                p={1}
                px={2}
                borderRadius={"8px"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {aboutUs.map((item) => (
                  <Typography fontSize={12}>{item}</Typography>
                ))}
              </Stack>
              <Typography fontSize={12}>
                These services are designed to support projects at any stage of
                their development. ensuring they have the tools. and resources
                needed to succeed in the Web3 space.
              </Typography>
              <ButtonCustom
                endIcon={
                  <Box component={"img"} src="image-18.png" width={32}></Box>
                }
              >
                DISCOVER MORE ABOUT THESE SERVICES
              </ButtonCustom>
            </Stack>
          </Stack>
          <Stack flex={1} alignItems={"center"} position={"relative"} pt={30}>
            <Box
              component={"img"}
              src="image-15.png"
              sx={{ position: "absolute" }}
              width={300}
              height={300}
            ></Box>
            <Box component={"img"} src="image-17.png" width={350}></Box>
          </Stack>
        </Stack>
        <Stack spacing={2} py={15}>
          <Typography
            width={1}
            textAlign={"center"}
            fontWeight={700}
            fontSize={32}
          >
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </Typography>
          <Stack>
            {askQuestions.map((question) => (
              <Accordion
                sx={{
                  bgcolor: "rgb(23, 23, 23)",
                  color: "rgb(187, 187, 187)",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: "rgb(128, 128, 128)" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography fontSize={14}>{question.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    color={"white"}
                    fontSize={12}
                    dangerouslySetInnerHTML={{
                      __html: question.description.replace(/\n/g, "<br />"),
                    }}
                  ></Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Learn;
