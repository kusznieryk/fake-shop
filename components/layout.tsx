import React from "react";
import {
  Box,
  chakra,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Flex,
  IconButton,
  Icon,
  Link,
  HStack,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiOutlineMenu, AiFillGithub } from "react-icons/ai";
import Cart from "../components/cart";

const layout = () => {
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef(null);
  const SponsorButton = (
    <Box
      display={{
        base: "none",
        md: "flex",
      }}
      alignItems="center"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: "gray.200",
        borderColor: "gray.300",
        cursor: "pointer",
      }}
      _active={{
        borderColor: "gray.300",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
    >
      <Cart />
    </Box>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Cart />
      <Link
        isExternal
        aria-label="Go to Choc UI GitHub page"
        href="https://github.com/kusznieryk/fake-shop"
      >
        <Icon
          as={AiFillGithub}
          display="block"
          transition="color 0.2s"
          w="5"
          h="5"
          _hover={{
            color: "gray.600",
          }}
        />
      </Link>
    </VStack>
  );
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack></HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Link
                  isExternal
                  aria-label="Go to Choc UI GitHub page"
                  href="https://github.com/kusznieryk/fake-shop"
                >
                  <Icon
                    as={AiFillGithub}
                    display="block"
                    transition="color 0.2s"
                    w="5"
                    h="5"
                    _hover={{
                      color: "gray.600",
                    }}
                  />
                </Link>
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{
                  base: "0",
                  md: "3",
                }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {SponsorButton}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  );
};

export default layout;
