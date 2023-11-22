import MealCategories from "./screens/MealCategories";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="MealCategories"
          component={MealCategories}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen name="MealOverview" component={MealsOverView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
