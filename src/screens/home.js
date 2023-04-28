import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { View, Platform, Pressable} from "react-native";
import { showMessage } from "react-native-flash-message";
import ProfileImg from "../../assets/profile1.jpg"

// Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Config
import { API } from "../config/api"
import {
  Box,
  Heading,
  Badge,
  Spacer,
  Flex,
  Image,
  Container,
  Avatar,
  Text,
  VStack,
  Input,
  HStack,
  Select,
  CheckIcon,
  FlatList,
} from "native-base";
import { useQuery } from "react-query";


export default function IndexHome() {
  const [state, dispatch] = useContext(UserContext);

  const [listTodo, setListTodo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  let [category, setCategory] = useState("")
  let [status, setStatus] = useState("")

  let { data : todolist } = useQuery("listTodoCache", async () => {
    const response = await API.get("/todolist?$lookup=*");
    setListTodo(response.data);
    setIsLoading(false);
  })

  function handleLogout() {
    AsyncStorage.removeItem("token");
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    showMessage({
      message: "Logout Success!",
      type: "success"
    });
  }

  return (
    <Box flex={1} px={2} mx="auto" paddingTop={"3"} >

      <VStack
        marginTop="5"
        justifyContent="center"
        mx="auto"
        w="80"
        space={5}
      >

      <HStack justifyContent="space-between" alignItems="center">
        <VStack alignItems="flex-start">
          <Heading
          marginTop={6}
          alignItems="center"
          color="black"
          style= {{
            fontSize: 22,
            fontWeight: "bold"
          }}
          >
            Hi Octa Ganteng
          </Heading>
          <Text color="red.400" alignItems="center">200 Lists</Text>
        </VStack>

        <Pressable
        onPress={handleLogout}
        >
          <Avatar
            size="lg"
            source={ProfileImg}
            >
          </Avatar>
        </Pressable>
      </HStack>

      <Input
        color="black"
        borderWidth="1"
        borderColor="muted.400"
        _input={{
          fontSize: 13,
        }}
        backgroundColor="muted.200"
        placeholder="Search List....."
        placeholderTextColor="muted.400"
        py="2"
      />

      <HStack 
        space={3} 
        alignItems={"center"} 
        justifyContent={"center"} 
      >
        <Input
        size="sm"
        borderWidth="1"
        borderColor="muted.400"
        backgroundColor="muted.200"
        placeholder="Date"
        placeholderTextColor="muted.400"
        py="2"
        w={"24"}
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
            w={"30"}
            py="2" 
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
            py="2"
            w={24}
            px="2"
            selectedValue={status} 
            minWidth="90" 
            accessibilityLabel="Choose Service" 
            placeholder="Status"
            placeholderTextColor="muted.400"
            _selectedItem={{
              bg: "dark",
              }} 
            onValueChange={itemValue => setStatus(itemValue)}>
              <Select.Item shadow={2} label="Done" value="done" />
              <Select.Item shadow={2} label="On Progres" value="onprogress" />
          </Select>
      </HStack>

      <FlatList 
        data={listTodo}
        renderItem={({ item }) => 
        {
          return(
            <Pressable>
              <View>
                <Text color={"black"}>{item.title}</Text>
              </View>
            </Pressable>
          )
        }
        }
      />

    </VStack>

</Box>
   
  );
}