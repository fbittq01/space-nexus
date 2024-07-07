import ButtonCustom from "@/components/Button";
import HeaderApp from "@/components/HeaderApp";
import Input from "@/components/Input";
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
import { useState } from "react";

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

  const handleOpen = () => {
    setOpen((preValue) => !preValue);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: file.size,
    }));

    setFiles(filesArray);
    setFileCount(files.length);
  };

  const handleDeleteFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setFileCount(files.length - 1);
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
              <Box component={"img"} src="x.png" height={24}></Box>
              <Box component={"img"} src="email.png" height={24}></Box>
              <Box component={"img"} src="tele.png" height={24}></Box>
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
            <Stack spacing={2} width={"30%"} alignItems={"center"}>
              <Input placeholder="Name" sx={{ color: "white" }}></Input>
              <Input placeholder="Email" sx={{ color: "white" }}></Input>
              <Input
                placeholder="Message"
                sx={{ color: "white", height: "86px" }}
                multiline
                minRows={3}
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
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </Typography>
              <Stack direction={"row"} spacing={2}>
                <ButtonCustom
                  sx={{
                    flex: 1,
                    background: "none",
                    backgroundImage: "url(button-4.svg)",
                  }}
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
    </Stack>
  );
};

export default Comunity;
