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

const cart: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="gray" onClick={onOpen}>
        Go To Cart
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">The elements are...</DrawerHeader>
          <DrawerBody>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default cart;
