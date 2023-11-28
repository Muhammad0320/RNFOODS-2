function MealsList({ items }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealItem {...item} />}
    />
  );
}

export default MealsList;
