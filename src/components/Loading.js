import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/system";

const animateBg = keyframes`
  /* Uncomment to add hue rotation animation */
  /* 0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  } */
`;

const animate = keyframes`
  0% {
    transform: scale(1);
  }
  80%, 100% {
    transform: scale(0);
  }
`;

const LoaderSection = styled("section")({
  margin: 0,
  padding: 0,
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  background: "#042104",
  animation: `${animateBg} 10s linear infinite`,
});

const LoaderBox = styled(Box)({
  position: "relative",
  width: "30px",
  height: "30px",
  "&:hover": {
    width: "30px",
    height: "30px",
  },
});

const LoaderSpan = styled("span")(({ i }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  transform: `rotate(${18 * i}deg)`,
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "4px",
    height: "4px",
    background: "#fff",
    borderRadius: "50%",
    animation: `${animate} 2s linear infinite`,
    animationDelay: `${0.1 * i}s`,
  },
}));

const Loading = () => {
  return (
    <LoaderBox>
      {Array.from({ length: 20 }, (_, i) => (
        <LoaderSpan key={i} i={i + 1} />
      ))}
    </LoaderBox>
  );
};

export default Loading;
