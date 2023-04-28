import React, { useContext, useState } from "react";
import { Image, View } from "react-native";
import { useMutation } from "react-query";
import { showMessage } from "react-native-flash-message";

// Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Config
import { API, setAuthorization } from "../config/api";
import { UserContext } from "../context/userContext"

//Import Component Native Base
import {
  Box,
  Heading,
  Container,
  Center,
  Text,
  VStack,
  Input,
  Link,
  Button,
  HStack,
} from "native-base";

export default function LoginForm({ navigation }) {
  const [state, dispatch] = useContext(UserContext);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })

  function handleChangeText(name, value) {
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  }

  const handleSubmit = useMutation(async (e) => {
    e.persist();
    try {
      const response = await API.post("/auth/login", formLogin);
      AsyncStorage.setItem("token", response.data.token);

      const payload = response.data;
      showMessage({
        message: "Login Success!",
        type: "success",
      });
      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
      });

      setAuthorization(response.data.token);

      // If Login Success
      navigation.navigate("Main");
    } catch (error) {
      showMessage({
        message: "Email or password not match, please try again!",
        type: "danger"
      });
    }
  });

  return (
    <Box flex={1} >
      <Container
        marginTop={10}
        mx="auto"
      >
        <Center>
            <Image source={require('../../assets/loginIcon.png')} size="sm" />
        </Center>
      </Container>

      <VStack
        justifyContent="center"
        mx="auto"
        w="72"
        space={4}
      >
        <Heading
          marginTop={6}
          color="black"
          style= {{
              fontWeight: "bold"
          }}
        >
          Login
        </Heading>

        <Input
          borderWidth="1"
          borderColor="muted.400"
          backgroundColor="muted.200"
          color="black"
          placeholder="Email"
          keyboardType={"email-address"}
          placeholderTextColor="muted.400"
          py="1"
          onChangeText={(value) => handleChangeText("email", value)}
        />

        <Input
          borderWidth="1"
          borderColor="muted.400"
          backgroundColor="muted.200"
          color="black"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="muted.400"
          py="1"
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </VStack>

      <Button
        colorScheme="red"
        w="72"
        mx="auto"
        marginTop={10}
        py="2"
        onPress={(e) => handleSubmit.mutate(e)}
      >
        Login
      </Button>

      <HStack justifyContent="center" paddingTop="3">
        <Text 
          fontSize="xs" 
          color="muted.700" 
          fontWeight={100} 
        >
          New Users ?{" "}
        </Text>

        <Link
          colorScheme="red"
          _text={{ 
            color: "danger.600", 
            fontWeight: "bold", 
            fontSize: "xs", 
            textDecoration: "none",
            }}
          onPress={()=> navigation.navigate("RegisterForm")}
        >
          Register
        </Link>
      </HStack>

    </Box>
   
  );
}