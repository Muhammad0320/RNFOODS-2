import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ title, affordability, complexity, imageUrl, duration }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressIos : null)}
        android_ripple={{ color: "#f1f1f1" }}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}> {title} </Text>
          <View style={styles.detailContainer}>
            <Text> {duration}m </Text>
            <Text> {complexity.toUpperCase()} </Text>
            <Text> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",

    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 16,
  },

  textContainer: {
    marginVertical: 8,
    marginHorizontal: 15,
  },

  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },

  pressIos: { opacity: 0.75 },

  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },

  detailContainer: {
    flexDirection: "row",
    columnGap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
