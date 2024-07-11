import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import useDirect from "@/customHook/directHook";
import { Box, Stack, Typography } from "@mui/material";

const TermsOfService = () => {
  const {handleDirectToContactUs} = useDirect()
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
            TERMS OF SERVICE
          </Typography>
          <Typography fontSize={12}>Last Updated: June 23, 2024</Typography>
          <Typography fontSize={14}>
            {`WEB3 NEXUS SPACE ("WNS," "we," "our," or "us") provides various
            services and tools (collectively, the "WNS Offerings"). Your use of
            these Offerings is governed by these Terms of Service ("Terms"). By
            accessing or using our services, you agree to be bound by these
            Terms. If you do not agree to these Terms, please do not use our
            services.`}
          </Typography>
          <Typography fontSize={14}>
            {`SECTION 8 OF THESE TERMS CONTAINS A BINDING ARBITRATION CLAUSE AND A
            WAIVER OF CLASS ACTION RIGHTS, WHICH MAY SIGNIFICANTLY IMPACT YOUR
            LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT. IF
            YOU DO NOT AGREE TO ALL OF THE TERMS IN THEIR ENTIRETY, YOU MAY NOT
            USE THE WEB3 NEXUS SPACE OFFERINGS IN ANY MANNER.`}
          </Typography>
          <Typography fontSize={14}>
            {`Please read the Terms carefully and in full. They cover important
            information about our Offerings, your rights under this agreement,
            and all future changes to the Terms. They require that you accept
            all the risks associated with using the Offerings, as they are
            experimental in nature. We reserve the right to change these Terms
            at any time.`}
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            1. Use of the Offerings
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box> {`You agree
            that your use of the Offerings shall be deemed your agreement in
            full to these Terms and our Privacy Policy, which is incorporated
            herein by reference. We grant you a worldwide, royalty-free,
            non-assignable, non-exclusive, revocable, and non-sublicensable
            license to access the WNS Offerings, subject to these Terms, as well
            as all information and materials published, distributed, or
            otherwise made available on our website. You agree not to use these
            Offerings in a manner that is fraudulent or violative of applicable
            laws.`}
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            2. User Responsibilities
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}> Account Security:</b> You are
            responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account.
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Compliance:</b> You agree to comply
            with all applicable laws and regulations when using our services.
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Prohibited Conduct:</b> You agree not
            to engage in any unlawful or prohibited activities, including but
            not limited to spamming, hacking, or infringing on the rights of
            others.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            3. Privacy
          </Typography>
          <Typography fontSize={14}>
            Our use of your information is governed by our Privacy Policy. By
            using our services, you consent to the collection and use of your
            information as described in the Privacy Policy.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            4. Termination
          </Typography>
          <Typography fontSize={14}>
            We reserve the right to terminate or suspend your access to our
            services at any time, without notice, for conduct that we believe
            violates these Terms or is harmful to other users of our services,
            us, or third parties, or for any other reason.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            5. Limitation of Liability
          </Typography>
          <Typography fontSize={14}>
            WEB3 NEXUS SPACE shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages, or any loss of profits
            or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses, resulting from your
            use of our services.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            6. Changes to Terms
          </Typography>
          <Typography fontSize={14}>
            We reserve the right to modify these Terms at any time. We will
            notify you of any changes by posting the new Terms on our website.
            You are advised to review these Terms periodically for any changes.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            7. Dispute Resolution
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Binding Arbitration:</b> Any dispute,
            claim, or controversy arising out of or relating to these Terms or
            the breach, termination, enforcement, interpretation, or validity
            thereof, including the determination of the scope or applicability
            of these Terms to arbitrate, shall be determined by arbitration.
          </Typography>
          <Typography color={"rgb(175, 175, 175)"} fontSize={14}>
            <Box component={"img"} src="logo-2.png" height={12}></Box>{" "}
            <b style={{ color: "white" }}>Class Action Waiver:</b> You agree
            that any arbitration or proceeding shall be limited to the dispute
            between us and you individually. To the full extent permitted by
            law, no arbitration or proceeding shall be joined with any other,
            and there is no right or authority for any dispute to be arbitrated
            on a class-action basis or to utilize class-action procedures.
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={14}
            color={"white"}
            fontWeight={500}
          >
            8. Contact Us
          </Typography>
          <Typography fontSize={14}>
            If you have any questions about these Terms, please contact us.
          </Typography>
          <ButtonCustom onClick={handleDirectToContactUs}>CONTACT US</ButtonCustom>
        </Stack>
      </Stack>

      <Footer></Footer>
    </>
  );
};

export default TermsOfService;
