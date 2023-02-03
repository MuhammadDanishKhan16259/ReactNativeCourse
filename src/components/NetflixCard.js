import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflik Card</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://i.pinimg.com/474x/18/ab/d8/18abd81a61bb83cf9815dfda7b472ecc.jpg",
          }}
        />

        <View style={styles.poster__info}>
          <Text style={styles.poster__title}>All of us Dead</Text>

          <Text style={styles.poster__text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
            exercitationem et. Molestias et quas illo quidem distinctio vitae
            cupiditate voluptate doloremque, delectus architecto obcaecati
            reiciendis.
          </Text>
        </View>
        <Button
          title="watch Now "
          onPress={() => Linking.openURL("https://www.netflix.com/pk/")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster__text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgStyle: { width: "100%", height: undefined, aspectRatio: 1 },
  buttonStyle: { borderWidth: 0, borderRadius: 20 },
});

export default NetflixCard;
