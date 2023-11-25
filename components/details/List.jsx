import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.container} key={dataPoint}>
      <Text style={styles.text}> {dataPoint} </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },

  text: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: "#e3b4a7",
    color: "#351401",
    fontSize: 15,

    borderRadius: 4,

    textAlign: "center",
  },
});
