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
      >
        <Typography fontSize={32} fontWeight={700}>
          BRAND ASSETS
        </Typography>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={10}>
          <Stack spacing={4} direction={"row"} justifyContent={"center"}>
            <Stack spacing={2} pr={4} width={300}>
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
              component={"img"}
              src="image-logo-12.png"
              width={"25%"}
              height={"fit-content"}
            ></Box>
            <Box
              component={"img"}
              src="image-logo-13.png"
              width={"25%"}
              height={"fit-content"}
            ></Box>
          </Stack>
          <Stack
            spacing={4}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack spacing={2} pr={4} width={300}>
              <Typography fontSize={28} fontWeight={600}>
                WNS
              </Typography>
              <Typography fontSize={12} color={"rgb(175 175 175)"}>
                WEB3 NEXUS SPACE BRAND GUIDELINES <br></br>
                THAT ENSURE PROPER USE OF OUR ASSETS.
              </Typography>
              <ButtonCustom component="a" href="image-logo-14.png" download>
                DOWNLOAD BRAND WNS
              </ButtonCustom>
            </Stack>
            <Box
              component={"img"}
              src="image-logo-14.png"
              width={"calc(50% + 32px)"}
              height={"fit-content"}
            ></Box>
          </Stack>
          <Stack
            spacing={4}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack spacing={2} pr={4} width={300}>
              <Typography fontSize={28} fontWeight={600}>
                Media Kit
              </Typography>
              <Typography fontSize={12} color={"rgb(175 175 175)"}>
                A LIBRARY OF ASSETS TO SUPPORT <br></br>
                MARKETING COMMUNICATIONS.
              </Typography>
              <ButtonCustom component="a" href="image-logo-15.png" download>DOWNLOAD MEDIA KIT</ButtonCustom>
            </Stack>
            <Box
              component={"img"}
              src="image-logo-15.png"
              width={"calc(50% + 32px)"}
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
