import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import { useLogin } from "../features/auth/hooks/useLogin";

export default function Login() {
  const { handleChange, handleSubmit } = useLogin();

  return (
    <Container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      h="100vh"
    >
      <Card p={4} w={"300px"}>
        <Box>
          <Flex justifyContent={"center"}>
            <Heading color="green" my={4}>
              Circle
            </Heading>
            <Image w="35px" ml={1} mt={2} src={logo} />
          </Flex>
        </Box>
        <Text fontWeight="bold" textAlign={"center"}>
          Login Circle Account
        </Text>
        {/* <form
        // onSubmit={formik.handleSubmit}
        > */}
        {/* {isMessage && (
          <Box>
            <Text fontSize={13} textAlign={"center"} textColor={"red"}>
              {isMessage}
            </Text>
          </Box>
        )} */}
        <Flex direction={"column"} gap={2} mt={2}>
          <Input
            borderColor={"black"}
            placeholder="email"
            name="email"
            onChange={handleChange}
            // value={formik.values.email}
          />
          <Input
            borderColor={"black"}
            placeholder="password"
            name="password"
            onChange={handleChange}
            // value={formik.values.password}
          />
        </Flex>
        <Text textAlign={"right"} fontSize="13px" my={1}>
          Forgot password?
        </Text>
        <Button
          w={"full"}
          type="submit"
          onClick={handleSubmit}
          bg={"green"}
          textColor={"white"}
        >
          Login
        </Button>
        <Flex fontSize="13px" mt={1} gap="2px">
          <Text>Don't have an account?</Text>
          <ChakraLink
            as={ReactRouterLink}
            to={"/register"}
            color={"green"}
            textDecoration={"underline"}
          >
            Create Account
          </ChakraLink>
        </Flex>
        {/* </form> */}
      </Card>
    </Container>
  );
}
