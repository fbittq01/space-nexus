import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
import styled from "@emotion/styled";
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
    },
    {
      name: "Pirate Nation",
      categories: ["Gaming", "NFT"],
      link: "https://x.com/PirateNation/photo",
    },
    {
      name: "SPACE ID",
      categories: ["Data Service", "Identity", "NFT", "API"],
      link: "https://x.com/SpaceIDProtocol/photo",
    },
    {
      name: "Inferno Labs",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/InfernoLabs_/photo",
    },
    {
      name: "AP Collective",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/apcollectiveio/photo",
    },
    {
      name: "SHADOW WAR",
      categories: ["Gaming"],
      link: "https://x.com/PlayShadowWar/photo",
    },
    {
      name: "Ultiverse",
      categories: ["AI", "Gaming", "NFT"],
      link: "https://x.com/UltiverseDAO/photo",
    },
    {
      name: "My Shell",
      categories: ["AI"],
      link: "https://x.com/myshell_ai/photo",
    },
    {
      name: "Foxy",
      categories: ["Memecoin"],
      link: "https://x.com/FoxyLinea/photo",
    },
    {
      name: "Onchain",
      categories: ["Layer Blockchain"],
      link: "https://x.com/onchaincoin/photo",
    },
    {
      name: "Champions Tactics",
      categories: ["Gaming"],
      link: "https://x.com/ChampionsVerse/photo",
    },
    {
      name: "Palio",
      categories: ["Gaming"],
      link: "https://x.com/PalioAI/photo",
    },
    {
      name: "TODAY",
      categories: ["Gaming"],
      link: "https://x.com/todaythegame/photo",
    },
    {
      name: "Seedify",
      categories: ["Launchpad"],
      link: "https://x.com/SeedifyFund/photo",
    },
    {
      name: "Playember",
      categories: ["Gaming"],
      link: "https://x.com/play_ember/photo",
    },
    {
      name: "MetaVirtuallz",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/MetaVirtuallz/photo",
    },
    {
      name: "Jigen",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/JigenOfficial/photo",
    },
    {
      name: "Holo Hive",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/HoloHive_/photo",
    },
    {
      name: "Gomble Games",
      categories: ["Gaming"],
      link: "https://x.com/gomblegames/photo",
    },
    {
      name: "SkyArk Chronicles",
      categories: ["Gaming"],
      link: "https://x.com/SkyarkS/photo",
    },
    {
      name: "Initia",
      categories: ["Layer Blockchain"],
      link: "https://x.com/initiaFDN/photo",
    },
    {
      name: "San FranTokyo",
      categories: ["Gaming"],
      link: "https://x.com/San_FranTokyo/photo",
    },
    {
      name: "Zone Nine",
      categories: ["Gaming"],
      link: "https://x.com/Zone9Survival/photo",
    },
    {
      name: "Saros",
      categories: ["DeFi", "DEX"],
      link: "https://x.com/saros_xyz/photo",
    },
    {
      name: "Bitcoin Cats",
      categories: ["Gaming", "Memecoin"],
      link: "https://x.com/BitcoinCats1Cat/photo",
    },
    {
      name: "Ape Terminal",
      categories: ["Marketplace"],
      link: "https://x.com/apeterminal/photo",
    },
    {
      name: "MemeFi",
      categories: ["Social Network", "Gaming"],
      link: "https://x.com/memeficlub/photo",
    },
    {
      name: "Revived",
      categories: ["Gaming"],
      link: "https://x.com/playrevived/photo",
    },
    {
      name: "MONO",
      categories: ["NFT"],
      link: "https://twitter.com/monoonx/photo",
    },
    {
      name: "BasedVC",
      categories: ["VC"],
      link: "https://x.com/basedvcfund/photo",
    },
    {
      name: "Anomaly",
      categories: ["Gaming"],
      link: "https://twitter.com/anomalygamesinc/photo",
    },
    {
      name: "W3BFlow",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/W3BFlow/photo",
    },
    {
      name: "Linea Vietnam",
      categories: ["Community"],
      link: "https://x.com/Linea_VietNam/photo",
    },
    {
      name: "SPACE ID Vietnam",
      categories: ["Community"],
      link: "https://x.com/SpaceIDVietnam/photo",
    },
    {
      name: "Initia Vietnam",
      categories: ["Community"],
      link: "https://x.com/InitiaVietnam/photo",
    },
    {
      name: "Blast Vietnam",
      categories: ["Community"],
      link: "https://t.me/Blast_VietnamChannel/photo",
    },
    {
      name: "Merlin Chain Vietnam",
      categories: ["Community"],
      link: "https://t.me/MerlinChainVietnamChannel/photo",
    },
    {
      name: "Farcana",
      categories: ["Gaming"],
      link: "https://x.com/FarcanaOfficial/photo",
    },
    {
      name: "Storm Warfare",
      categories: ["Gaming"],
      link: "https://x.com/StormWarfare/photo",
    },
    {
      name: "STR8FIRE",
      categories: ["Gaming"],
      link: "https://x.com/STR8FIRE_io/photo",
    },
    {
      name: "Shards",
      categories: ["Gaming", "Infrastructure"],
      link: "https://x.com/ShardsOfficial/photo",
    },
    {
      name: "Param Labs",
      categories: ["Gaming"],
      link: "https://x.com/ParamLaboratory/photo",
    },
    {
      name: "KIRAVERSE",
      categories: ["Gaming"],
      link: "https://x.com/KiraverseGame/photo",
    },
    {
      name: "bitsCrunch",
      categories: ["Data Service", "AI", "Analytics", "API"],
      link: "https://x.com/bitsCrunch/photo",
    },
    {
      name: "Dark Frontiers",
      categories: ["Gaming"],
      link: "https://x.com/DarkFrontiersGS/photo",
    },
    {
      name: "Lucid",
      categories: ["NFT"],
      link: "https://x.com/lucidbtc/photo",
    },
    {
      name: "TRALA",
      categories: ["Gaming"],
      link: "https://x.com/TRALA_Official/photo",
    },
    {
      name: "Legend of Arcadia",
      categories: ["Gaming"],
      link: "https://x.com/LegendofArcadia/photo",
    },
    {
      name: "Venom",
      categories: ["Layer Blockchain"],
      link: "https://x.com/VenomFoundation/photo",
    },
    {
      name: "Fableborne",
      categories: ["Gaming"],
      link: "https://x.com/fableborne/photo",
    },
    {
      name: "KOKODI",
      categories: ["Gaming"],
      link: "https://x.com/kokodigame/photo/",
    },
    {
      name: "Mana Web3",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/Mana_Web3/photo",
    },
    {
      name: "THE D3N",
      categories: ["Consulting & Marketing"],
      link: "https://x.com/thed3n_/photo",
    },
    {
      name: "BRAWL3RS",
      categories: ["Gaming"],
      link: "https://x.com/BRAWL3RS/photo",
    },
    {
      name: "BlockGames",
      categories: ["Gaming"],
      link: "https://x.com/GetBlockGames/photo",
    },
    {
      name: "Hub.xyz",
      categories: ["Social Network"],
      link: "https://x.com/hubdotxyz/photo",
    },
    {
      name: "MomoJi",
      categories: ["Memecoin"],
      link: "https://t.me/MoMojiGlobal/photo",
    },
    {
      name: "Grok Inu",
      categories: ["Memecoin"],
      link: "https://t.me/grokinu_portal/photo",
    },
    {
      name: "Asteroid",
      categories: ["Community"],
      link: "https://t.me/asteroid_community/photo",
    },
    {
      name: "MON Protocol",
      categories: ["Gaming"],
      link: "https://x.com/monprotocol/photo",
    },
    {
      name: "Animalia",
      categories: ["Gaming"],
      link: "https://x.com/Animalia_games/photo",
    },
    {
      name: "Endblock",
      categories: ["Gaming"],
      link: "https://x.com/Endblock_io/photo",
    },
    {
      name: "eesee.io",
      categories: ["Launchpad", "Marketplace"],
      link: "https://x.com/eesee_io/photo",
    },
    {
      name: "Astra Nova",
      categories: ["Gaming"],
      link: "https://x.com/Astra__Nova/photo",
    },
    {
      name: "Rage Effect",
      categories: ["Gaming"],
      link: "https://x.com/RageEffect_/photo",
    },
    {
      name: "Cyborg Heroes",
      categories: ["Gaming"],
      link: "https://x.com/CyborgHeroes/photo",
    },
    {
      name: "Spikynads",
      categories: ["NFT"],
      link: "https://x.com/spikynads/photo",
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
    setCategorySelected("")
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
      <Stack alignItems={"center"} pb={20}>
        <HeaderApp></HeaderApp>
        <Stack pt={20} width={1000} maxWidth={1000} spacing={2}>
          <Typography fontSize={32} fontWeight={600}>
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
            <Stack spacing={2} alignItems={"center"}>
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
              <Collapse in={open}>
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
                            textShadow: '-1px 1px 5px #DDDDDD'
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
                      <Grid key={i}>
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
                                      textShadow: '-1px 1px 5px #DDDDDD'
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
              sx={{ color: "white", maxWidth: "200px", fontSize: 14 }}
              onChange={(e) => searchByName(e.target.value)}
            ></Input>
          </Stack>
          {displayProjects && displayProjects.length > 0 && (
            <Grid container columnGap={0.1} rowGap={0.1}>
              {displayProjects.map((project, index) => (
                <Grid xs={6} sm={4} md={2 - 0.01} xl={2 - 0.01} key={index}>
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
                        textShadow: '-1px 1px 5px #DDDDDD'
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
                      src={`image-brand-${index + 1}.png`}
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
                <Grid xs={6} sm={4} md={2 - 0.01} xl={2 - 0.01}>
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
                    <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
                      <Typography
                        fontSize={8}
                        textTransform={"uppercase"}
                        // color={"rgb(175 175 175)"}
                        fontWeight={700}
                        textAlign={'center'}
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
