import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Collapse, Icon, Stack } from "@mui/material";
import { ColorLens, KeyboardArrowDown } from "@mui/icons-material";

function HeaderApp() {
  const [value, setValue] = React.useState();
  const pages = [
    {
      titile: "LEARN",
      items: [
        {
          itemTitle: "What is WEB3 NEXUS SPACE?",
          destination: "#",
        },
        {
          itemTitle: "Blog (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Glossary (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "FAQ",
          destination: "#",
        },
      ],
    },
    {
      titile: "BUILD",
      items: [
        {
          itemTitle: "Documentation (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Status (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Incubator Program (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Services and Tools",
          destination: "#",
        },
        {
          itemTitle: "Interconect",
          destination: "#",
        },
      ],
    },
    {
      titile: "NETWORK",
      items: [
        {
          itemTitle: "What is WEB3 NEXUS SPACE?",
          destination: "#",
        },
        {
          itemTitle: "Blog (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Glossary (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "FAQ",
          destination: "#",
        },
      ],
    },
    {
      titile: "COMMUNITY",
      items: [
        {
          itemTitle: "What is WEB3 NEXUS SPACE?",
          destination: "#",
        },
        {
          itemTitle: "Blog (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Glossary (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "FAQ",
          destination: "#",
        },
      ],
    },
    {
      titile: "SECURITY",
      items: [
        {
          itemTitle: "What is WEB3 NEXUS SPACE?",
          destination: "#",
        },
        {
          itemTitle: "Blog (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Glossary (comming soon)",
          destination: "#",
        },
        {
          itemTitle: "FAQ",
          destination: "#",
        },
      ],
    },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClear = () => {
    setValue(null);
  };

  return (
    <AppBar
      // position="static"
      sx={{
        bgcolor: "black !important",
        color: "rgb(178, 178, 178)",
        borderBottom: "1px solid rgb(178, 178, 178)",
      }}
      component={'nav'}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            direction={"row"}
            width={1}
            alignItems={"center"}
            justifyContent={"space-around"}
            px={10}
          >
            <Box component={"img"} src="/logo.png" height={32}></Box>

            <Stack
              flex={1}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={5}
            >
              {pages.map((page, index) => (
                <Stack
                  direction={"row"}
                  spacing={0.2}
                  alignItems={"center"}
                  component={"div"}
                  onMouseLeave={() => handleClear()}
                  onMouseEnter={() => handleChange(index)}
                  position={"relative"}
                  key={index}
                >
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography fontSize={12} fontWeight={"bold"}>
                      {page.titile}
                    </Typography>
                    <Icon>
                      <KeyboardArrowDown></KeyboardArrowDown>
                    </Icon>
                  </Stack>
                  <Stack
                    position={"absolute"}
                    width={"250px"}
                    height={"199px"}
                    top={"150%"}
                    left={"-50%"}
                    zIndex={10}
                  >
                    <Collapse in={index === value}>
                      <Stack
                        spacing={1}
                        p={2}
                        borderRadius={"4px"}
                        bgcolor={"rgb(23, 23, 23)"}
                      >
                        {page.items.map((item, index) => (
                          <Stack
                            p={1}
                            borderRadius={"4px"}
                            sx={{
                              color: "rgb(180, 180, 180)",
                              ":hover": {
                                bgcolor: "rgb(42, 42, 42)",
                                color: "white",
                              },
                            }}
                            key={index}
                          >
                            <Typography fontSize={12}>
                              {item.itemTitle}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Collapse>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderApp;
