import { Button, Flex, Image, Text } from "@mantine/core";
import Arrow from "../assets/Home/Arrow.svg";
import { useMediaQuery } from "@mantine/hooks";

const HomeTitle = () => {
    const matches = useMediaQuery("(max-width:1200px)");
    return (
        <Flex
            direction={"column"}
            h={"100%"}
            justify={"space-between"}
            pl={"5%"}
        >
            <Flex direction={"column"}>
                <Text p="0" c={"white"} weight={400} size={matches ? 50 : 80}>
                    Les Burgers
                </Text>
                <Text p="0" c={"white"} weight={400} size={matches ? 50 : 80}>
                    du{" "}
                    <Text color="orange" span>
                        Boucher
                    </Text>
                </Text>
            </Flex>
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
    );
};

export default HomeTitle;
