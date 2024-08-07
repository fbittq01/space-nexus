import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Stack, Typography } from "@mui/material";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const TWEEN_FACTOR_BASE = 0.84;
  const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
        emblaApi.slideNodes()[slideIndex].style.backgroundColor =
          "rgb(23, 23, 23)";
      });
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on("reInit", setTweenFactor)
      .on("reInit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slideFocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <Stack height={"fit-content"}>
      <Stack overflow={"hidden"} component={"div"} ref={emblaRef}>
        <Stack
          sx={{
            backfaceVisibility: "hidden",
            display: "flex",
            height: {
              xs: "fit-content",
              md: "unset",
            },
          }}
          direction={"row"}
          alignItems={'center'}
        >
          {slides.map((data, index) => (
            <Stack
              flex={{
                xs: "0 0 90%",
                md: "0 0 50%",
              }}
              minWidth={0}
              pl={"1rem"}
              key={index}
              m={2}
              border={"1px solid rgb(23, 23, 23)"}
              borderRadius={"8px"}
              sx={{
                height: {
                  xs: "fit-content",
                  md: "unset",
                },
                p: 2
              }}
              minHeight={{
                xs: '300px',
                md: '300px'
              }}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Typography
                display={{
                  xs: "flex",
                  md: "none",
                }}
                width={1}
                textAlign={"center"}
                fontWeight={700}
              >
                {data.title}
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                py={4}
                flex={1}
              >
                <Box
                  component={"img"}
                  src={data.image}
                  width={{
                    xs: "30%",
                    md: "200px",
                  }}
                ></Box>
                <Stack spacing={2} justifyContent={'center'}>
                  <Typography
                    display={{
                      xs: "none",
                      md: "flex",
                    }}
                    fontWeight={700}
                  >
                    {data.title}
                  </Typography>
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
