import React, { useContext, useState } from "react";
import { View } from "react-native";
import { useMutation } from "react-query";
import { showMessage } from "react-native-flash-message";
import AuthLogo from "../../assets/loginIcon.png"

// Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Config
import { API, setAuthorization } from "../config/api";
import { UserContext } from "../context/userContext"

//Import Component Native Base
import {
  Box,
  Image,
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
            <Image source={AuthLogo} alt="AuthLogo" />
        </Center>
      </Container>

      <VStack
        justifyContent="center"
        mx="auto"
        w="80"
        space={4}
      >
        <Heading
          marginTop={6}
          color="black"
          style= {{
              fontWeight: "bold",
              fontSize: 27,
          }}
        >
          Login
        </Heading>

        <Input
          borderWidth="1"
          borderColor="muted.400"
          backgroundColor="muted.200"
          color="black"
          _input={{
            fontSize: 15,
          }}
          placeholder="Email"
          keyboardType={"email-address"}
          placeholderTextColor="muted.400"
          py="2"
          onChangeText={(value) => handleChangeText("email", value)}
        />

        <Input
          borderWidth="1"
          borderColor="muted.400"
          backgroundColor="muted.200"
          color="black"
          _input={{
            fontSize: 15,
          }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="muted.400"
          py="2"
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </VStack>

      <Button
        colorScheme="red"
        w="80"
        mx="auto"
        _text={{
          fontSize: 17,
          fontWeight: "bold",
        }}
        marginTop={12}
        py="3"
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