import {
    Flex,
    Image,
    Text,
    Box,
    Button,
    Card,
    Avatar,
    Rating,
} from "@mantine/core";

import BF from "../assets/Home/BF.svg";

import { Carousel } from "@mantine/carousel";
import HowToEat from "../components/HowToEat";
import SocialsVertical from "../components/SocialsVertical";
import HomeTitle from "../components/HomeTitle";
import HomeCarrousselCard from "../components/HomeCarrousselCard";
import HomeFooter from "../components/HomeFooter";

const Home = () => {
    return (
        <Flex
            w={"100%"}
            h={"100vh"}
            pt={92}
            sx={{ boxSizing: "border-box" }}
            bg={"black"}
            direction={"column"}
        >
            <Flex w="100%" h={"65%"} align={"center"} justify={"space-between"}>
                <HomeTitle />
                <Flex h={"100%"} justify={"center"} align={"center"}>
                    <Image src={BF} />
                </Flex>
                <SocialsVertical />
            </Flex>
            <Flex
                bg={"black"}
                w={"100%"}
                h={"25%"}
                align={"center"}
                justify={"space-around"}
            >
                <HowToEat />

                <Flex w={"30%"} h={"100%"}>
                    <Carousel
                        height={"100%"}
                        w={"100%"}
                        // slideSize={"100%"}
                        // slideGap={"xs"}
                        my={16}
                        controlsOffset={-32}
                        sx={{
                            ".mantine-Carousel-slide": {
                                borderStyle: "solid",
                                borderWidth: 1,
                                borderColor: "rgba(255, 134, 82, 1)",
                                borderRadius: 8,
                            },
                            ".mantine-Carousel-control": {
                                backgroundColor: "rgba(255, 134, 82, 1)",
                                border: "none",
                                color: "white",
                            },
                        }}
                    >
                        <HomeCarrousselCard
                            data={[
                                {
                                    username: "Le Boucher",
                                    rating: 4,
                                    comment:
                                        "Super bon, je recommande ! Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !Super bon, je recommande !",
                                },
                                {
                                    username: "Bernard",
                                    rating: 2,
                                    comment: "bof, mais j'adore rire",
                                },
                            ]}
                        />
                    </Carousel>
                </Flex>
            </Flex>
            <Flex
                w={"100%"}
                h={"10%"}
                align={"center"}
                justify={"end"}
                pr={24}
                sx={{ boxSizing: "border-box" }}
            >
                <HomeFooter />
            </Flex>
        </Flex>
    );
};

export default Home;
