import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MealCategories from "./screens/MealCategories";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
