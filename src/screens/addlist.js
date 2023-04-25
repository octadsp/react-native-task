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
    Add List
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

<Select
borderWidth="1"
borderColor="muted.400"
backgroundColor="muted.200"
color="black"
shadow={2}
py="1" 
selectedValue={category} 
minWidth="200" 
accessibilityLabel="Choose Service" 
placeholder="Choose Service"
placeholderTextColor="muted.400"
_selectedItem={{
      bg: "dark",
    }} onValueChange={itemValue => setCategory(itemValue)}>
        <Select.Item shadow={2} label="Study" value="study" />
        <Select.Item shadow={2} label="Home Work" value="homework" />
        <Select.Item shadow={2} label="Workout" value="workout" />
      </Select>

  <Input
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Date"
  placeholderTextColor="muted.400"
  py="1"
 
  />

  <TextArea
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Description"
  h="30%"
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
            Add List
          </Button>

          
      </Box>
   
  );
}