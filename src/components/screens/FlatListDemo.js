import { Text, View, StyleSheet, FlatList } from "react-native";
import React from "react";

const FlatListDemo = () => {
  const names = [
    {
      index: "1",
      name: "danish",
    },
    {
      index: "2",
      name: "ali",
    },
    {
      index: "3",
      name: "mustafa",
    },
    {
      index: "4",
      name: "adil",
    },
    {
      index: "5",
      name: "danish",
    },
    {
      index: "6",
      name: "ali",
    },
    {
      index: "7",
      name: "mustafa",
    },
  ];
  return (
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      // inverted
      // numColumns={2}
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text style={styles.textstyle}>{item.name}</Text>;
      }}
    />
  );
};
// console.log(element.item.name);
// const names = [
//     {
//       index: "1",
//       name: "vinod",
//     },
//     {
//       index: "2",
//       name: "thapa",
//     },
//     {
//       index: "3",
//       name: "bahadur",
//     },
//     {
//       index: "4",
//       name: "technical",
//     },
//     {
//       index: "5",
//       name: "vinod",
//     },
//     {
//       index: "6",
//       name: "technical",
//     },
//     {
//       index: "7",
//       name: "vinod",
//     },
//   ];
const styles = StyleSheet.create({
  textstyle: {
    fontSize: 30,
    padding: 40,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
export default FlatListDemo;
