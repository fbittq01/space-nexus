import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ButtonCustom = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  fontWeight: 600,
  height: "56px",
  borderRadius: "4px",
  lineHeight: 2,
  backgroundColor: "transparent",
  backgroundRepeat: "no-repeat !important",
  color: "rgb(178, 178, 178)",
  width: "280px",
  borderRadius: "30px",
  background: 'url("1.svg")',
  transition: "all 0.3s linear",
  textAlign: 'center',
  "&:hover": {
    opacity: 0.7,
  },
  "&:active": {
    opacity: 0.7,
  },
  "&.Mui-disabled": {
    opacity: 0.7,
  },
});

export default ButtonCustom;
