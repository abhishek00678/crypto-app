import { VStack, Image, Heading, Text } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} target="blank">
      <VStack
        w={52}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.5s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.4)",
          },
        }}
      >
        <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt="coin" />
        <Heading noOfLines={1} size={"md"}>
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
