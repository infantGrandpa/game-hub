import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

interface SliderSettings {
    dots: boolean;
    arrows: boolean;
    fade: boolean;
    infinite: boolean;
    autoplay: boolean;
    speed: number;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
}

interface Props {
    images: string[];
    sliderSettings?: SliderSettings;
}

const Carousel = ({
    images,
    sliderSettings = {
        dots: false,
        arrows: false,
        fade: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    },
}: Props) => {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "19%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    // These are the images used in the slide

    return (
        <Box>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
                colorScheme="gray"
            >
                <BiLeftArrowAlt />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                zIndex={2}
                onClick={() => slider?.slickNext()}
                colorScheme="gray"
            >
                <BiRightArrowAlt />
            </IconButton>
            {/* Slider */}
            <Slider {...sliderSettings} ref={(slider) => setSlider(slider)}>
                {images.map((url, index) => (
                    <Box
                        key={index}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        aspectRatio={16 / 9}
                        backgroundImage={`url(${url})`}
                    />
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
