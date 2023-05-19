import { Flex, Header, Image, Text } from "@mantine/core";
import BurgerIcon from "../assets/Navbar/BurgerIcon.svg";
import Phone from "../assets/Phone.svg";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
    // type path = "/home" | "/carte" | "/photo" | "/concept";

    // const selectedPath:Location = useLocation();
    return (
        <Header height={92} fixed bg={"black"} sx={{ border: 0 }}>
            <Flex
                w={"100%"}
                h={"100%"}
                align={"center"}
                px={24}
                justify={"space-between"}
            >
                <Image
                    src={BurgerIcon}
                    h={77.5}
                    width={69.75}
                    sx={{ alignContent: "center", alignItems: "center" }}
                />
                <Flex w={"60%"} justify={"space-evenly"}>
                    <NavbarLink to="/" label="Accueil" />
                    <NavbarLink to="/carte" label="La carte" />
                    <NavbarLink to="/photos" label="Photos" />
                    <NavbarLink to="/concept" label="Concept" />
                </Flex>
                <Flex w={200}>
                    <Image src={Phone} width={24} />
                    <Text
                        ml={12}
                        c={"white"}
                        component="a"
                        href="tel:+33238637146"
                    >
                        02 38 63 71 46
                    </Text>
                </Flex>
            </Flex>
        </Header>
    );
};

export default Navbar;
