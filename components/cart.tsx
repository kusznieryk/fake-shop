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
  useDisclosure,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CartItem from "./cartItem";
import { clearCart } from "../app/store/features/cart";
type place = "right" | "bottom";

const cart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const clearItems = () => dispatch(clearCart());
  const [placement, setPlacement] = useState<place>("bottom");

  useEffect(() => {
    setPlacement(window.innerWidth >= 767 ? "right" : "bottom");
  }, []);

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>
        Go To Cart
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
            The elements are...
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
              <Box position="absolute" bottom="5">
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
