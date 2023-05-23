import React from "react";
import { Image, Flex } from "@mantine/core";
import Insta from "../assets/Socials/Insta.svg";
import Facebook from "../assets/Socials/Facebook.svg";
import Snap from "../assets/Socials/Snap.svg";

const SocialsVertical = () => {
    return (
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
    );
};

export default SocialsVertical;
