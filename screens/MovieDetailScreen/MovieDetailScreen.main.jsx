import React, { Fragment } from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  console.log(route.params.item.posterurl)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <Image
          style={styles.cellImage}
          source={{ uri: route.params.item.posterurl }}
        ></Image>
        <Text style={styles.h1}>{route.params.item.title}</Text>
        <Text style={styles.h3}>Released: {route.params.item.releaseDate}</Text>
        <Text style={styles.h3}>{route.params.item.genres.join(", ").trimEnd()}</Text>
        <Text style={styles.h3}>{route.params.item.actors.join(", ").trimEnd()}</Text>
        <Text style={styles.h2}>{route.params.item.storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
