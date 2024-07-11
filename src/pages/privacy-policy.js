import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import useDirect from "@/customHook/directHook";
import { Box, Stack, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  const { handleDirectToContactUs } = useDirect();
  return (
    <>
      <Stack alignItems={"center"}>
        <HeaderApp></HeaderApp>
        <Stack
          spacing={2}
          width={1000}
          justifyContent={"center"}
          pt={20}
          color={"rgb(175, 175, 175)"}
        >
          <Typography
            fontWeight={700}
            textTransform={"uppercase"}
            fontSize={32}
            color={"white"}
          >
            PRIVACY POLICY
          </Typography>
          <Typography fontSize={12}>Last Updated: June 23, 2024</Typography>
          <Typography fontSize={14}>
            {`WEB3 NEXUS SPACE ("WNS," "we," "us," or "our") is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our services.`}
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            1. Information We Collect
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Usage Data:</b> We may collect
            information that your browser sends whenever you visit our website
            or use our services. This may include your IP address, browser type,
            browser version, the pages of our website that you visit, the time
            and date of your visit, and other diagnostic data.
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Personal Information:</b> We may
            collect personally identifiable information, such as your name,
            email address, and contact details, when you voluntarily provide it
            to us.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            2. How We Use Your Information
          </Typography>
          <Typography fontSize={14}>
            We use the information we collect in the following ways:
          </Typography>
          <Stack>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> To
              provide, operate, and maintain our services
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> To
              improve, personalize, and expand our services
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> To
              communicate with you, either directly or through one of our
              partners
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> To
              process your transactions and manage your orders
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> To
              develop new products, services, features, and functionality
            </Typography>
          </Stack>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            3. Disclosure of Your Information
          </Typography>
          <Typography fontSize={14}>
            We may share your information in the following situations:
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>With Service Providers:</b> We may
            share your information with third-party vendors, service providers,
            contractors, or agents who perform services for us or on our behalf.
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>For Legal Reasons:</b> We may disclose
            your information where we are legally required to do so to comply
            with applicable law, governmental requests, or legal processes.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            4. Security of Your Information
          </Typography>
          <Typography fontSize={14}>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            Your Data Protection Rights
          </Typography>
          <Typography fontSize={14}>
            Depending on your location, you may have the following rights
            regarding your personal information:
          </Typography>
          <Stack>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> The
              right to access
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box>The
              right to rectification
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> The
              right to erasure
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> The
              right to restrict processing
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> The
              right to object to processing
            </Typography>
            <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
              <Box component={"img"} src="logo-2.png" height={12}></Box> The
              right to data portability
            </Typography>
          </Stack>

          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            6. Changes to This Privacy Policy
          </Typography>
          <Typography fontSize={14}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
            You are advised to review this Privacy Policy periodically for any
            changes.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            7. Contact Us
          </Typography>
          <Typography fontSize={14}>
            If you have any questions about this Privacy Policy, please contact
            us.
          </Typography>
          <ButtonCustom onClick={handleDirectToContactUs}>CONTACT US</ButtonCustom>
        </Stack>
      </Stack>

      <Footer></Footer>
    </>
  );
};

export default PrivacyPolicy;
