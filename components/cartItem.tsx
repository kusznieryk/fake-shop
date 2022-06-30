import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch } from "../app/hooks";
import { removeElement } from "../app/store/features/cart";
import { item } from "../app/types_constant";

interface props {
  data: item;
  index: number;
}
const cartItem: React.FC<props> = ({ data, index }) => {
  const dispatch = useAppDispatch();
  const remove = () => dispatch(removeElement(index));
  return (
    <Box
      display="grid"
      gridTemplateColumns="100px 1fr 20px"
      gridTemplateRows="1fr 1fr"
      width="93%"
      justifyContent="center"
      mx="10px"
      alignItems="center"
    >
      <Image src={data.images[0]} gridColumn="1"gridRow="1/3" width="80px" />
      <Heading fontSize="1.3rem" gridColumn="2" gridRow="1">
        {data.title}
      </Heading>
      <Text gridColumn="2" fontSize="1.4rem">${data.price}</Text>
      <Button onClick={remove} gridColumn="3/4" gridRow="1/3">
        X
      </Button>
    </Box>
  );
};

export default cartItem;
