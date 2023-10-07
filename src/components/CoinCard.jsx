import { VStack, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`} target="blank">
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
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
