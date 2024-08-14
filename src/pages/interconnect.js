import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
import useDirect from "@/customHook/directHook";
import { Box, Dialog, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const InterConnect = () => {
  const {
    handleDirectToContactUs,
    handleDirectToPolicy,
    handleDirectToTermsOfServices,
  } = useDirect();
  const formRef = useRef();
  const [open, setOpen] = useState(false);

  const { handleDirectToHome } = useDirect();

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formRef.current.customerName.value);
    formDataToSend.append("representing", formRef.current.representing.value);
    formDataToSend.append("XAccount", formRef.current.XAccount.value);
    formDataToSend.append("contact", formRef.current.contact.value);
    formDataToSend.append("message", formRef.current.message.value);
    formDataToSend.append(
      "usingPersonInfo",
      formRef.current.usingPersonInfo.checked
    );
    formDataToSend.append("acceptPolicy", formRef.current.acceptPolicy.checked);

    try {
      setOpen((preValue) => !preValue);
      await axios.post('/api/interconnect', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      formRef.current.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        color={"white"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={4}
        p={{
          xs: 2,
          md: 0,
        }}
        pt={{
          xs: 20,
          md: 20,
        }}
      >
        <Stack spacing={2} component={"form"} ref={formRef}>
          <Typography
            textTransform={"uppercase"}
            fontSize={{
              xs: 20,
              md: 32,
            }}
            fontWeight={700}
            textAlign={"center"}
          >
            Interconect
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            What is your name?
          </Typography>
          <Input id="customerName"></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            ARE YOU REPRESENTING YOURSELF, AN INDIVIDUAL, A PROJECT, AN
            ORCANIZATION, OR SOMETHING ELSE?<br></br> PLEASE DESCRIBE BRIEFLY.
          </Typography>
          <Input id="representing"></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            THE X ACCOUNT OF. THE ENTITY YOU REPRESENT?
          </Typography>
          <Input id="XAccount"></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            CONTACT DETAILS FOR THIS ENTITY?
          </Typography>
          <Input id="contact"></Input>
          <Typography
            textTransform={"uppercase"}
            fontSize={12}
            color={"rgb(190, 190, 190)"}
          >
            WHAT ARE YOU READY FOR? ARE YOU PREPARED TO BE PART OF OUR NETWORK?
          </Typography>
          <Input id="message"></Input>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={{
              xs: 1,
              md: 0.7,
            }}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={12}
              color={"rgb(190, 190, 190)"}
            >
              PLEASE CHECK HERE IF YOU AGREE TO LET US STORE AND CATEGORIZE THE
              INFORMATION YOU HAVE SUBMITTED (REQUIRED).
            </Typography>
            <Input
              type="checkbox"
              sx={{ border: "none", width: 100 }}
              id="usingPersonInfo"
            ></Input>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={{
              xs: 1,
              md: 0.7,
            }}
          >
            <Typography
              textTransform={"uppercase"}
              fontSize={12}
              color={"rgb(190, 190, 190)"}
            >
              PLEASE CHECK HERE IF YOU HAVE FULLY READ AND AGREE TO THE{" "}
              <Box
                component={"a"}
                color={"white"}
                onClick={handleDirectToTermsOfServices}
              >
                TERMS OF SERVICE
              </Box>{" "}
              AND{" "}
              <Box
                component={"a"}
                color={"white"}
                onClick={handleDirectToPolicy}
              >
                PRIVACY POLICY
              </Box>{" "}
              (REQUIRED).
            </Typography>
            <Input
              type="checkbox"
              sx={{ border: "none", width: 100 }}
              id="acceptPolicy"
            ></Input>
          </Stack>

          <Stack
            spacing={2}
            alignItems={"center"}
            py={{
              xs: 4,
              md: 0,
            }}
          >
            <ButtonCustom onClick={handleSubmit} sx={{ px: 10 }}>
              SUBMIT
            </ButtonCustom>
            <Typography
              color={"rgb(190, 190, 190)"}
              width={{
                xs: 1,
                md: "60%",
              }}
              textAlign={"center"}
              fontSize={{
                xs: 12,
                md: 14,
              }}
            >
              This information will be kept confidential, and we are committed
              to complying with legal regulations, terms of service, and privacy
              policy.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          justifyContent={"flex-start"}
          alignItems={{
            xs: "center",
          }}
          spacing={2}
          pb={20}
        >
          <Typography color={"rgb(190, 190, 190)"}>
            If you want to speak with us directly, please contact us.
          </Typography>
          <ButtonCustom onClick={handleDirectToContactUs} sx={{ px: 8 }}>
            CONTACT US
          </ButtonCustom>
        </Stack>
      </Stack>
      <Footer></Footer>
      <Dialog
        open={open}
        onClose={() => setOpen((preValue) => !preValue)}
        fullScreen
        sx={{
          ".MuiDialog-paper": {
            bgcolor: "transparent",
          },
        }}
      >
        <HeaderApp></HeaderApp>
        <Stack
          bgcolor={"black"}
          spacing={8}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
          p={2}
        >
          <Stack
            sx={{
              // backgroundImage:
              //   "conic-gradient(from 64deg at 0% 80%, #000000, rgb(27, 27, 27))",
              backgroundImage: {
                xs: 'url("submit-success.png")',
                md: 'url("submit-success-1.png")'
              },
              height: 'fit-content',
              backgroundSize: "contain",
              color: "white",
              p: 4,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              backgroundRepeat: "no-repeat",
              py: 12,
              // border: "2px solid rgb(69, 69, 69)",
            }}
            spacing={2}
          >
            <Typography
              fontSize={{
                xs: 20,
                md: 32,
              }}
              fontWeight={600}
              textAlign={"center"}
            >
              YOUR REQUEST HAS BEEN RECEIVED!
            </Typography>
            <Typography textAlign={"center"} color={"rgb(185, 185, 185)"}>
              Thank you for contacting us.<br></br>
              We will get back to you within 48 business hours.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            bgcolor={"transparent"}
            width={0.9}
          >
            <ButtonCustom
              onClick={() => setOpen((preValue) => !preValue)}
              sx={{
                fontSize: {
                  xs: 10,
                  md: "unset",
                },
                textAlign: "center",
                height: {
                  xs: "32px",
                  md: '56px'
                },
              }}
            >
              SEND ANOTHER REQUEST
            </ButtonCustom>
            <ButtonCustom
              onClick={handleDirectToHome}
              sx={{
                fontSize: {
                  xs: 10,
                  md: "unset",
                },
                textAlign: "center",
                height: {
                  xs: "32px",
                  md: '56px'
                },
              }}
            >
              HOME
            </ButtonCustom>
          </Stack>
        </Stack>
        <Footer></Footer>
      </Dialog>
    </Stack>
  );
};

export default InterConnect;
