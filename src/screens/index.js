import * as React from "react";

import { Image, View } from 'react-native';

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Container,
  Center,
  Text,
  Heading,
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

export default function IndexHome({ navigation }) {
  return (
    <Container
    flex={1}
    justifyContent="center"
    alignItems="center"
    mx="auto"
    marginBottom={10}
    >
  <Center>
      <Image source={require('../../assets/imgIndex.png')} size="sm" />
      <Image source={require('../../assets/logoIndex.png')} size="lg"/>
      <View style={{
        width: 230,
        alignItems: "center"
      }}>
      <Text 
      marginTop={7}
      color="black" 
      fontSize="11" 
      style={{
        textAlign: 'justify',
        }}>
      Write your activity and finish your activity.
      </Text>
      <Text 
      marginBottom={10}
      color="black" 
      fontSize="11" 
      style={{
        textAlign: 'justify',
        }}>
      Fast, Simple and Easy to Use
      </Text>
      </View>
  </Center>

      <VStack space={3} mt={5}>

          <Button 
          colorScheme="red" 
          _text={{ 
            color: "white", 
            fontWeight:"bold", 
            px: 24 
            }}
            onPress={()=> navigation.navigate('LoginForm')}
            >
            Login
          </Button>
          <Button 
          px={30} 
          colorScheme="dark" 
          _text={{ 
            color: "white", 
            fontWeight:"bold" 
            }}
            onPress={()=> navigation.navigate('RegisterForm')}
            >
            Register
          </Button>
      </VStack>

    </Container>
  );
}