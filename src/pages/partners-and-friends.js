import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
import { styled } from "@mui/system";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Collapse, Grid, Icon, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Network = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((preValue) => !preValue);
  const categories = [
    "AI",
    "Analytics",
    "API",
    "Community",
    "Consulting & Marketing",
    "Data Service",
    "DeFi",
    "DEX",
    "Gaming",
    "Identity",
    "Infrastructure",
    "Launchpad",
    "Layer Blockchain",
    "Marketplace",
    "Memecoin",
    "NFT",
    "Social Network",
    "VC",
  ];
  const projects = [
    {
      name: "Linea",
      categories: ["Layer Blockchain"],
      link: "https://x.com/LineaBuild/photo",
      logo: "image-brand-1.png",
    },
    {
      name: "Pirate Nation",
      categories: ["Gaming", "NFT"],
      link: "https://x.com/PirateNation/photo",
      logo: "image-brand-2.png",
    },
    {
      name: "SPACE ID",
      categories: ["Data Service", "Identity", "NFT", "API"],
      link: "https://x.com/SpaceIDProtocol/photo",
      logo: "image-brand-3.png",
    },
    {
      name: "Inferno Labs",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/InfernoLabs_/photo",
      logo: "image-brand-4.png",
    },
    {
      name: "AP Collective",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/apcollectiveio/photo",
      logo: "image-brand-5.png",
    },
    {
      name: "SHADOW WAR",
      categories: ["Gaming"],
      link: "https://x.com/PlayShadowWar/photo",
      logo: "image-brand-6.png",
    },
    {
      name: "Ultiverse",
      categories: ["AI", "Gaming", "NFT"],
      link: "https://x.com/UltiverseDAO/photo",
      logo: "image-brand-7.png",
    },
    {
      name: "My Shell",
      categories: ["AI"],
      link: "https://x.com/myshell_ai/photo",
      logo: "image-brand-8.png",
    },
    {
      name: "Foxy",
      categories: ["Memecoin"],
      link: "https://x.com/FoxyLinea/photo",
      logo: "image-brand-9.png",
    },
    {
      name: "Onchain",
      categories: ["Layer Blockchain"],
      link: "https://x.com/onchaincoin/photo",
      logo: "image-brand-10.png",
    },
    {
      name: "Champions Tactics",
      categories: ["Gaming"],
      link: "https://x.com/ChampionsVerse/photo",
      logo: "image-brand-11.png",
    },
    {
      name: "Palio",
      categories: ["Gaming"],
      link: "https://x.com/PalioAI/photo",
      logo: "image-brand-12.png",
    },
    {
      name: "TODAY",
      categories: ["Gaming"],
      link: "https://x.com/todaythegame/photo",
      logo: "image-brand-13.png",
    },
    {
      name: "Seedify",
      categories: ["Launchpad"],
      link: "https://x.com/SeedifyFund/photo",
      logo: "image-brand-14.png",
    },
    {
      name: "Playember",
      categories: ["Gaming"],
      link: "https://x.com/play_ember/photo",
      logo: "image-brand-15.png",
    },
    {
      name: "MetaVirtuallz",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/MetaVirtuallz/photo",
      logo: "image-brand-16.png",
    },
    {
      name: "Jigen",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/JigenOfficial/photo",
      logo: "image-brand-17.png",
    },
    {
      name: "Holo Hive",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/HoloHive_/photo",
      logo: "image-brand-18.png",
    },
    {
      name: "Gomble Games",
      categories: ["Gaming"],
      link: "https://x.com/gomblegames/photo",
      logo: "image-brand-19.png",
    },
    {
      name: "SkyArk Chronicles",
      categories: ["Gaming"],
      link: "https://x.com/SkyarkS/photo",
      logo: "image-brand-20.png",
    },
    {
      name: "Initia",
      categories: ["Layer Blockchain"],
      link: "https://x.com/initiaFDN/photo",
      logo: "image-brand-21.png",
    },
    {
      name: "San FranTokyo",
      categories: ["Gaming"],
      link: "https://x.com/San_FranTokyo/photo",
      logo: "image-brand-22.png",
    },
    {
      name: "Zone Nine",
      categories: ["Gaming"],
      link: "https://x.com/Zone9Survival/photo",
      logo: "image-brand-23.png",
    },
    {
      name: "Saros",
      categories: ["DeFi", "DEX"],
      link: "https://x.com/saros_xyz/photo",
      logo: "image-brand-24.png",
    },
    {
      name: "Bitcoin Cats",
      categories: ["Gaming", "Memecoin"],
      link: "https://x.com/BitcoinCats1Cat/photo",
      logo: "image-brand-25.png",
    },
    {
      name: "Ape Terminal",
      categories: ["Marketplace"],
      link: "https://x.com/apeterminal/photo",
      logo: "image-brand-26.png",
    },
    {
      name: "MemeFi",
      categories: ["Social Network", "Gaming"],
      link: "https://x.com/memeficlub/photo",
      logo: "image-brand-27.png",
    },
    {
      name: "Revived",
      categories: ["Gaming"],
      link: "https://x.com/playrevived/photo",
      logo: "image-brand-28.png",
    },
    {
      name: "MONO",
      categories: ["NFT"],
      link: "https://twitter.com/monoonx/photo",
      logo: "image-brand-29.png",
    },
    {
      name: "BasedVC",
      categories: ["VC"],
      link: "https://x.com/basedvcfund/photo",
      logo: "image-brand-30.png",
    },
    {
      name: "Anomaly",
      categories: ["Gaming"],
      link: "https://twitter.com/anomalygamesinc/photo",
      logo: "image-brand-31.png",
    },
    {
      name: "W3BFlow",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/W3BFlow/photo",
      logo: "image-brand-32.png",
    },
    {
      name: "Linea Vietnam",
      categories: ["Community"],
      link: "https://x.com/Linea_VietNam/photo",
      logo: "image-brand-33.png",
    },
    {
      name: "SPACE ID Vietnam",
      categories: ["Community"],
      link: "https://x.com/SpaceIDVietnam/photo",
      logo: "image-brand-34.png",
    },
    {
      name: "Initia Vietnam",
      categories: ["Community"],
      link: "https://x.com/InitiaVietnam/photo",
      logo: "image-brand-35.png",
    },
    {
      name: "Blast Vietnam",
      categories: ["Community"],
      link: "https://t.me/Blast_VietnamChannel/photo",
      logo: "image-brand-36.png",
    },
    {
      name: "Merlin Chain Vietnam",
      categories: ["Community"],
      link: "https://t.me/MerlinChainVietnamChannel/photo",
      logo: "image-brand-37.png",
    },
    {
      name: "Farcana",
      categories: ["Gaming"],
      link: "https://x.com/FarcanaOfficial/photo",
      logo: "image-brand-38.png",
    },
    {
      name: "Storm Warfare",
      categories: ["Gaming"],
      link: "https://x.com/StormWarfare/photo",
      logo: "image-brand-39.png",
    },
    {
      name: "STR8FIRE",
      categories: ["Gaming"],
      link: "https://x.com/STR8FIRE_io/photo",
      logo: "image-brand-40.png",
    },
    {
      name: "Shards",
      categories: ["Gaming", "Infrastructure"],
      link: "https://x.com/ShardsOfficial/photo",
      logo: "image-brand-41.png",
    },
    {
      name: "Param Labs",
      categories: ["Gaming"],
      link: "https://x.com/ParamLaboratory/photo",
      logo: "image-brand-42.png",
    },
    {
      name: "KIRAVERSE",
      categories: ["Gaming"],
      link: "https://x.com/KiraverseGame/photo",
      logo: "image-brand-43.png",
    },
    {
      name: "bitsCrunch",
      categories: ["Data Service", "AI", "Analytics", "API"],
      link: "https://x.com/bitsCrunch/photo",
      logo: "image-brand-44.png",
    },
    {
      name: "Dark Frontiers",
      categories: ["Gaming"],
      link: "https://x.com/DarkFrontiersGS/photo",
      logo: "image-brand-45.png",
    },
    {
      name: "Lucid",
      categories: ["NFT"],
      link: "https://x.com/lucidbtc/photo",
      logo: "image-brand-46.png",
    },
    {
      name: "TRALA",
      categories: ["Gaming"],
      link: "https://x.com/TRALA_Official/photo",
      logo: "image-brand-47.png",
    },
    {
      name: "Legend of Arcadia",
      categories: ["Gaming"],
      link: "https://x.com/LegendofArcadia/photo",
      logo: "image-brand-48.png",
    },
    {
      name: "Venom",
      categories: ["Layer Blockchain"],
      link: "https://x.com/VenomFoundation/photo",
      logo: "image-brand-49.png",
    },
    {
      name: "Fableborne",
      categories: ["Gaming"],
      link: "https://x.com/fableborne/photo",
      logo: "image-brand-50.png",
    },
    {
      name: "KOKODI",
      categories: ["Gaming"],
      link: "https://x.com/kokodigame/photo/",
      logo: "image-brand-51.png",
    },
    {
      name: "Mana Web3",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/Mana_Web3/photo",
      logo: "image-brand-52.png",
    },
    {
      name: "THE D3N",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/thed3n_/photo",
      logo: "image-brand-53.png",
    },
    {
      name: "BRAWL3RS",
      categories: ["Gaming"],
      link: "https://x.com/BRAWL3RS/photo",
      logo: "image-brand-54.png",
    },
    {
      name: "BlockGames",
      categories: ["Gaming"],
      link: "https://x.com/GetBlockGames/photo",
      logo: "image-brand-55.png",
    },
    {
      name: "Hub.xyz",
      categories: ["Social Network"],
      link: "https://x.com/hubdotxyz/photo",
      logo: "image-brand-56.png",
    },
    {
      name: "MomoJi",
      categories: ["Memecoin"],
      link: "https://t.me/MoMojiGlobal/photo",
      logo: "image-brand-57.png",
    },
    {
      name: "Grok Inu",
      categories: ["Memecoin"],
      link: "https://t.me/grokinu_portal/photo",
      logo: "image-brand-58.png",
    },
    {
      name: "Asteroid",
      categories: ["Community"],
      link: "https://t.me/asteroid_community/photo",
      logo: "image-brand-59.png",
    },
    {
      name: "MON Protocol",
      categories: ["Gaming"],
      link: "https://x.com/monprotocol/photo",
      logo: "image-brand-60.png",
    },
    {
      name: "Animalia",
      categories: ["Gaming"],
      link: "https://x.com/Animalia_games/photo",
      logo: "image-brand-61.png",
    },
    {
      name: "Endblock",
      categories: ["Gaming"],
      link: "https://x.com/Endblock_io/photo",
      logo: "image-brand-62.png",
    },
    {
      name: "eesee.io",
      categories: ["Launchpad", "Marketplace"],
      link: "https://x.com/eesee_io/photo",
      logo: "image-brand-63.png",
    },
    {
      name: "Astra Nova",
      categories: ["Gaming"],
      link: "https://x.com/Astra__Nova/photo",
      logo: "image-brand-64.png",
    },
    {
      name: "Rage Effect",
      categories: ["Gaming"],
      link: "https://x.com/RageEffect_/photo",
      logo: "image-brand-65.png",
    },
    {
      name: "Cyborg Heroes",
      categories: ["Gaming"],
      link: "https://x.com/CyborgHeroes/photo",
      logo: "image-brand-66.png",
    },
    {
      name: "Spikynads",
      categories: ["NFT"],
      link: "https://x.com/spikynads/photo",
      logo: "image-brand-67.png",
    },
  ];

  const [displayProjects, setDisplayProject] = useState(projects);
  const [categorySelected, setCategorySelected] = useState("ALL");
  const filterProjectsByCategory = (category) => {
    const result = projects.filter((project) =>
      project.categories.includes(category)
    );
    setDisplayProject(result);
    setCategorySelected(category);
  };

  const searchByName = (searchName) => {
    setCategorySelected("");
    if (searchName.trim() === "") {
      setDisplayProject(projects);
    } else {
      const result = projects.filter((project) =>
        project.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setDisplayProject(result);
    }
  };

  const BorderBox = styled(Box)(({ theme }) => ({
    position: "relative",
    ":hover": {
      backgroundColor: "rgb(23 23 23)",
    },
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "-1px",
      left: "5%",
      width: "90%",
      borderBottom: "1px solid rgb(78, 78, 78)",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      right: "-1px",
      top: "5%",
      height: "90%",
      borderRight: "1px solid rgb(78, 78, 78)",
    },
  }));

  return (
    <>
      <Stack
        alignItems={"center"}
        pb={{
          xs: 2,
          md: 20,
        }}
        p={2}
      >
        <HeaderApp></HeaderApp>
        <Stack
          pt={{
            xs: 10,
            md: 20
          }}
          width={{
            xs: "unset",
            md: 1000,
          }}
          maxWidth={{
            xs: "unset",
            md: 1000,
          }}
          spacing={2}
        >
          <Typography
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={600}
          >
            PARTNERS & FRIENDS
          </Typography>
          <Stack width={1} height={"1px"} bgcolor={"rgb(50 50 50)"}></Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1} pt={2}>
              <Typography fontSize={13} fontWeight={600}>
                +99
              </Typography>
              <Typography
                fontSize={13}
                fontWeight={600}
                color={"rgb(175 175 175)"}
              >
                ENTITIES
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              display={{
                xs: "flex",
                md: "flex",
              }}
              alignItems={{
                xs: "flex-end",
                md: "center",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                sx={{ cursor: "pointer" }}
                component={"div"}
                onClick={handleOpen}
                fontSize={13}
                pt={2}
              >
                <Typography
                  fontSize={13}
                  fontWeight={600}
                  color={"rgb(175 175 175)"}
                >
                  PROJECT CATEGORY:
                </Typography>
                <Typography
                  fontSize={13}
                  fontWeight={600}
                  textTransform={"uppercase"}
                >
                  {categorySelected ? categorySelected : "ALL"}
                </Typography>
                <Icon>
                  {open ? (
                    <KeyboardArrowUp></KeyboardArrowUp>
                  ) : (
                    <KeyboardArrowDown></KeyboardArrowDown>
                  )}
                </Icon>
              </Stack>
              <Collapse
                in={open}
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                }}
              >
                <Grid
                  container
                  sx={{
                    bgcolor: "rgb(23 23 23)",
                    p: 2,
                    px: 0,
                    borderRadius: "4px",
                  }}
                >
                  <Grid xs={12} px={2}>
                    <Stack
                      width={"31.5%"}
                      component={"div"}
                      onClick={() => {
                        setCategorySelected("ALL");
                        setDisplayProject(projects);
                      }}
                    >
                      <Typography
                        p={1}
                        fontSize={12}
                        fontWeight={600}
                        color={"rgb(175 175 175)"}
                        textTransform={"uppercase"}
                        sx={{
                          ":hover": {
                            bgcolor: "rgb(175 175 175)",
                            color: "white",
                            borderRadius: "4px",
                            textShadow: "-1px 1px 5px #DDDDDD",
                          },
                          cursor: "pointer",
                        }}
                      >
                        ALL
                      </Typography>
                    </Stack>
                  </Grid>
                  {Array.from({ length: Math.ceil(categories.length / 7) }).map(
                    (_, i) => (
                      <Grid
                        key={i}
                        display={{
                          xs: "none",
                          md: "unset",
                        }}
                      >
                        <Stack
                          spacing={1}
                          borderRight={
                            i < Math.ceil(categories.length / 7) - 1
                              ? "1px solid white"
                              : "none"
                          }
                          px={2}
                          height={
                            i === Math.ceil(categories.length / 7) - 1
                              ? "100%"
                              : "auto"
                          }
                        >
                          {categories
                            .slice(i * 7, (i + 1) * 7)
                            .map((category, index) => (
                              <Stack
                                key={index}
                                component={"div"}
                                onClick={() =>
                                  filterProjectsByCategory(category)
                                }
                              >
                                <Typography
                                  p={1}
                                  fontSize={12}
                                  fontWeight={600}
                                  color={"rgb(175 175 175)"}
                                  textTransform={"uppercase"}
                                  sx={{
                                    ":hover": {
                                      bgcolor: "rgb(175 175 175)",
                                      color: "white",
                                      borderRadius: "4px",
                                      textShadow: "-1px 1px 5px #DDDDDD",
                                    },
                                    cursor: "pointer",
                                  }}
                                >
                                  {category}
                                </Typography>
                              </Stack>
                            ))}
                        </Stack>
                      </Grid>
                    )
                  )}
                </Grid>
              </Collapse>
            </Stack>
            <Input
              placeholder="SEARCH"
              sx={{
                color: "white",
                maxWidth: "200px",
                fontSize: 14,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
              onChange={(e) => searchByName(e.target.value)}
            ></Input>
          </Stack>
          <Stack spacing={2}>
            <Collapse
              in={open}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <Grid
                container
                sx={{
                  bgcolor: "rgb(23 23 23)",
                  p: 2,
                  px: 0,
                  borderRadius: "4px",
                }}
              >
                <Grid xs={12} px={2}>
                  <Stack
                    width={"31.5%"}
                    component={"div"}
                    onClick={() => {
                      setCategorySelected("ALL");
                      setDisplayProject(projects);
                    }}
                  >
                    <Typography
                      p={1}
                      fontSize={12}
                      fontWeight={600}
                      color={"rgb(175 175 175)"}
                      textTransform={"uppercase"}
                      sx={{
                        ":hover": {
                          bgcolor: "rgb(175 175 175)",
                          color: "white",
                          borderRadius: "4px",
                          textShadow: "-1px 1px 5px #DDDDDD",
                        },
                        cursor: "pointer",
                      }}
                    >
                      ALL
                    </Typography>
                  </Stack>
                </Grid>
                {Array.from({ length: Math.ceil(categories.length / 9) }).map(
                  (_, i) => (
                    <Grid
                      key={i}
                      display={{
                        xs: "flex",
                        md: "none",
                      }}
                    >
                      <Stack
                        spacing={1}
                        borderRight={
                          i < Math.ceil(categories.length / 9) - 1
                            ? "1px solid white"
                            : "none"
                        }
                        px={2}
                        height={
                          i === Math.ceil(categories.length / 9) - 1
                            ? "100%"
                            : "auto"
                        }
                      >
                        {categories
                          .slice(i * 9, (i + 1) * 9)
                          .map((category, index) => (
                            <Stack
                              key={index}
                              component={"div"}
                              onClick={() => filterProjectsByCategory(category)}
                            >
                              <Typography
                                p={1}
                                fontSize={12}
                                fontWeight={600}
                                color={"rgb(175 175 175)"}
                                textTransform={"uppercase"}
                                sx={{
                                  ":hover": {
                                    bgcolor: "rgb(175 175 175)",
                                    color: "white",
                                    borderRadius: "4px",
                                    textShadow: "-1px 1px 5px #DDDDDD",
                                  },
                                  cursor: "pointer",
                                }}
                              >
                                {category}
                              </Typography>
                            </Stack>
                          ))}
                      </Stack>
                    </Grid>
                  )
                )}
              </Grid>
            </Collapse>
            <Input
              placeholder="SEARCH"
              sx={{
                color: "white",
                maxWidth: "100%",
                fontSize: 14,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
              onChange={(e) => searchByName(e.target.value)}
            ></Input>
          </Stack>
          {displayProjects && displayProjects.length > 0 && (
            <Grid container columnGap={0.1} rowGap={0.1}>
              {displayProjects.map((project, index) => (
                <Grid xs={4 - 0.02} md={2 - 0.01} xl={2 - 0.01} key={index}>
                  <BorderBox
                    display={"flex"}
                    flexDirection={"column"}
                    height={"150px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    p={2}
                    color={"rgb(175 175 175)"}
                    sx={{
                      ":after": {
                        borderRight: {
                          xs: (index + 1) % 3 === 0 && "none !important",
                          md:
                            (index + 1) % 6 === 0
                              ? "none !important"
                              : (index + 1) % 3 === 0 &&
                                "1px solid rgb(78, 78, 78) !important",
                        },
                      },
                      "&:hover": {
                        color: "white !important",
                        textShadow: "-1px 1px 5px #DDDDDD",
                      },
                    }}
                  >
                    <Grid container rowGap={0.5}>
                      {project.categories.map((category, index) => (
                        <Typography
                          fontSize={8}
                          borderLeft={"1px solid rgb(175 175 175)"}
                          px={1}
                          // color={"rgb(175 175 175)"}
                          textTransform={"uppercase"}
                          fontWeight={700}
                          key={index}
                        >
                          {category}
                        </Typography>
                      ))}
                    </Grid>
                    <Box
                      component={"img"}
                      src={project.logo}
                      height={"40%"}
                    ></Box>
                    <Typography
                      fontSize={8}
                      textTransform={"uppercase"}
                      // color={"rgb(175 175 175)"}
                      fontWeight={700}
                    >
                      {project.name}
                    </Typography>
                  </BorderBox>
                </Grid>
              ))}
              {categorySelected === "ALL" && (
                <Grid xs={4 - 0.02} sm={4} md={2 - 0.01} xl={2 - 0.01}>
                  <BorderBox
                    display={"flex"}
                    flexDirection={"column"}
                    height={"150px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    p={2}
                    color={"rgb(175 175 175)"}
                    sx={{
                      "&:hover": {
                        color: "white !important",
                      },
                    }}
                  >
                    <Stack
                      alignItems={"center"}
                      justifyContent={"center"}
                      height={"100%"}
                    >
                      <Typography
                        fontSize={8}
                        textTransform={"uppercase"}
                        // color={"rgb(175 175 175)"}
                        fontWeight={700}
                        textAlign={"center"}
                      >
                        AND HUNDREDS OF OTHER PARTNERS & FRIENDS
                      </Typography>
                    </Stack>
                  </BorderBox>
                </Grid>
              )}
            </Grid>
          )}
        </Stack>
      </Stack>
      <Footer></Footer>
    </>
  );
};

export default Network;
