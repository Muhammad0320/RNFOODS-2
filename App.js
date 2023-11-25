import MealCategories from "./screens/MealCategories";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";
import MealsDetails from "./screens/MealsDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          contentStyle: { backgroundColor: "#3f2f25" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen
          name="MealCategories"
          component={MealCategories}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen name="MealDetails" component={{ MealsDetails }} />
        <Stack.Screen name="MealOverview" component={MealsOverView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
