import { Box, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface NavbarLinkProps {
    to: string;
    label: string;
}

const NavbarLink = ({ to, label }: NavbarLinkProps) => {
    return (
        <Text
            c={"white"}
            component={NavLink}
            to={to}
            w={"25%"}
            ta={"start"}
            sx={{ "&.active .bLine": { height: 7 } }}
        >
            {label}
            <Box w={"100%"} h={3} bg={"white"} className="bLine" />
        </Text>
    );
};

export default NavbarLink;
