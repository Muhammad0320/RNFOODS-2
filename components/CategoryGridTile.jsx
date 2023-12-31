import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress, id }) {
  const handlePress = () => {
    onPress(id);
  };

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={[
          ({ pressed }) => (pressed ? styles.pressIos : null),
          styles.button,
        ]}
        android_ripple={{ color: "#ddd" }}
        onPress={handlePress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.gridText}> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 5,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  container: {
    flex: 1,
  },

  pressIos: {
    opacity: 0.6,
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  gridText: {
    fontWeight: "600",
    fontSize: 18,
  },
});
