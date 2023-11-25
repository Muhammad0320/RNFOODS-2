import { StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.container}>
      <Text style={styles.text} key={dataPoint}>
        {" "}
        {dataPoint}{" "}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    // marginHorizontal: 12,
    marginVertical: 6,
  },

  text: {
    backgroundColor: "#e3b4a7",
    color: "#351401",
    fontSize: 15,
    textAlign: "center",
  },
});
