import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CartItem from "./cartItem";
import { clearCart } from "../app/store/features/cart";

import { AiOutlineShoppingCart } from 'react-icons/ai'

type place = "right" | "bottom";

const cart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const clearItems = () => dispatch(clearCart());
  const [placement, setPlacement] = useState<place>("bottom");
  const bg = useColorModeValue("white", "#2d3748");

  useEffect(() => {
    setPlacement(window.innerWidth >= 767 ? "right" : "bottom");
  }, []);

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen} leftIcon={<Icon as={AiOutlineShoppingCart} w="4" h="4" color="red.500" mr="2" />}>
        Cart
      </Button>
      <Drawer
        placement={placement}
        size={"md"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {cart.length
              ? "The elements of your cart are: "
              : "You don't have any items on your cart"}
            <Button onClick={onClose}>X</Button>
          </DrawerHeader>
          <DrawerBody>
            {cart.map((e, index) => (
              <CartItem
                data={e}
                index={index}
                key={String(index) + String(e.id)}
              />
            ))}
            {!!cart.length && (
              <Box position="absolute" bg={bg} w="100%" bottom="0" p="5">
                <Heading>
                  The total price is: $
                  {cart.reduce((acc, curr) => curr.price + acc, 0)}
                </Heading>
                <Button onClick={clearItems}>Clear Cart</Button>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default cart;
