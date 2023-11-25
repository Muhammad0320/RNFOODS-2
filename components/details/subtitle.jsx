import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
}

export default Subtitle;

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
