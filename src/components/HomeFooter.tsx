import React from "react";
import { Image, Flex } from "@mantine/core";

import uber from "../assets/Socials/uber.svg";
import deliveroo from "../assets/Socials/deliveroo.svg";

const HomeFooter = () => {
    return (
        <Flex gap={12}>
            <Image src={uber} width={42} />
            <Image src={deliveroo} width={42} />
        </Flex>
    );
};

export default HomeFooter;
