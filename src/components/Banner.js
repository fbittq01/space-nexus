import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Stack, Typography } from "@mui/material";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
      setCount((preValue) => ++preValue % slides.length);
    }, 5000);

    // clear interval after close page
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <Stack>
      <Stack overflow={"hidden"} component={"div"} ref={emblaRef}>
        <Stack
          sx={{
            backfaceVisibility: "hidden",
            display: "flex",
            touchAction: "pan-y pipinch-zoomch",
            // marginRight: "calc(2rem * -1)",
          }}
          direction={"row"}
        >
          {slides.map((data, index) => (
            <Stack
              flex={"0 0 50%"}
              minWidth={0}
              pl={"1rem"}
              key={index}
              m={2}
              border={"1px solid rgb(23, 23, 23)"}
              borderRadius={"8px"}
              bgcolor={index === count && "rgb(23, 23, 23)"}
            >
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                p={2}
                py={4}
              >
                <Box component={"img"} src={data.image} height={"200px"}></Box>
                <Stack spacing={2}>
                  <Typography fontWeight={700}>{data.title}</Typography>
                  <Typography fontSize={12}>{data.description}</Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EmblaCarousel;
