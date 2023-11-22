import { StyleSheet, Text, View } from "react-native";

function MealsOverView({ route }) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text> The meals overview screen - {categoryId} </Text>
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
