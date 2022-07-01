import { Box } from "@chakra-ui/react";
import React from "react";
import Item from "./item";
import { item } from '../app/types_constant'

interface props {
  items: item[]
}
const list: React.FC<props> = ({ items }) => {
  return (
    <Box display="grid" gridTemplateColumns={"repeat(auto-fill,minmax(350px,1fr))"}>
      {items.map((e: item, index: number) => (
        <Item data={e} key={String(index) + String(e.id)} />
      ))}
    </Box>
  );
};

export default list;
