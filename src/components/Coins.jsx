import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";

import CoinCard from "./CoinCard";
import ErrorComponent from "./ErrorComponent";

const Coins = () => {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoin(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
  }, [currency, page]);

  if (error) {
    return <ErrorComponent message={"error while fatching coins"} />;
  }

  if (error) {
    return <ErrorComponent message={"error while fatching coins"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹ INR</Radio>
              <Radio value={"eur"}>€ EUR</Radio>
              <Radio value={"usd"}>$ USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coin.map((i) => {
              return (
                <CoinCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  price={i.current_price}
                  img={i.image}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflow={"auto"} p={"8"}>
            {btns.map((item, index) => {
              return (
                <Button
                  key={index}
                  bg={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
