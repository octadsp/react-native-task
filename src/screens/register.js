import React, { useState} from "react";
import { View } from "react-native";
import { useMutation } from "react-query";
import { showMessage } from "react-native-flash-message";
import AuthLogo from "../../assets/loginIcon.png"

// Config
import { API } from "../config/api";

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
        <Center
        >
            <Image 
              source={AuthLogo}
              alt="AuthLogo"
            />
        </Center>
      </Container>

      <VStack
        justifyContent="center"
        mx="auto"
        width={"80"}
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
          Register
        </Heading>

        <Input
          borderWidth="1"
          color="black"
          fontSize={14}
          _input={{
            fontSize: 15,
          }}
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Email"
          placeholderTextColor="muted.400"
          py="2"
          keyboardType={"email-address"}
          onChangeText={(value) => handleChangeText("email", value)}
          value={formRegister?.email}
        />

        <Input
          borderWidth="1"
          color="black"
          fontSize={14}
          _input={{
            fontSize: 15,
          }}
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Name"
          placeholderTextColor="muted.400"
          py="2"
          onChangeText={(value) => handleChangeText("firstName", value)}
          value={formRegister?.firstName}
        />

        <Input
          borderWidth="1"
          color="black"
          fontSize={14}
          _input={{
            fontSize: 15,
          }}
          borderColor="muted.400"
          backgroundColor="muted.200"
          placeholder="Password"
          placeholderTextColor="muted.400"
          py="2"
          secureTextEntry={true}
          onChangeText={(value) => handleChangeText("password", value)}
          value={formRegister?.password}
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
            marginTop={8}
            py="3"
            onPress={(e) => handleSubmit.mutate(e)}
          >
            Register
          </Button>

          <HStack justifyContent="center" paddingTop="3">
            <Text fontSize="sm" color="muted.700" fontWeight={100} >
              Join us before ?{" "}
            </Text>
            <Link
              colorScheme="red"
              _text={{ 
                  color: "danger.600", 
                  fontWeight: "bold", 
                  fontSize: "sm", 
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