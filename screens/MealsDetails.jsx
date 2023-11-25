import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/test-data";
import MealsInfo from "../components/MealsInfo";
import Subtitle from "../components/details/subtitle";
import List from "../components/details/List";

function MealsDetails({ route }) {
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
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
