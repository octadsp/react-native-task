import React, { useState} from "react";
import { Image, View } from "react-native";
import { useMutation } from "react-query";
import { showMessage } from "react-native-flash-message";

// Config
import { API } from "../config/api";

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

export default function RegisterForm({ navigation }) {
  const [formRegister, setFormRegister] = useState({
    email: "",
    firstName: "",
    password: "",
  });

  function handleChangeText(name, value) {
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  }

  const handleSubmit = useMutation(async (e) => {
    try {

      // Pengecekan Email Not Null
      if (
        formRegister.email.trim() === "" ||
        formRegister.email.trim() === null
      ) {
        return showMessage({
          message: "Register Failed",
          description: "Email address cannot be empty!",
          type: "danger",
        });
      }

      // Pengecekan Name Not Null
      if (
        formRegister.firstName.trim() === "" ||
        formRegister.firstName.trim() === null
      ) {
        return showMessage({
          message: "Register Failed",
          description: "Name cannot be empty!",
          type: "danger",
        });
      }

      // Pengecekan Password
      if (formRegister.password === "" || formRegister.password === null) {
        return showMessage({
          message: "Register gagal!",
          description: "Password tidak boleh kosong!",
          type: "danger",
        });
      }

      // Push form register
      const response = await API.post(
        "/auth/register", {
          email: formRegister.email.trim(),
          firstName: formRegister.firstName.trim(),
          password: formRegister.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (response.status >= 400) {
        return showMessage({
          message: "Register Failed",
          description: `${response.data.message}`,
          type: "danger",
        });
      }

      setFormRegister({
        email: "",
        firstName: "",
        password: "",
      })
      // Message if Success
      showMessage({
        message: "Register success!",
        type: "success"
      })

      // Navigate if success
      navigation.navigate("LoginForm");

    } catch (error) {
      // Second change to catch a error
      showMessage({
        message: "Register Failed!",
        description: `${error}`,
        type: "danger",
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
            <Image 
              source={require('../../assets/loginIcon.png')} 
              size="sm" 
            />
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
          Register
        </Heading>

        <Input
          borderWidth="1"
          color="black"
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Email"
          placeholderTextColor="muted.400"
          py="1"
          keyboardType={"email-address"}
          onChangeText={(value) => handleChangeText("email", value)}
          value={formRegister?.email}
        />

        <Input
          borderWidth="1"
          color="black"
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Name"
          placeholderTextColor="muted.400"
          py="1"
          onChangeText={(value) => handleChangeText("firstName", value)}
          value={formRegister?.firstName}
        />

        <Input
          borderWidth="1"
          color="black"
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Password"
          placeholderTextColor="muted.400"
          py="1"
          secureTextEntry={true}
          onChangeText={(value) => handleChangeText("password", value)}
          value={formRegister?.password}
        />

      </VStack>

          <Button
            colorScheme="red"
            w="72"
            mx="auto"
            marginTop={5}
            py="2"
            onPress={(e) => handleSubmit.mutate(e)}
          >
            Register
          </Button>

          <HStack justifyContent="center" paddingTop="3">
            <Text fontSize="xs" color="muted.700" fontWeight={100} >
              Join us before ?{" "}
            </Text>
            <Link
              colorScheme="red"
              _text={{ 
                  color: "danger.600", 
                  fontWeight: "bold", 
                  fontSize: "xs", 
                  textDecoration: "none",
              }}
              onPress={()=> navigation.navigate("LoginForm")}
            >
              Login
            </Link>
        </HStack>
      </Box>
   
  );
}