import MealCategories from "./screens/MealCategories";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealCategories" component={MealCategories} />
        <Stack.Screen name="MealOverview" component={MealsOverView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
