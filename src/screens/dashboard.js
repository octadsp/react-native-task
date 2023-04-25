import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from "@expo/vector-icons"

import HomeScreen from "./home"
import AddListScreen from "./addlist"
import AddCategoryScreen from "./addcategory"
import { useTheme } from 'native-base';

const Tab = createBottomTabNavigator();

export default function DashboardScreen() {
  const theme = useTheme()
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "HomeScreen") {
          iconName = focused ? "list-alt" : "list-alt"
        } else if (route.name === "AddList") {
          iconName = focused ? "playlist-add" : "playlist-add"
        } else if (route.name === "AddCategory") {
          iconName = focused ? "category" : "category"
        }
        return <MaterialIcons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: theme.colors.danger["500"],
      tabBarInactiveTintColor: theme.colors.muted["700"]
    })}
    >
      <Tab.Screen 
      name="HomeScreen" 
      component={HomeScreen}
      options={{
        title: ""
      }}
      />
      <Tab.Screen 
      name="AddList" 
      component={AddListScreen}
      options={{
        title: ""
      }}
      />
      <Tab.Screen 
      name="AddCategory" 
      component={AddCategoryScreen}
      options={{
        title: ""
      }}
      />
    </Tab.Navigator>
  );
}