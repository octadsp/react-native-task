import * as React from "react";
import WaysTodoImage from "../../assets/imgIndex.png";
import WaysTodo from "../../assets/logoIndex.png";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Image,
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
        <Image 
          source={WaysTodoImage} 
          width={270}  
          height={270}
          alt="WaysTodoImage"
        />
        <Image 
          source={WaysTodo}
          alt="WaysTodo"
        />
          <Center>
            <Text 
              marginTop={7}
              color="black" 
              fontSize="13" 
              style={{
                textAlign: 'justify',
                }}>
                Write your activity and finish your activity.
            </Text>
            <Text 
              marginBottom={10}
              color="black" 
              fontSize="13" 
              style={{
                textAlign: 'justify',
                }}>
                Fast, Simple and Easy to Use
            </Text>
          </Center>
      </Center>

      <VStack space={3} mt={5}>
        <Button 
          colorScheme="red"
          _text={{ 
            color: "white",
            fontSize: "18",
            fontWeight:"bold", 
            px: "32"
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
            fontSize: "18", 
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