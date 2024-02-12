import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function DigitalWellbeing() {
  return (
    <View>
      <View style={styles.iconContainer}>
        <FontAwesome name="whatsapp" size={98} color="#25D366" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Whatsapp</Text>
          <View style={[styles.line, { width: "80%" }]}></View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Entypo name="instagram" size={80} color="#C13584" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Instagram</Text>
          <View style={[styles.line, { width: "70%" }]}></View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Entypo name="facebook" size={80} color="#1877F2" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Facebook</Text>
          <View style={[styles.line, { width: "70%" }]}></View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Entypo name="youtube" size={80} color="#FF0000" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Youtube</Text>
          <View style={[styles.line, { width: "70%" }]}></View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Entypo name="game-controller" size={80} color="#3498DB" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Game Controller</Text>
          <View style={[styles.line, { width: "80%" }]}></View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <FontAwesome name="snapchat-square" size={80} color="#FFEA00" />
        <View style={styles.otherline}>
          <Text style={styles.textStyle}>Snapchat</Text>
          <View style={[styles.line, { width: "60%" }]}></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingLeft: 15,
    margin: 8,
  },
  textStyle: {
    paddingLeft: 23,
    fontSize: 23,
    fontWeight: "bold",
  },
  otherline: {
    flexDirection: "column",
  },
  line: {
    borderBottomWidth: 4,
    width: "40%", // Adjust the width as needed
    marginVertical: 10,
    alignSelf: "center",
    marginTop: 13,
    marginLeft:12,
  },
});
