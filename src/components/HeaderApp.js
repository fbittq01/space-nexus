import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Collapse, Icon, Stack } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import useDirect from "@/customHook/directHook";

function HeaderApp() {
  const [value, setValue] = React.useState();
  const { handleDirectToHome } = useDirect();
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
      onClick: () => handleDirectToLearn(),
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
      onClick: () => handleDirectToBuild(),
    },
    {
      titile: "NETWORK",
      items: [
        {
          itemTitle: "Our Network (Comming soon)",
          destination: "#",
        },
        {
          itemTitle: "Partner and friend",
          destination: "#",
        },
      ],
      onClick: () => handleDirectToNetwork(),
    },
    {
      titile: "COMMUNITY",
      items: [
        {
          itemTitle: "Careers",
          destination: "#",
        },
        {
          itemTitle: "Help center (coming soon)",
          destination: "#",
        },
        {
          itemTitle: "Community forum (coming soon)",
          destination: "#",
        },
        {
          itemTitle: "Contact us",
          destination: "#",
        },
        {
          itemTitle: "Brand Assets",
          destination: "#",
        },
      ],
      onClick: () => handleDirectToComunity(),
    },
    {
      titile: "SECURITY",
      items: [],
      onClick: () => handleDirectToBuild(),
    },
  ];

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleClear = () => {
    setValue(null);
  };

  const { handleDirectToBuild, handleDirectToLearn, handleDirectToComunity, handleDirectToNetwork } = useDirect();

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
            px={20}
            pr={25}
          >
            <Box component={"img"} src="/logo.png" height={32} onClick={handleDirectToHome}></Box>

            <Stack
              flex={1}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              spacing={5}
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
                        color: 'white'
                      }
                    }}
                  >
                    <Typography fontSize={12} fontWeight={"bold"}>
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
                      height={"199px"}
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
                        cursor: 'pointer'
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
                                  },
                                }}
                                key={index}
                                component={"div"}
                                onClick={page.onClick}
                              >
                                <Typography fontSize={12}>
                                  {item.itemTitle}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                          {value === 3 && (
                            <Stack spacing={3}>
                              <Box
                                component={"img"}
                                src="x.png"
                                height={20}
                                width={"100%"}
                              ></Box>
                              <Box
                                component={"img"}
                                src="discord.png"
                                height={20}
                                width={"100%"}
                              ></Box>
                              <Box
                                component={"img"}
                                src="youtube.png"
                                height={20}
                                width={"100%"}
                              ></Box>
                              <Box
                                component={"img"}
                                src="tele.png"
                                height={20}
                                width={"100%"}
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderApp;
