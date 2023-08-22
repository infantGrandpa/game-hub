import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import getCroppedImageUrl from "../services/image-url";

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
            <Flex
                zIndex={2}
                width="92%"
                height="100%"
                maxH="300px"
                justifyContent="space-between"
                position="absolute"
                aspectRatio={16 / 9}
            >
                <IconButton
                    aria-label="left-arrow"
                    onClick={() => slider?.slickPrev()}
                    colorScheme="gray"
                    height="100%"
                    borderRadius="0"
                >
                    <BiLeftArrowAlt />
                </IconButton>
                <IconButton
                    aria-label="right-arrow"
                    onClick={() => slider?.slickNext()}
                    colorScheme="gray"
                    height="100%"
                    borderRadius="0"
                >
                    <BiRightArrowAlt />
                </IconButton>
            </Flex>
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
                        backgroundImage={getCroppedImageUrl(`url(${url})`)}
                    />
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
