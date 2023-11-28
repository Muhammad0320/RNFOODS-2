import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/test-data";
import MealsInfo from "../components/MealsInfo";
import Subtitle from "../components/details/subtitle";
import List from "../components/details/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useFavouriteContext } from "../store/context/FavouriteContext";

function MealsDetails({ route, navigation }) {
  const { id } = route.params;

  const {
    affordability,
    complexity,
    duration,
    ingredients,
    steps,
    title,
    imageUrl,
  } = MEALS.find((meals) => meals.id === id);

  const { ids, addFavorite, removeFavorite } = useFavouriteContext();

  const mealIsFavorite = ids.includes(id);

  const handleIconButtonPress = () => {
    if (mealIsFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          size={24}
          color={"white"}
          onPress={handleIconButtonPress}
        />
      ),
    });
  }, [handleIconButtonPress, navigation]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}> {title} </Text>

      <MealsInfo
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        style={styles.info}
      />

      <View style={styles.listContainerOuter}>
        <View style={styles.listContainerInner}>
          <Subtitle> Ingredients </Subtitle>

          <List data={ingredients} />

          <Subtitle> Steps </Subtitle>

          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetails;

const styles = StyleSheet.create({
  root: {
    marginBottom: 25,
  },

  image: {
    width: "100%",
    height: 350,
  },

  listContainerOuter: {
    justifyContent: "center",
    alignItems: "center",
  },

  listContainerInner: {
    width: "80%",
  },

  info: {
    color: "white",
    marginVertical: 10,
  },

  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
});
