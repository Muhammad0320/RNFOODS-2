import MealCategories from "./screens/MealCategories";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverView from "./screens/MealsOverView";
import MealsDetails from "./screens/MealsDetails";
import Favourites from "./screens/Favourites";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={MealCategories}
        options={{ title: "All Categories" }}
      />
      <Drawer.Screen name="Favourite" component={Favourites} />
    </Drawer.Navigator>
  );
};

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
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MealDetails" component={MealsDetails} />
        <Stack.Screen name="MealOverview" component={MealsOverView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
