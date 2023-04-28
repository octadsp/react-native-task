import * as React from "react";

import { Image, View } from 'react-native';

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  Container,
  Center,
  Text,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function LoginForm({ navigation }) {
  return (
    <Box
    flex={1}
    >
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
  placeholder="Email"
  placeholderTextColor="muted.400"
  py="1"
 
  />

  <Input
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Password"
  placeholderTextColor="muted.400"
  py="1"
  />
    </VStack>

          <Button
          colorScheme="red"
          w="72"
          mx="auto"
          marginTop={10}
          py="2"
          onPress={()=> navigation.navigate("Main")}
            >
            Login
          </Button>

          <HStack justifyContent="center" paddingTop="3">
          <Text fontSize="xs" color="muted.700" fontWeight={100} >
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