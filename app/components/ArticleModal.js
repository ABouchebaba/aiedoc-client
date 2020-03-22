import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ArticleModal(props) {
  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.bookmark}>Hello World!</Text>
      <Button title="close" onPress={props.closeModal} style={styles.share} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "40%",
    height: "40%",
    flex: 1,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-evenly",
    top: 12,
    right: 2
  },
  bookmark: {
    width: "100%",
    textAlign: "center"
  },
  share: {
    width: "100%"
  }
});

export default ArticleModal;
