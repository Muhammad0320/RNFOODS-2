import { Provider } from "react-redux";
import Favourites from "./screens/Favourites";
import MealsDetails from "./screens/MealsDetails";
import MealsOverView from "./screens/MealsOverView";
import MealCategories from "./screens/MealCategories";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: { backgroundColor: "#351401" },
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#ccc",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerActiveBackgroundColor: "#3f2f25",
        drawerInactiveTintColor: "#ccc",
        drawerActiveTintColor: "#ccc",
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
    <Provider>
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
          <Stack.Screen
            name="MealDetails"
            component={MealsDetails}
            options={{ title: "About the meal" }}
          />
          <Stack.Screen name="MealOverview" component={MealsOverView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
