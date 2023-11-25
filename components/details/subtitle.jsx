import { StyleSheet, Text, View } from "react-native";

function subtitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
}

export default subtitle;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 3,
  },

  text: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
  },
});
