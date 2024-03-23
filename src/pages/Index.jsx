import React from "react";
import { Box, Flex, Heading, FormControl, FormLabel, Input, Checkbox, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const Index = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"blue.800"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack align={"center"} mb={8}>
            <Heading fontSize={"4xl"} fontWeight={"bold"}>
              SCU LOGIN
            </Heading>
            <Heading fontSize={"xl"}>Sign-In</Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" placeholder="Enter your username" rounded={"full"} icon={<FaUser />} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" rounded={"full"} icon={<FaLock />} />
            </FormControl>
            <Stack spacing={10}>
              <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                rounded={"full"}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Index;
