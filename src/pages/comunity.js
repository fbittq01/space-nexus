import ButtonCustom from "@/components/Button";
import Footer from "@/components/Footer";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
import useDirect from "@/customHook/directHook";
import { Close, CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Icon,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Comunity = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileCount, setFileCount] = useState(0);

  const formRef = useRef();

  const emailTo = "Contactandsupport@web3nexus.space"

  const handleOpen = () => {
    setOpen((preValue) => !preValue);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: file.size,
      file: file,
    }));

    setFiles(filesArray);
    setFileCount(files.length);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFileCount(files.length - 1);
  };

  const { handleDirectToTermsOfServices, handleDirectToPolicy } = useDirect();

  const handleSubmit = async () => {
    // const formData = {
    //   name: formRef.current.customerName.value,
    //   email: formRef.current.email.value,
    //   message: formRef.current.message.value,
    // }
    const formDataToSend = new FormData();
    formDataToSend.append("name", formRef.current.customerName.value);
    formDataToSend.append("email", formRef.current.email.value);
    formDataToSend.append("message", formRef.current.message.value);
    files.forEach((file) => {
      formDataToSend.append("file", file.file);
    });

    try {
      await axios.post("/api/contact", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFiles([]);
      setFileCount(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack
        pt={10}
        alignItems={"center"}
        justifyContent={"center"}
        height={"90vh"}
        spacing={2}
      >
        <Typography fontSize={32} fontWeight={600}>
          CONTACT US
        </Typography>
        {!open ? (
          <>
            <Typography fontSize={14} color={"rgb(175, 175, 175)"}>
              WE LOVE OUR CUSTOMERS, USERS, AND PARTNERS. SO FEEL FREE TO
              CONTACT US ANYTIME YOU WANT.
            </Typography>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              direction={"row"}
              spacing={4}
              py={2}
            >
              <Box
                component={"img"}
                src="x.png"
                height={20}
                width={"fit-content"}
                onClick={() => {
                  window.open("https://x.com/Web3NexusSpace", "_blank");
                }}
              ></Box>
              <Box
                component={"img"}
                src="email.png"
                height={20}
                onClick={() => {
                  window.location.href = `mailto:${emailTo}`;
                }}
              ></Box>

              <Box
                component={"img"}
                src="tele.png"
                height={20}
                width={"fit-content"}
                onClick={() => {
                  window.open("https://t.me/Web3NexusSpace", "_blank");
                }}
              ></Box>
            </Stack>
            <Stack>
              <ButtonCustom
                sx={{
                  background: 'url("2.svg")',
                  width: "580px",
                  height: "56px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  p: 2,
                }}
                onClick={handleOpen}
              >
                OR MORE EASILY, JUST DROP US A LINE!
              </ButtonCustom>
            </Stack>
          </>
        ) : (
          <>
            <Typography fontSize={14} color={"rgb(175,175,175)"}>
              Or more easily, just drop us a line!
            </Typography>
            <Stack
              spacing={2}
              width={"30%"}
              alignItems={"center"}
              component={"form"}
              ref={formRef}
            >
              <Input
                placeholder="Name"
                sx={{ color: "white" }}
                id="customerName"
              ></Input>
              <Input
                placeholder="Email"
                sx={{ color: "white" }}
                id="email"
              ></Input>
              <Input
                placeholder="Message"
                sx={{ color: "white", height: "86px" }}
                multiline
                minRows={3}
                id="message"
              ></Input>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                width={1}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{
                      bgcolor: "transparent !important",
                    }}
                    onChange={(e) => handleFileChange(e)}
                  >
                    <Box
                      component={"img"}
                      src="attach-file.png"
                      width={16}
                    ></Box>
                    <VisuallyHiddenInput type="file" multiple />

                    <Typography
                      fontSize={12}
                      color={"rgb(175, 175, 175)"}
                      textTransform={"none"}
                      pl={1}
                    >
                      Attach Files
                    </Typography>
                  </Button>
                </Stack>
                <Typography fontSize={12} color={"rgb(175, 175, 175)"}>
                  Attachments ({fileCount})
                </Typography>
              </Stack>
              {files.map((file, index) => (
                <Stack
                  width={1}
                  bgcolor={"rgb(80 80 80)"}
                  p={1}
                  borderRadius={"8px"}
                  alignItems={"center"}
                  direction={"row"}
                  justifyContent={"space-between"}
                  key={index}
                >
                  <Typography fontSize={12} color={"black"}>
                    {`${file.name} (${file.size})kB`}
                  </Typography>
                  <IconButton
                    sx={{ p: 0 }}
                    onClick={() => handleDeleteFile(index)}
                  >
                    <Close sx={{ width: 20 }}></Close>
                  </IconButton>
                </Stack>
              ))}

              <Typography
                color={"rgb(175, 175, 175)"}
                fontSize={12}
                textAlign={"center"}
              >
                This site is protected by reCAPTCHA and the Google{" "}
                <Box
                  component={"a"}
                  onClick={() => {
                    window.open("https://policies.google.com/privacy", "_blank")
                  }}
                  color={"white"}
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Privacy Policy
                </Box>{" "}
                and{" "}
                <Box
                  component={"a"}
                  onClick={() => {
                    window.open("https://policies.google.com/terms", "_blank")
                  }}
                  color={"white"}
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  Terms of Service
                </Box>{" "}
                apply.
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <ButtonCustom
                  sx={{
                    flex: 1,
                    background: "none",
                    backgroundImage: "url(button-4.svg)",
                  }}
                  onClick={handleSubmit}
                >
                  SEND
                </ButtonCustom>
                <Button
                  sx={{
                    flex: 1,
                  }}
                  onClick={handleOpen}
                >
                  <Typography
                    color={"white"}
                    fontWeight={300}
                    sx={{ textDecoration: "underline" }}
                    fontSize={14}
                  >
                    CANCEL
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
      <Footer></Footer>
    </Stack>
  );
};

export default Comunity;
