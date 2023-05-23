import React from "react";
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
import sit_in from "../assets/burger.svg";
import food_order from "../assets/food-order.svg";
import take_away from "../assets/tablet-wishlist.svg";

const HowToEat = () => {
    return (
        <Flex w={"60%"} align={"center"}>
            <Flex w={"33%"} direction={"column"}>
                <Flex pb={4} gap={8}>
                    <Image src={food_order} width={45} />
                    <Text ta={"center"} color="white" weight={400} size={24}>
                        Commande
                    </Text>
                </Flex>
                <Box w={"100%"} h={3} bg={"white"} className="bLine" />
            </Flex>
            <Flex w={"33%"} direction={"column"}>
                <Flex pb={4} gap={8}>
                    <Image src={take_away} width={44} />
                    <Text ta={"center"} color="white" weight={400} size={24}>
                        Click & Collect
                    </Text>
                </Flex>
                <Box w={"100%"} h={3} bg={"white"} className="bLine" />
            </Flex>
            <Flex w={"33%"} direction={"column"}>
                <Flex pb={4} gap={8}>
                    <Image src={sit_in} width={45} />
                    <Text ta={"center"} color="white" weight={400} size={24}>
                        Sur place
                    </Text>
                </Flex>
                <Box w={"100%"} h={3} bg={"white"} className="bLine" />
            </Flex>
        </Flex>
    );
};

export default HowToEat;
