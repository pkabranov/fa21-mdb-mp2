import React, { Fragment } from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const { title, actors, storyline, genres, releaseDate, posterurl } =
    route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
        <Image style={styles.Image} source={{ uri: posterurl }}></Image>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.h3}>{releaseDate.substring(0, 4)}</Text>
        <Text style={styles.h3}>{genres.join(", ")}</Text>
        <Text style={styles.h3}>{actors.join(", ")}</Text>
        <Text style={styles.h2}>{storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
