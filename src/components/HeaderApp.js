import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Collapse,
  Icon,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { ExpandLess, ExpandMore, KeyboardArrowDown } from "@mui/icons-material";
import useDirect from "@/customHook/directHook";

function HeaderApp() {
  const [value, setValue] = React.useState();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expand, setExpand] = React.useState("");
  const {
    handleDirectToHome,
    handleDirectToInterConect,
    handleDirectToBrandAssets,
  } = useDirect();
  const pages = [
    {
      titile: "LEARN",
      items: [
        {
          itemTitle: "What is WEB3 NEXUS SPACE?",
          destination: () => handleDirectToLearn(),
        },
        {
          itemTitle: "Blog (comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Glossary (comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "FAQ",
          destination: () => handleDirectToFAQ(),
        },
      ],
      onClick: () => handleDirectToLearn(),
    },
    {
      titile: "BUILD",
      items: [
        {
          itemTitle: "Documentation (comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Status (comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Incubator Program (comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Services and Tools",
          destination: () => handleDirectToServiceAndTool(),
        },
        {
          itemTitle: "Interconect",
          destination: () => handleDirectToInterConect(),
        },
      ],
      onClick: () => handleDirectToServiceAndTool(),
    },
    {
      titile: "NETWORK",
      items: [
        {
          itemTitle: "Our Network (Comming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Partner and Friends",
          destination: () => {
            handleDirectToPartner();
          },
        },
      ],
      onClick: () => handleDirectToPartner(),
    },
    {
      titile: "COMMUNITY",
      items: [
        {
          itemTitle: "Careers",
          destination: () => {
            window.open("https://jobs.polymer.co/web3-nexus-space", "_blank");
          },
        },
        {
          itemTitle: "Help center (coming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Community forum (coming soon)",
          destination: () => {},
        },
        {
          itemTitle: "Contact us",
          destination: () => {
            handleDirectToContactUs();
          },
        },
        {
          itemTitle: "Brand Assets",
          destination: () => {
            handleDirectToBrandAssets();
          },
        },
      ],
      onClick: () => handleDirectToContactUs(),
    },
    {
      titile: "SECURITY",
      items: [],
      onClick: () => handleDirectToServiceAndTool(),
    },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClear = () => {
    setValue(null);
  };

  const {
    handleDirectToServiceAndTool,
    handleDirectToLearn,
    handleDirectToContactUs,
    handleDirectToPartner,
    handleDirectToFAQ,
  } = useDirect();

  const navItems = ["Home", "About", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const barStyle = {
    width: "22px",
    height: "2px",
    backgroundColor: "white",
    transition: "all 0.3s ease-in-out",
  };

  const handleExpand = (index) => {
    if (index === expand) {
      setExpand("");
    } else {
      setExpand(index);
    }
  };

  return (
    <AppBar
      // position="static"
      sx={{
        bgcolor: "black !important",
        color: "rgb(178, 178, 178)",
        borderBottom: "1px solid rgb(178, 178, 178)",
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
              onClick={handleDirectToHome}
            ></Box>

            <Stack
              flex={1}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              spacing={5}
              display={{ xs: "none", md: "flex" }}
            >
              {pages.map((page, index) => (
                <Stack
                  direction={"row"}
                  spacing={0.2}
                  alignItems={"center"}
                  position={"relative"}
                  key={index}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    component={"div"}
                    onMouseEnter={() => handleChange(index)}
                    position={"relative"}
                    sx={{
                      ":before": {
                        width: "100px",
                        height: "100px",
                        backgroundColor: "pink",
                        position: "absolute",
                        top: 0,
                      },
                      cursor: "pointer",
                      ":hover": {
                        color: "white",
                      },
                    }}
                  >
                    <Typography
                      fontSize={12}
                      fontWeight={"bold"}
                      sx={{
                        ":hover": {
                          textShadow: "-1px 1px 5px #DDDDDD",
                        },
                      }}
                    >
                      {page.titile}
                    </Typography>
                    {index !== 4 && (
                      <Icon>
                        <KeyboardArrowDown></KeyboardArrowDown>
                      </Icon>
                    )}
                  </Stack>
                  {page.items.length > 0 && (
                    <Stack
                      position={"absolute"}
                      width={"250px"}
                      // height={"199px"}
                      top={"150%"}
                      left={"-50%"}
                      zIndex={10}
                      onMouseEnter={() => {
                        if (index === value) {
                          handleChange(index);
                        }
                      }}
                      onMouseLeave={() => handleClear()}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <Collapse in={index === value}>
                        <Stack
                          direction={"row"}
                          bgcolor={"rgb(23, 23, 23)"}
                          p={2}
                          spacing={1}
                        >
                          <Stack spacing={1} borderRadius={"4px"} flex={1}>
                            {page.items.map((item, index) => (
                              <Stack
                                p={1}
                                borderRadius={"4px"}
                                sx={{
                                  color: "rgb(180, 180, 180)",
                                  ":hover": {
                                    bgcolor: "rgb(42, 42, 42)",
                                    color: "white",
                                    textShadow: "-1px 1px 5px #DDDDDD",
                                  },
                                }}
                                key={index}
                                component={"div"}
                                onClick={item.destination}
                              >
                                <Typography fontSize={12}>
                                  {item.itemTitle}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                          {value === 3 && (
                            <Stack spacing={3.5} alignItems={"center"}>
                              <Box
                                component={"img"}
                                src="x.png"
                                height={20}
                                width={22.05}
                                onClick={() => {
                                  window.open(
                                    "https://x.com/Web3NexusSpace",
                                    "_blank"
                                  );
                                }}
                              ></Box>
                              <Box
                                component={"img"}
                                src="discord.png"
                                height={20}
                                width={26.48}
                                onClick={() => {
                                  window.open(
                                    "https://discord.com/invite/web3nexusspace",
                                    "_blank"
                                  );
                                }}
                              ></Box>
                              <Box
                                component={"img"}
                                src="youtube.png"
                                height={20}
                                width={30.57}
                                onClick={() => {
                                  window.open(
                                    "https://www.youtube.com/@Web3NexusSpace",
                                    "_blank"
                                  );
                                }}
                              ></Box>
                              <Box
                                component={"img"}
                                src="tele.png"
                                height={20}
                                width={24}
                                onClick={() => {
                                  window.open(
                                    "https://t.me/Web3NexusSpace",
                                    "_blank"
                                  );
                                }}
                              ></Box>
                              <Box
                                component={"img"}
                                src="tele.png"
                                height={20}
                                width={24}
                                onClick={() => {
                                  window.open("https://t.me/WNSCom", "_blank");
                                }}
                              ></Box>
                            </Stack>
                          )}
                        </Stack>
                      </Collapse>
                    </Stack>
                  )}
                </Stack>
              ))}
            </Stack>

            <Stack position={"relative"}>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: 'none'
                  },
                  flexDirection: "column",
                  justifyContent: "space-around",
                  width: "22px",
                  height: "22px",
                  cursor: "pointer",
                }}
                onClick={handleDrawerToggle}
              >
                <Box
                  sx={{
                    ...barStyle,
                    transform: mobileOpen
                      ? "rotate(45deg) translate(5px, 5px)"
                      : "none",
                  }}
                />
                <Box
                  sx={{
                    ...barStyle,
                    opacity: mobileOpen ? 0 : 1,
                  }}
                />
                <Box
                  sx={{
                    ...barStyle,
                    transform: mobileOpen
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
                  }}
                />
              </Box>
              <Stack
                position={"absolute"}
                top={"100%"}
                right={-12}
                p={2}
                width={280}
              >
                <Collapse in={mobileOpen}>
                  {pages.map((page, index) => (
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,

                        bgcolor: "rgb(23, 23, 23)",
                      }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >
                      <ListItemButton
                        onClick={() => handleExpand(index)}
                        sx={{
                          color: "rgb(180, 180, 180)",
                          ":hover": {
                            bgcolor: "rgb(42, 42, 42)",
                            color: "white",
                            textShadow: "-1px 1px 5px #DDDDDD",
                          },
                        }}
                      >
                        <ListItemText
                          primary={page.titile}
                          sx={{
                            textAlign: "end",
                          }}
                        />
                        {index !== 4 && (expand === index ? <ExpandLess /> : <ExpandMore />)}
                      </ListItemButton>
                      <Collapse
                        in={expand === index}
                        timeout="auto"
                        unmountOnExit
                      >
                        {page.items.map((item, index) => (
                          <List component="div" disablePadding>
                            <ListItemButton
                              sx={{
                                pl: 4,
                                color: "rgb(180, 180, 180)",
                                ":hover": {
                                  bgcolor: "rgb(42, 42, 42)",
                                  color: "white",
                                  textShadow: "-1px 1px 5px #DDDDDD",
                                },
                              }}
                              onClick={item.destination}
                            >
                              <ListItemText
                                primary={item.itemTitle}
                                sx={{
                                  textAlign: "end",
                                }}
                              />
                            </ListItemButton>
                          </List>
                        ))}
                      </Collapse>
                    </List>
                  ))}
                </Collapse>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderApp;
