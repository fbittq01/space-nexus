import ButtonCustom from "@/components/Button";
import HeaderApp from "@/components/HeaderApp";
import { Stack, Typography } from "@mui/material";

const Comunity = () => {
  return (
    <Stack>
      <HeaderApp></HeaderApp>
      <Stack>
        <Typography>CONTACT US</Typography>
        <Typography>
          WE LOVE OUR CUSTOMERS, USERS, AND PARTNERS. SO FEEL FREE TO CONTACT US
          ANYTIME YOU WANT.
        </Typography>
        <ButtonCustom
          sx={{
            background: 'url("2.svg")',
            width: 1,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          OR MORE EASILY, JUST DROP US A LINE!
        </ButtonCustom>
      </Stack>
    </Stack>
  );
};

export default Comunity;
