
import { Flex, Image, Text, Box, Button, Card, Avatar, Rating } from "@mantine/core";
import Arrow from "../assets/Home/Arrow.svg";
import BF from "../assets/Home/BF.svg";
import Insta from "../assets/Socials/Insta.svg";
import Facebook from "../assets/Socials/Facebook.svg";
import Snap from "../assets/Socials/Snap.svg";

import sit_in from "../assets/burger.svg";
import food_order from "../assets/food-order.svg";
import take_away from "../assets/tablet-wishlist.svg";
import { Carousel } from "@mantine/carousel";

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
            <Flex
                bg={"black"}
                w={"100%"}
                h={"25%"}
                align={"center"}
                justify={"space-around"}
            >
                <Flex w={"60%"} align={"center"} >
                    <Flex w={"33%"} direction={"column"} >
                        <Flex pb={4} gap={8}>
                        <Image src={food_order} width={45} />
                        <Text ta={"center"} color="white" weight={400} size={24} >Commande</Text>
                        </Flex>
                        <Box w={"100%"} h={3} bg={"white"} className="bLine" />
                    </Flex>
                    <Flex w={"33%"} direction={"column"} >
                        <Flex pb={4} gap={8}>
                        <Image src={take_away} width={44} />
                        <Text ta={"center"} color="white" weight={400} size={24} >Click & Collect</Text>
                        </Flex>
                        <Box w={"100%"} h={3} bg={"white"} className="bLine" />
                    </Flex>
                    <Flex w={"33%"} direction={"column"} >
                        <Flex pb={4} gap={8}>
                        <Image src={sit_in} width={45} />
                        <Text ta={"center"} color="white" weight={400} size={24} >Sur place</Text>
                        </Flex>
                        <Box w={"100%"} h={3} bg={"white"} className="bLine" />
                    </Flex>
                </Flex>
                <Flex w={"30%"} h={"100%"}>
                    <Carousel height={"100%"} w={"100%"} my={16} controlsOffset={-32} sx={{control: {backgroundColor: "orange"}, slide:{borderWidth: 1 ,borderColor: "orange"}}} >
                        <Card w={"100%"} h={"100%"} bg={"dark.9"} px={32} py={16} sx={{ boxSizing: "border-box" }} withBorder >
                            <Flex direction={"column"} gap={16}>

                            <Card.Section h={"40%"}>
                                <Flex justify={"space-between"} align={"center"} >
                                    <Flex gap={16} >

                                <Avatar/>
                                <Text align={"center"} color="white"> Le mangeur</Text>
                                    </Flex>
                                <Rating value={4} readOnly />
                                </Flex>
                            </Card.Section>
                            <Card.Section h={"60%"}  >
                                <Text color="white" truncate lineClamp={2}> Lorem </Text>
                            </Card.Section>
                            </Flex>
                        </Card>
                    </Carousel>
                </Flex>
            </Flex>
            <Flex bg={"pink.6"} w={"100%"} h={"10%"}></Flex>
        </Flex>
    );
};

export default Home;
