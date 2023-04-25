import * as React from "react";

import { Image, View, Platform } from 'react-native';


//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  Container,
  TextArea,
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
  Select,
  Pressable,
} from "native-base";


export default function IndexHome() {
  
  let [category, setCategory] = React.useState("")


  return (
    <Box
    flex={1}
    >
    <Container
    marginTop={5}
    mx="auto"
    >

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
    Add Category
  </Heading>

  <Input
  color="black"
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Name"
  placeholderTextColor="muted.400"
  py="1"
  />
    </VStack>

  <Button
    colorScheme="red"
    w="72"
    mx="auto"
    marginTop={5}
    py="2"
  >
    Add Category
  </Button>

  <VStack
    justifyContent="center"
    marginTop="16"
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
    List Category
  </Heading>

  <HStack
  space={1}
  >
    <Button
    variant="subtle"
      px={4}
      py={1}
      rounded={10}
    >
      <Text
        color="white"
        fontSize={12}
      >
        Study
      </Text>
    </Button>
    <Button
    variant="subtle"
    backgroundColor="red.400"
      px={3}
      py={1}
      rounded={10}
    >
      <Text
        color="white"
        fontSize={12}
      >
        Home Work
      </Text>
    </Button>
    <Button
    backgroundColor="orange.300"
      px={3}
      py={1}
      rounded={10}
    >
      <Text
        color="white"
        fontSize={12}
      >
        Workout
      </Text>
    </Button>
  </HStack>
    </VStack>
</Box>
   
  );
}