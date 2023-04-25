import * as React from "react";

import { Image, View, Platform } from 'react-native';


//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Heading,
  Container,
  Avatar,
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
  CheckIcon,
} from "native-base";


export default function IndexHome() {
  
  let [category, setCategory] = React.useState("")
  let [status, setStatus] = React.useState("")


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

<HStack justifyContent="space-between" alignItems="center">

  <VStack>
    <Heading
    marginTop={6}
    color="black"
    style= {{
      fontSize: 22,
      fontWeight: "bold"
    }}
    >
      Hi Octa Ganteng
    </Heading>
    <Text color="red.400">200 Lists</Text>
  </VStack>

  <Avatar
    size="md"
    source={require('../../assets/profile1.jpg')}
  >
  </Avatar>


</HStack>

  <Input
  color="black"
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Search List....."
  placeholderTextColor="muted.400"
  py="1"
  />

  <HStack
  space={2}
  >

  <Input
  size="xs"
  borderWidth="1"
  borderColor="muted.400"
  backgroundColor="muted.200"
  placeholder="Date"
  placeholderTextColor="muted.400"
  py="1"
  px="10"
 
  />

    <Select
    size="xs"
    variant="unstyled"
    borderWidth="1"
    borderColor="muted.400"
    backgroundColor="muted.200"
    color="black"
    shadow={2}
    px="2"
    py="1" 
    selectedValue={category} 
    minWidth="100" 
    accessibilityLabel="Choose Service" 
    placeholder="Category"
    placeholderTextColor="muted.400"
    _selectedItem={{
          bg: "dark",
          endIcon: <CheckIcon size="2" />
        }} onValueChange={itemValue => setCategory(itemValue)}>
            <Select.Item shadow={2} label="Study" value="study" />
            <Select.Item shadow={2} label="Home Work" value="homework" />
            <Select.Item shadow={2} label="Workout" value="workout" />
    </Select>

    <Select
    size="xs"
    variant="unstyled"
    borderWidth="1"
    borderColor="muted.400"
    backgroundColor="muted.200"
    color="black"
    shadow={2}
    py="1"
    px="2"
    selectedValue={status} 
    minWidth="90" 
    accessibilityLabel="Choose Service" 
    placeholder="Status"
    placeholderTextColor="muted.400"
    _selectedItem={{
          bg: "dark",
        }} onValueChange={itemValue => setStatus(itemValue)}>
            <Select.Item shadow={2} label="Done" value="done" />
            <Select.Item shadow={2} label="On Progres" value="onprogress" />
    </Select>
  </HStack>

</VStack>

</Box>
   
  );
}