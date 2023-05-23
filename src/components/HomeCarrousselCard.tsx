import { Carousel } from "@mantine/carousel";
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

interface HomeCarrousselCardProps {
    data: { username: string; rating: number; comment: string }[];
}

const HomeCarrousselCard = ({ data }: HomeCarrousselCardProps) => {
    return (
        <>
            {data.map((el, id) => (
                <Carousel.Slide
                    key={id}
                    sx={{
                        boxSizing: "border-box",
                    }}
                    p="xs"
                >
                    <Card h="100%" bg={"black"}>
                        <Flex justify={"space-between"}>
                            <Flex gap={16} align={"center"}>
                                <Avatar />
                                <Text align={"center"} color="white">
                                    {el.username}
                                </Text>
                            </Flex>
                            <Flex justify={"space-between"} align={"center"}>
                                <Rating value={el.rating} readOnly />
                            </Flex>
                        </Flex>
                        <Text
                            color="white"
                            lineClamp={3}
                            weight={400}
                            size={16}
                        >
                            {el.comment}
                        </Text>
                    </Card>
                </Carousel.Slide>
            ))}
        </>
    );
};

export default HomeCarrousselCard;
