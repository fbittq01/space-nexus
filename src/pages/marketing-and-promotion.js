import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import useDirect from "@/customHook/directHook";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { fontSize } from "@mui/system";

const MaketingAndPromotionServices = () => {
  const { handleDirectToPartner } = useDirect();
  return (
    <Stack
      component={"div"}
      position={"relative"}
      spacing={2}
      sx={{
        scrollBehavior: "smooth",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <HeaderApp></HeaderApp>
      <Stack
        spacing={{
          xs: 5,
          // md: 10,
        }}
        pt={{
          xs: 10,
          md: 20,
        }}
        minHeight={"100vh"}
        height={"100vh"}
        px={{
          xs: 2,
          md: 20,
        }}
        alignItems={"center"}
        component={"div"}
        position={"relative"}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
          >
            MARKETING & PROMOTION SERVICES <br></br>
            FOR WEB3 NEXUS SPACE
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
          >
            AT WEB3 NEXUS SPACE, WE OFFER COMPREHENSIVE MARKETING AND PROMOTION
            SERVICES DESIGNED TO ELEVATE YOUR PROJECT'S VISIBILITY AND
            ENGAGEMENT. OUR SERVICES LEVERAGE THE EXTENSIVE NETWORK AND
            EXPERTISE OF WNS INFLUENTIAL CIRCLE, WHICH INCLUDES INFLUEN- TIAL
            KOLS AND VIBRANT COMMUNITIES WITHIN THE WEB3 ECOSYSTEM.
          </Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={4}
          minHeight={"100vh"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
          >
            CAMPAIGN PLANNING
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
          >
            WE METICULOUSLY DESIGN DETAILED MARKETING CAMPAIGNS TO ACHIEVE YOUR
            PROJECT'S PROMOTIONAL GOALS. BY TAPPING INTO THE VAST REACH OF WNS
            INFLUENTIAL CIRCLE, WE CREATE HIGH-IMPACT PROMOTIONAL STRATEGIES
            THAT RESONATE WITH YOUR TARGET AUDIENCE
          </Typography>
          <Box
            component={"img"}
            src="/mkt-2.png"
            width={{
              xs: "100%",
              md: "60%",
            }}
          ></Box>
        </Stack>
        <Stack alignItems={"center"} spacing={4} position={"relative"}>
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
          >
            CONTENT CREATION
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
          >
            OUR TEAM PRODUCES HIGH-QUALITY ARTICLES AND VIDEOS TO INTRODUCE AND
            PROMOTE YOUR PROJECT. COLLABORATING WITH KOLS AND COMMUNITIES IN WNS
            INFLUENTIAL CIRCLE, WE ENSURE THAT THE CONTENT IS ENGAGING, DIVERSE,
            AND TAILORED TO CAPTURE THE INTEREST OF YOUR AUDIENCE.
          </Typography>
          <Box
            display={{
              xs: "none",
              md: "flex",
            }}
            component={"img"}
            src="/mkt-3.png"
            width={"90%"}
          ></Box>
          <Stack
            position={"absolute"}
            top={"85%"}
            direction={"row"}
            width={"85%"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <Stack flex={2} alignItems={"center"}>
              <ButtonCustom
                sx={{
                  width: "160px",
                  height: "42px",
                  p: 0,
                  ml: 5,
                  backgroundPosition: "center",
                }}
                onClick={() =>
                  window.open(
                    "https://x.com/JocarterTheG/status/1817907559887507966",
                    "_blank"
                  )
                }
              >
                VIEW EXAMPLE
              </ButtonCustom>
            </Stack>
            <Stack flex={3} alignItems={"center"}>
              <ButtonCustom
                sx={{
                  width: "160px",
                  height: "42px",
                  p: 0,
                  backgroundPosition: "center",
                }}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@Web3NexusSpace",
                    "_blank"
                  )
                }
              >
                VIEW EXAMPLE
              </ButtonCustom>
            </Stack>
          </Stack>

          <Box
            component={"img"}
            src="/mkt-3-1.png"
            width={"100%"}
            onClick={() =>
              window.open(
                "https://x.com/JocarterTheG/status/1817907559887507966",
                "_blank"
              )
            }
            display={{
              md: "none",
            }}
          ></Box>

          <Box
            component={"img"}
            src="/mkt-3-2.png"
            width={"100%"}
            onClick={() =>
              window.open("https://www.youtube.com/@Web3NexusSpace", "_blank")
            }
            display={{
              md: "none",
            }}
          ></Box>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={4}
          direction={{
            xs: "column",
            md: "row",
          }}
          minHeight={"100vh"}
          justifyContent={"center"}
        >
          <Stack spacing={4}>
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={{
                xs: "center",
                md: "start",
              }}
            >
              SOCIAL MEDIA MANAGEMENT
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              WE MANAGE YOUR SOCIAL MEDIA ACCOUNTS, REGULARLY POSTING CONTENT
              AND INTERACTING WITH THE COMMUNITY.
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              LEVERAGING THE INFLUENCE OF WNS INFLUENTIAL CIRCLE, WE AMPLIFY
              YOUR PROJECT'S PRESENCE ACROSS VARIOUS PLATFORMS, ENSURING
              CONSISTENT AND IMPACTFUL ENGAGEMENT.
            </Typography>
          </Stack>
          <Box
            component={"img"}
            src="/mkt-4.png"
            width={{
              xs: "90%",
              md: "40%",
            }}
          ></Box>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={4}
          direction={{
            xs: "column",
            md: "row",
          }}
          minHeight={"100vh"}
          justifyContent={"center"}
        >
          <Stack spacing={4}>
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={{
                xs: "center",
                md: "start",
              }}
            >
              AMA SESSIONS
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              WE ORGANIZE ASK ME ANYTHING (AMA) SESSIONS, ALLOWING PROJECT
              FOUNDERS AND TEAMS TO DIRECTLY INTERACT WITH THE COMMUNITY.
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              THESE SESSIONS, SUPPORTED BY WNS INFLUENTIAL CIRCLE, ENHANCE
              UNDERSTANDING AND TRUST IN YOUR PROJECT.
            </Typography>
          </Stack>
          <Box
            display={{
              xs: "none",
              md: "unset",
            }}
            component={"img"}
            src="/mkt-5.png"
            width={"60%"}
          ></Box>
          <Box
            display={{
              xs: "unset",
              md: "none",
            }}
            component={"img"}
            src="/mkt-5-1.png"
            width={"100%"}
          ></Box>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={4}
          minHeight={"100vh"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
          >
            VIRAL/PROMOTION/JOINT/IRL EVENTS
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
          >
            WE CREATE VIRAL EVENTS, PROMOTIONAL CAMPAIGNS, JOINT EVENTS, AND IRL
            EVENTS TO BOOST USER INTEREST AND ENGAGEMENT. USING OUR NETWORK
            WITHIN WNS INFLUENTIAL CIRCLE, WE ENSURE THESE EVENTS HAVE
            WIDESPREAD REACH AND IMPACT.
          </Typography>
          <Box
            component={"img"}
            src="/mkt-6.png"
            width={{
              xs: "100%",
              md: "50%",
            }}
          ></Box>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={4}
          direction={{
            xs: "column",
            md: "row",
          }}
          minHeight={"100vh"}
          justifyContent={"center"}
        >
          <Stack spacing={4}>
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={{
                xs: "center",
                md: "start",
              }}
            >
              EVENT PROMOTION
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              WE PROMOTE YOUR PROJECT'S SPECIAL EVENTS TO ATTRACT COMMUNITY
              ATTENTION AND PARTICIPATION.
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={{
                xs: "center",
                md: "start",
              }}
              color={"rgb(201, 201, 201)"}
            >
              BY LEVERAGING WNS INFLUENTIAL CIRCLE, WE MAXIMIZE THE VISIBILITY
              AND ATTENDANCE OF THESE EVENTS, ENSURING THEY ARE WELL-ATTENDED
              AND SUCCESSFUL.
            </Typography>
          </Stack>
          <Box
            component={"img"}
            src="/mkt-7.png"
            width={{
              xs: "100%",
              md: "50%",
            }}
          ></Box>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={{
            xs: 4,
            md: 10,
          }}
        >
          <Stack
            position={"sticky"}
            spacing={4}
            top={0}
            component={"div"}
            bgcolor={"black"}
            width={1}
            py={2}
            zIndex={100}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              pt={{
                md: 10,
              }}
              fontWeight={700}
              textAlign={"center"}
            >
              ADDITIONAL SERVICES
            </Typography>
          </Stack>
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
            display={{
              xs: "unset",
              md: "none",
            }}
          >
            Collaboration/Partnership with <br></br>
            WEB3 NEXUS SPACE
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
            display={{
              xs: "unset",
              md: "none",
            }}
          >
            Partner with WEB3 NEXUS SPACE to boost your project's visibility
            through our network, leveraging co-branded initiatives and joint
            promotions within the Web3 space.
          </Typography>
          <Box
            component={"img"}
            src="/mkt-8-1.png"
            width={{
              xs: "100%",
              md: "40%",
            }}
            display={{
              xs: "unset",
              md: "none",
            }}
          ></Box>
          <Stack
            alignItems={"center"}
            spacing={4}
            direction={"row"}
            bgcolor={"rgb(23, 23, 23)"}
            border={"2px solid rgb(47, 47, 47)"}
            borderRadius={"8px"}
            width={"80%"}
            justifyContent={"flex-end"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <Stack spacing={4} p={"5%"}>
              <Typography
                fontSize={{
                  xs: 20,
                  md: 32,
                }}
                fontWeight={700}
                textAlign={"center"}
              >
                Collaboration/Partnership <br></br>
                with WEB3 NEXUS SPACE
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={{
                  xs: 12,
                  md: 14,
                }}
                textAlign={"center"}
                color={"rgb(201, 201, 201)"}
              >
                PARTNER WITH WEB3 NEXUS SPACE TO BOOST YOUR PROJECT'S VISIBILITY
                THROUGH OUR NETWORK, LEVERAGING CO- BRANDED INITIATIVES AND
                JOINT PROMOTIONS WITHIN THE WEB3 SPACE.
              </Typography>
            </Stack>
            <Box component={"img"} src="/mkt-8.png" width={"40%"}></Box>
          </Stack>

          <Stack
            spacing={4}
            p={"5%"}
            alignItems={"center"}
            display={{
              xs: "unset",
              md: "none",
            }}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={"center"}
            >
              Comprehensive Research
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
            >
              PUBLICLY SHARE DETAILED RESEARCH ABOUT YOUR PROJECT, PROVIDING
              DEEP INSIGHTS THAT HELP OTHERS UNDERSTAND YOUR PROJECT BETTER AND
              ENHANCE YOUR CONNECTIONS.
            </Typography>
          </Stack>
          <Box
            component={"img"}
            src="/mkt-9-1.png"
            width={{
              xs: "100%",
              md: 0,
            }}
          ></Box>

          <ButtonCustom
            onClick={() =>
              window.open(
                "https://x.com/JocarterTheG/status/1812893212195103177",
                "_blank"
              )
            }
            sx={{
              display: {
                md: "none",
              },
            }}
          >
            VIEW EXAMPLE
          </ButtonCustom>
          <Stack
            alignItems={"center"}
            spacing={4}
            direction={"row"}
            bgcolor={"rgb(23, 23, 23)"}
            border={"2px solid rgb(47, 47, 47)"}
            borderRadius={"8px"}
            width={"80%"}
            justifyContent={"flex-end"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <Stack spacing={4} p={"5%"} alignItems={"center"}>
              <Typography
                fontSize={{
                  xs: 20,
                  md: 32,
                }}
                fontWeight={700}
                textAlign={"center"}
              >
                Comprehensive Research
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={{
                  xs: 12,
                  md: 14,
                }}
                textAlign={"center"}
                color={"rgb(201, 201, 201)"}
              >
                PUBLICLY SHARE DETAILED RESEARCH ABOUT YOUR PROJECT, PROVIDING
                DEEP INSIGHTS THAT HELP OTHERS UNDERSTAND YOUR PROJECT BETTER
                AND ENHANCE YOUR CONNECTIONS.
              </Typography>
              <ButtonCustom
                onClick={() =>
                  window.open(
                    "https://x.com/JocarterTheG/status/1812893212195103177",
                    "_blank"
                  )
                }
              >
                VIEW EXAMPLE
              </ButtonCustom>
            </Stack>
            <Box component={"img"} src="/mkt-9.png" width={"40%"}></Box>
          </Stack>

          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
            display={{
              xs: "unset",
              md: "none",
            }}
          >
            Brief insight
          </Typography>
          <Typography
            fontWeight={600}
            fontSize={{
              xs: 12,
              md: 14,
            }}
            textAlign={"center"}
            color={"rgb(201, 201, 201)"}
            display={{
              xs: "unset",
              md: "none",
            }}
          >
            Create a concise yet thorough quick-view research report on your
            project, offering focused and in*depth analysis.
          </Typography>
          <Box
            component={"img"}
            src="/mkt-10-1.png"
            width={{
              xs: "100%",
              md: 0,
            }}
          ></Box>

          <ButtonCustom
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
            }}
            //https://x.com/0xMegamus/status/1816440626281619670z
            onClick={() =>
              window.open(
                "https://x.com/0xMegamus/status/1816440626281619670z",
                "_blank"
              )
            }
          >
            VIEW EXAMPLE
          </ButtonCustom>
          <Stack
            alignItems={"center"}
            spacing={4}
            direction={"row"}
            bgcolor={"rgb(23, 23, 23)"}
            border={"2px solid rgb(47, 47, 47)"}
            borderRadius={"8px"}
            width={"80%"}
            justifyContent={"flex-end"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <Stack
              spacing={4}
              p={"5%"}
              alignItems={"center"}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Typography
                fontSize={{
                  xs: 20,
                  md: 32,
                }}
                fontWeight={700}
                textAlign={"center"}
              >
                Brief insight
              </Typography>
              <Typography
                fontWeight={600}
                fontSize={{
                  xs: 12,
                  md: 14,
                }}
                textAlign={"center"}
                color={"rgb(201, 201, 201)"}
                textTransform={"uppercase"}
              >
                Create a concise yet thorough quick-view research report on your
                project, offering focused and in*depth analysis.
              </Typography>
              <ButtonCustom
                onClick={() =>
                  window.open(
                    "https://x.com/0xMegamus/status/1816440626281619670z",
                    "_blank"
                  )
                }
              >
                VIEW EXAMPLE
              </ButtonCustom>
            </Stack>
            <Box
              component={"img"}
              src="/mkt-10.png"
              width={{
                xs: "100%",
                md: "40%",
              }}
            ></Box>
          </Stack>
          <Stack
            spacing={4}
            p={"5%"}
            alignItems={"center"}
            display={{
              xs: "flex",
              md: "none",
            }}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={"center"}
            >
              Additional combo
            </Typography>

            <Grid
              container
              display={{
                md: "none",
              }}
              gap={5}
            >
              <Grid xs={6 - 1}>
                <Stack spacing={2} alignItems={"center"}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Typography
                      fontSize={{
                        xs: 10,
                        md: 13,
                      }}
                      fontWeight={500}
                    >
                      YOUTUBE VIDEO
                    </Typography>
                    <Box
                      component={"img"}
                      src="youtube.png"
                      height={{
                        xs: 16,
                        md: 20,
                      }}
                      width={{
                        xs: 24.45,
                        md: 30.57,
                      }}
                    ></Box>
                  </Stack>
                  <ButtonCustom
                    sx={{
                      width: "90%",
                      height: "42px",
                      p: 0,
                      backgroundPosition: "center",
                      fontSize: 10,
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@Web3NexusSpace",
                        "_blank"
                      )
                    }
                  >
                    VIEW EXAMPLE
                  </ButtonCustom>
                </Stack>
              </Grid>
              <Grid xs={6 - 1}>
                <Stack spacing={2} alignItems={"center"}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Typography
                      fontSize={{
                        xs: 10,
                        md: 13,
                      }}
                      fontWeight={500}
                    >
                      TELEGRAM POST
                    </Typography>
                    <Box
                      component={"img"}
                      src="tele.png"
                      height={20}
                      width={24}
                    ></Box>
                  </Stack>
                  <ButtonCustom
                    sx={{
                      width: "90%",
                      height: "42px",
                      p: 0,
                      backgroundPosition: "center",
                      fontSize: 10,
                    }}
                    onClick={() =>
                      window.open("https://t.me/Web3NexusSpace", "_blank")
                    }
                  >
                    VIEW EXAMPLE
                  </ButtonCustom>
                </Stack>
              </Grid>
              <Grid xs={12}>
                <Stack spacing={2} alignItems={"center"}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    justifyContent={"center"}
                  >
                    <Typography
                      fontSize={{
                        xs: 10,
                        md: 13,
                      }}
                      fontWeight={500}
                    >
                      DISCORD CALL
                    </Typography>
                    <Box
                      component={"img"}
                      src="discord.png"
                      height={20}
                      width={26.48}
                    ></Box>
                  </Stack>
                  <ButtonCustom
                    sx={{
                      width: "40%",
                      height: "42px",
                      p: 0,
                      backgroundPosition: "center",
                      fontSize: 10,
                    }}
                    onClick={() =>
                      window.open(
                        "https://discord.com/invite/web3nexusspace",
                        "_blank"
                      )
                    }
                  >
                    VIEW EXAMPLE
                  </ButtonCustom>
                </Stack>
              </Grid>
            </Grid>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
            >
              PROMOTE YOUR PROJECT ACROSS MULTIPLE PLATFORMS WITH A YOUTUBE
              VIDEO, TELEGRAM POST, AND LIVE DISCORD CALL TO REACH A BROAD
              AUDIENCE.
            </Typography>
            <Box
              component={"img"}
              src="/mkt-11-1.png"
              bgcolor={"black"}
              width={{
                xs: "100%",
                md: 0,
              }}
              height={"100%"}
            ></Box>
          </Stack>
          <Stack
            alignItems={"center"}
            spacing={4}
            direction={"row"}
            bgcolor={"rgb(23, 23, 23)"}
            border={"2px solid rgb(47, 47, 47)"}
            borderRadius={"8px"}
            width={"80%"}
            justifyContent={"flex-end"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
            <Stack spacing={4} p={"5%"} alignItems={"center"}>
              <Typography
                fontSize={{
                  xs: 20,
                  md: 32,
                }}
                fontWeight={700}
                textAlign={"center"}
              >
                Additional combo
              </Typography>

              <Stack spacing={2}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <Typography fontSize={13} fontWeight={500}>
                    YOUTUBE VIDEO
                  </Typography>
                  <Box
                    component={"img"}
                    src="youtube.png"
                    height={{
                      xs: 16,
                      md: 20,
                    }}
                    width={{
                      xs: 24.45,
                      md: 30.57,
                    }}
                  ></Box>
                </Stack>
                <ButtonCustom
                  sx={{
                    width: "250px",
                    height: "42px",
                    p: 0,
                    backgroundPosition: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://wnsinfluentialcircle.notion.site/",
                      "_blank"
                    )
                  }
                >
                  VIEW EXAMPLE
                </ButtonCustom>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <Typography fontSize={13} fontWeight={500}>
                    TELEGRAM POST
                  </Typography>
                  <Box
                    component={"img"}
                    src="tele.png"
                    height={20}
                    width={24}
                  ></Box>
                </Stack>
                <ButtonCustom
                  sx={{
                    width: "250px",
                    height: "42px",
                    p: 0,
                    backgroundPosition: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://wnsinfluentialcircle.notion.site/",
                      "_blank"
                    )
                  }
                >
                  VIEW EXAMPLE
                </ButtonCustom>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  spacing={2}
                  justifyContent={"center"}
                >
                  <Typography fontSize={13} fontWeight={500}>
                    DISCORD CALL
                  </Typography>
                  <Box
                    component={"img"}
                    src="discord.png"
                    height={20}
                    width={26.48}
                  ></Box>
                </Stack>
                <ButtonCustom
                  sx={{
                    width: "250px",
                    height: "42px",
                    p: 0,
                    backgroundPosition: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://wnsinfluentialcircle.notion.site/",
                      "_blank"
                    )
                  }
                >
                  VIEW EXAMPLE
                </ButtonCustom>
              </Stack>
              <Typography
                fontWeight={600}
                fontSize={{
                  xs: 12,
                  md: 14,
                }}
                textAlign={"center"}
                color={"rgb(201, 201, 201)"}
              >
                PROMOTE YOUR PROJECT ACROSS MULTIPLE PLATFORMS WITH A YOUTUBE
                VIDEO, TELEGRAM POST, AND LIVE DISCORD CALL TO REACH A BROAD
                AUDIENCE.
              </Typography>
            </Stack>
            <Box
              component={"img"}
              src="/mkt-11.png"
              bgcolor={"black"}
              width={"50%"}
              height={"100%"}
            ></Box>
          </Stack>
        </Stack>

        <Stack
          alignItems={"center"}
          spacing={{
            xs: 4,
            md: 20,
          }}
        >
          <Stack
            position={"sticky"}
            spacing={4}
            top={0}
            bgcolor={"black"}
            width={1}
            py={2}
            zIndex={100}
            component={"div"}
            id="for-memecoin-projects"
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              pt={10}
              fontWeight={700}
              textAlign={"center"}
            >
              ADDITIONAL SERVICES SPECIFICALLY <br></br>
              FOR MEMECOIN PROJECTS
            </Typography>
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 14,
                md: 24,
              }}
              textAlign={"center"}
            >
              TELEGRAM
            </Typography>
          </Stack>
          <Stack alignItems={"center"} position={"relative"} spacing={2}>
            <Box
              component={"img"}
              src="/mkt-12.png"
              width={"87%"}
              display={{
                xs: "none",
                md: "unset",
              }}
            ></Box>
            <Box
              component={"img"}
              src="/mkt-12-1.png"
              width={"87%"}
              display={{
                xs: "unset",
                md: "none",
              }}
            ></Box>
            <Stack
              position={{
                xs: "relative",
                md: "absolute",
              }}
              top={{
                xs: 0,
                md: "85%",
              }}
            >
              <ButtonCustom
                sx={{
                  width: "250px",
                  height: "42px",
                  p: 0,
                  backgroundPosition: "center",
                }}
                onClick={() =>
                  window.open("https://t.me/Web3NexusSpace/447", "_blank")
                }
              >
                VIEW EXAMPLE
              </ButtonCustom>
            </Stack>
          </Stack>
          <Stack alignItems={"center"} spacing={4} position={"relative"}>
            <Stack
              position={"relative"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={{
                xs: 1,
                md: 4,
              }}
              border={{
                xs: "none",
                md: "4px solid rgb(69, 69, 69)",
              }}
              width={"85%"}
              p={2}
              borderRadius={"16px"}
            >
              <Stack
                alignItems={{
                  xs: "center",
                  md: "flex-start",
                }}
                spacing={1}
              >
                <Typography
                  fontSize={{
                    xs: 12,
                    md: 24,
                  }}
                  fontWeight={600}
                >
                  PROMOTION PACKAGE
                </Typography>
                <Typography
                  fontSize={{
                    xs: 10,
                    md: 14,
                  }}
                  textTransform={{
                    xs: "unset",
                    md: "uppercase",
                  }}
                  textAlign={{
                    xs: "center",
                    md: "start",
                  }}
                >
                  Includes inviting community members to interact with your
                  community with giveaways for members, and promoting the
                  project with 3 pinned posts (one before the presale starts,
                  one an hour before the presale ends, and one before the
                  launch), along with some reminder posts.
                </Typography>
              </Stack>
              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={{
                  xs: 1,
                  md: 4,
                }}
                alignItems={{
                  xs: "center",
                  md: "flex-start",
                }}
              >
                <Stack
                  alignItems={{
                    xs: "center",
                    md: "flex-start",
                  }}
                  width={{
                    xs: "100%",
                    md: "70%",
                  }}
                  spacing={{
                    xs: 1,
                    md: 4,
                  }}
                >
                  <Typography
                    fontSize={{
                      xs: 12,
                      md: 24,
                    }}
                    fontWeight={600}
                  >
                    BUBBLE BUY BOT
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 10,
                      md: 14,
                    }}
                    textTransform={{
                      xs: "unset",
                      md: "uppercase",
                    }}
                    textAlign={{
                      xs: "center",
                      md: "start",
                    }}
                  >
                    Coverage for 1.5 hours when presale has just started, 1.5
                    hours before presale ends, and 1.5 hours when trading on dex
                    has just started.
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: 10,
                      md: 14,
                    }}
                    textTransform={{
                      xs: "unset",
                      md: "uppercase",
                    }}
                    textAlign={{
                      xs: "center",
                      md: "start",
                    }}
                  >
                    The content of those articles will be researched and written
                    by us, not just using a translation tool.
                  </Typography>
                </Stack>
                <Box
                  component={"img"}
                  src="/mkt-13.png"
                  width={"40%"}
                  display={{
                    xs: "none",
                    md: "flex",
                  }}
                ></Box>
                <Box
                  component={"img"}
                  src="/mkt-13-1.png"
                  width={"100%"}
                  display={{
                    xs: "flex",
                    md: "none",
                  }}
                ></Box>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            position={"sticky"}
            spacing={4}
            top={185}
            component={"div"}
            bgcolor={"black"}
            width={1}
            py={2}
            zIndex={100}
          >
            <Typography
              fontWeight={600}
              fontSize={{
                xs: 14,
                md: 24,
              }}
              textAlign={"center"}
            >
              X (FORMERLY TWITTER)
            </Typography>
          </Stack>
          <Stack alignItems={"center"} position={"relative"} spacing={2}>
            <Box
              component={"img"}
              src="/mkt-14.png"
              width={"85%"}
              display={{
                xs: "none",
                md: "flex",
              }}
            ></Box>
            <Box
              component={"img"}
              src="/mkt-14-1.png"
              width={"100%"}
              display={{
                xs: "flex",
                md: "none",
              }}
            ></Box>
            <ButtonCustom
              sx={{
                width: "160px",
                p: 0,
                ml: 5,
                backgroundPosition: "center",
                display: {
                  md: "none",
                },
              }}
              onClick={() =>
                window.open(
                  "https://x.com/0xFrankies/status/1818089059895697646",
                  "_blank"
                )
              }
            >
              VIEW EXAMPLE
            </ButtonCustom>
            <Box
              component={"img"}
              src="/mkt-14-2.png"
              width={"100%"}
              display={{
                xs: "flex",
                md: "none",
              }}
            ></Box>
            <ButtonCustom
              sx={{
                width: "160px",
                p: 0,
                ml: 5,
                backgroundPosition: "center",
                display: {
                  md: "none",
                },
              }}
              onClick={() =>
                window.open(
                  "https://x.com/JocarterTheG/status/1797105316422951308",
                  "_blank"
                )
              }
            >
              VIEW EXAMPLE
            </ButtonCustom>
            <Stack
              position={"absolute"}
              top={"85%"}
              direction={"row"}
              width={"85%"}
              display={{
                xs: "none",
                md: "flex",
              }}
            >
              <Stack flex={2} alignItems={"center"}>
                <ButtonCustom
                  sx={{
                    width: "160px",
                    height: "42px",
                    p: 0,
                    ml: 5,
                    backgroundPosition: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://x.com/0xFrankies/status/1818089059895697646",
                      "_blank"
                    )
                  }
                >
                  VIEW EXAMPLE
                </ButtonCustom>
              </Stack>
              <Stack flex={3} alignItems={"center"}>
                <ButtonCustom
                  sx={{
                    width: "160px",
                    height: "42px",
                    p: 0,
                    backgroundPosition: "center",
                  }}
                  onClick={() =>
                    window.open(
                      "https://x.com/JocarterTheG/status/1797105316422951308",
                      "_blank"
                    )
                  }
                >
                  VIEW EXAMPLE
                </ButtonCustom>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          alignItems={"center"}
          spacing={{
            xs: 2,
            md: 4,
          }}
          direction={{
            xs: "column",
            md: "row",
          }}
        >
          <Stack
            spacing={2}
            alignItems={"center"}
            maxWidth={{
              xs: "100%",
              md: "50%",
            }}
            pl={{
              xs: 0,
              md: 8,
            }}
            zIndex={1}
            pt={{
              xs: 0,
              md: 10,
            }}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={700}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
            >
              WHY CHOOSE US?
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
            >
              BY INCORPORATING THE INFLUENCE AND REACH OF WNS INFLUENTIAL
              CIRCLE, OUR MARKETING AND PROMOTION SERVICES ARE UNIQUELY
              POSITIONED TO PROVIDE UNPARALLELED SUPPORT AND VISIBILITY FOR YOUR
              WEB3 PROJECT.
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
            >
              WE BUILD A SOLID FOUNDATION FOR YOUR PROJECT'S GROWTH AND SUCCESS
              WITHIN THE WEB3 ECOSYSTEM. WE HAVE ALSO COLLABORATED WITH MAJOR
              PARTNERS SUCH AS LINEA, BNB, CHAIN, PIRATE NATION, AND OTHERS,
              FURTHER STRENGTHENING OUR NETWORK AND IMPACT.
            </Typography>
            <Typography
              fontWeight={500}
              fontSize={{
                xs: 12,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
              pt={5}
            >
              FOR MORE INFORMATION, VISIT WNS INFLUENTIAL CIRCLE:
            </Typography>
            <ButtonCustom
              sx={{
                width: {
                  xs: "100%",
                  md: "800px",
                },
                height: "82px",
                p: 0,
                ml: 5,
                backgroundPosition: "center",
                backgroundImage: 'url("2.svg")',
                fontSize: {
                  xs: 12,
                  md: 14,
                },
              }}
              onClick={() =>
                window.open(
                  "https://wnsinfluentialcircle.notion.site/",
                  "_blank"
                )
              }
            >
              HTTPS://WNSINFLUENTIALCIRCLE.NOTION.SITE/
            </ButtonCustom>
            <Typography
              fontWeight={500}
              fontSize={{
                xs: 10,
                md: 14,
              }}
              textAlign={"center"}
              color={"rgb(201, 201, 201)"}
              pt={5}
            >
              EXPLORE OUR PARTNERS & FRIENDS:
            </Typography>
            <ButtonCustom
              sx={{
                width: {
                  xs: "100%",
                  md: "800px",
                },
                height: "82px",
                p: 0,
                ml: 5,
                backgroundPosition: "center",
                backgroundImage: 'url("2.svg")',
                fontSize: {
                  xs: 10,
                  md: 14,
                },
              }}
              onClick={() => handleDirectToPartner()}
            >
              HTTPS://WEB3NEXUS.SPACE/PARTNERS-AND-FRIENDS
            </ButtonCustom>
          </Stack>
          <Stack
            position={"absolute"}
            display={{
              xs: "none",
              md: "flex",
            }}
            right={0}
            alignItems={"flex-end"}
          >
            <Box component={"img"} src="/mkt-15-1.png" width={"50%"}></Box>
          </Stack>
          <Box
            component={"img"}
            src="/mkt-15-1.png"
            width={"90%"}
            display={{
              md: "none",
            }}
          ></Box>
        </Stack>
        <Stack width={"100vw"}>
          <Footer></Footer>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MaketingAndPromotionServices;
