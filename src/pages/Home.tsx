import React from "react";
import { Flex, Image, Text, Box, Button } from "@mantine/core";
import Arrow from "../assets/Home/Arrow.svg";
import BF from "../assets/Home/BF.svg";
import Insta from "../assets/Socials/Insta.svg";
import Facebook from "../assets/Socials/Facebook.svg";
import Snap from "../assets/Socials/Snap.svg";
import { NavLink } from "react-router-dom";

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
                <Flex
                    direction={"column"}
                    h={"100%"}
                    justify={"space-between"}
                    pl={"5%"}
                >
                    <Text c={"white"} weight={400} size={110} w={633}>
                        Les Burgers du{" "}
                        <Text color="orange" span>
                            Boucher
                        </Text>
                    </Text>
                    <Button
                        variant="outline"
                        sx={{ borderColor: "orange" }}
                        w={450}
                        h={114}
                        rightIcon={<Image src={Arrow} />}
                    >
                        <Text
                            ta={"center"}
                            align="center"
                            c={"white"}
                            size={59}
                            pb={12}
                        >
                            La carte
                        </Text>
                        <Image />
                    </Button>
                </Flex>

                <Flex h={"100%"} justify={"center"} align={"center"}>
                    <Image width={"750"} src={BF} />
                </Flex>
                <Flex
                    w={100}
                    h={"100%"}
                    direction={"column"}
                    gap={32}
                    align={"center"}
                    justify={"start"}
                    sx={{ boxSizing: "border-box" }}
                    pt={24}
                >
                    <Image src={Insta} width={42} />
                    <Image src={Facebook} width={42} />
                    <Image src={Snap} width={42} />
                </Flex>
            </Flex>
            <Flex bg={"pink.5"} w={"100%"} h={"25%"}>
                <Flex>
                    {" "}
                    <Box>
                        <Image />
                        <Text>Commande</Text>
                    </Box>{" "}
                </Flex>
                <Flex>
                    {" "}
                    <Box>
                        <Image />
                        <Text>Click & Collect</Text>
                    </Box>{" "}
                </Flex>
                <Flex>
                    {" "}
                    <Box>
                        <Image />
                        <Text>Sur Place</Text>
                    </Box>{" "}
                </Flex>
            </Flex>
            <Flex bg={"pink.6"} w={"100%"} h={"10%"}></Flex>
        </Flex>
    );
};

export default Home;
