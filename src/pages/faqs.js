import Footer from "@/components/Footer";
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

const Learn = () => {

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
      description: `You can get involved by <a href="/contact-us" >contacting us<a /> directly to discuss what your needs are and how we can support you. Additionally, you can join our community on <a href="https://discord.com/invite/web3nexusspace" target="_blank">Discord</a> and <a href="https://t.me/Web3NexusSpace" target="_blank">Telegram</a> to stay updated and participate in our activities.      `,
    },
    {
      title: "7. WHAT MAKES WEB3 NEXUS SPACE UNIQUE?      ",
      description: `WEB3 NEXUS SPACE is unique in its comprehensive approach to interconnecting every possible entity within the Web3 ecosystem. Our focus on providing a seamless network for collaboration and innovation, along with our range of services, sets us apart from other platforms.
      `,
    },
    {
      title:
        "8. WHERE CAN I FIND MORE INFORMATION ABOUT YOUR CAREER OPPORTUNITIES?      ",
      description: `You can find information about our career opportunities by visiting our <a href="https://jobs.polymer.co/web3-nexus-space" target="_blank">Careers page</a>.`,
    },
    {
      title: "9. WHO SHOULD I CONTACT FOR FURTHER QUESTIONS?      ",
      description: ` If you have any further questions or need additional assistance, please feel free to <a href="/contact-us" >contact us<a /> . We are here to assist you with any questions or support you may need regarding our services and your goals.`,
    },
  ];
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack spacing={10} px={{
        xs: 2,
        md: 20
      }} component={"div"} position={"relative"}>
        <Stack spacing={2} py={15}>
          <Typography
            width={1}
            textAlign={"center"}
            fontWeight={700}
            fontSize={{
              xs: 20,
              md: 32
            }}
          >
            FREQUENTLY ASKED QUESTIONS (FAQs)
          </Typography>
          <Stack spacing={1}>
            {askQuestions.map((question, index) => (
              <Accordion
                sx={{
                  bgcolor: "rgb(23, 23, 23)",
                  color: "rgb(187, 187, 187)",
                }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore sx={{ color: "rgb(128, 128, 128)" }} />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    ".Mui-expanded": {
                      color: "white",
                    },
                  }}
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
      <Footer></Footer>
    </Stack>
  );
};
export default Learn;
