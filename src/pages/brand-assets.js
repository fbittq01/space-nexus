import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import { Box, Stack, Typography } from "@mui/material";

const BrandAssets = () => {
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        spacing={4}
        py={20}
        alignItems={"center"}
        justifyContent={"center"}
        px={2}
      >
        <Typography fontSize={32} fontWeight={700}>
          BRAND ASSETS
        </Typography>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={10}>
          <Stack
            spacing={4}
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent={"center"}
            alignItems={{
              xs: "center",
            }}
          >
            <Stack
              spacing={2}
              pr={4}
              // width={300}
              sx={{
                alignItems: {
                  xs: "center",
                  md: "unset",
                },
              }}
            >
              <Typography fontSize={28} fontWeight={600}>
                Logo
              </Typography>
              <Typography fontSize={12} color={"rgb(175 175 175)"}>
                THE OFFICIAL WEB3 NEXUS SPACE<br></br> LOGO AND AND SYMBOL.
              </Typography>
              <ButtonCustom component="a" href="logo.zip" download>
                DOWNLOAD LOGO
              </ButtonCustom>
            </Stack>
            <Box
              display={{
                xs: "none",
                md: "flex",
              }}
              component={"img"}
              src="image-logo-12.png"
              width={{
                xs: "45%",
                md: "25%",
              }}
              height={"fit-content"}
            ></Box>
            <Box
              display={{
                xs: "none",
                md: "flex",
              }}
              component={"img"}
              src="image-logo-13.png"
              width={{
                xs: "45%",
                md: "25%",
              }}
              height={"fit-content"}
            ></Box>
            <Stack
              display={{
                xs: "flex",
                md: "none",
              }}
              direction={{
                xs: "row",
              }}
              alignItems={{
                xs: "center",
                md: "unset",
              }}
              justifyContent={{
                xs: "center",
                md: "unset",
              }}
              spacing={2}
            >
              <Box
                component={"img"}
                src="image-logo-12.png"
                width={{
                  xs: "45%",
                  md: "25%",
                }}
                height={"fit-content"}
              ></Box>
              <Box
                component={"img"}
                src="image-logo-13.png"
                width={{
                  xs: "50%",
                  md: "25%",
                }}
                height={"fit-content"}
              ></Box>
            </Stack>
          </Stack>
          <Stack
            spacing={4}
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              spacing={2}
              pr={{
                xs: 0,
                md: 4,
              }}
              width={300}
              alignItems={{
                xs: "center",
                md: "unset",
              }}
            >
              <Typography fontSize={28} fontWeight={600}>
                GUIDELINES
              </Typography>
              <Typography
                fontSize={12}
                color={"rgb(175 175 175)"}
                textAlign={{
                  xs: "center",
                  md: "unset",
                }}
              >
                WEB3 NEXUS SPACE BRAND GUIDELINES <br></br>
                THAT ENSURE PROPER USE OF OUR ASSETS.
              </Typography>
              <ButtonCustom
                // component="a"
                // href="guideline.zip"
                // download
                // disabled
                sx={{ color: "rgb(175 175 175)" }}
              >
                DOWNLOAD BRAND GUIDELINES
              </ButtonCustom>
            </Stack>
            <Box
              component={"img"}
              src="image-logo-14.png"
              width={{
                xs: "100%",
                md: "calc(50% + 32px)",
              }}
              height={"fit-content"}
            ></Box>
          </Stack>
          <Stack
            spacing={4}
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              spacing={2}
              pr={{
                xs: 0,
                md: 4,
              }}
              width={300}
              alignItems={{
                xs: "center",
                md: "unset",
              }}
            >
              <Typography fontSize={28} fontWeight={600}>
                Media Kit
              </Typography>
              <Typography fontSize={12} color={"rgb(175 175 175)"}>
                A LIBRARY OF ASSETS TO SUPPORT <br></br>
                MARKETING COMMUNICATIONS.
              </Typography>
              <ButtonCustom component="a" href="mediakit.zip" download>
                DOWNLOAD MEDIA KIT
              </ButtonCustom>
            </Stack>
            <Box
              component={"img"}
              src="image-logo-15.png"
              width={{
                xs: "100%",
                md: "calc(50% + 32px)",
              }}
              height={"fit-content"}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default BrandAssets;
