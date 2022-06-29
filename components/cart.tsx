import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppSelector } from "../app/hooks";

const cart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>
        Go To Cart
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            The elements are...
          </DrawerHeader>
          {cart.map((e) => <h2> {e.title} </h2>)}
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default cart;
