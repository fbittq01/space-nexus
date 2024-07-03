import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ButtonCustom = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 600,
  height: '40px',
  padding: '8px 16px',
  borderRadius: '8px',
  lineHeight: 2,
  backgroundColor: 'transparent',
  color: 'rgb(178, 178, 178)',
  border: '1px solid rgb(54, 54, 54)',
  width: "fit-content",
  borderRadius: "30px",
  px: "32px",
  '&:hover': {
    backgroundColor: 'rgba(0, 177, 79, 0.5)',
  },
  '&:active': {
    backgroundColor: 'rgba(0, 177, 79, 0.5)',
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgba(0, 177, 79, 0.5)',
  },
});

export default ButtonCustom;
