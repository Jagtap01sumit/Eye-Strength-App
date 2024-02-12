import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Button } from "react-native";
import PieChart from "react-native-pie-chart";

export default function EyeHealth() {
  const widthAndHeight = 200;
  const series = [123, 321, 123];
  const sliceColor = ["#ff6c00", "#ff3c00", "#ff9100"];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Text style={styles.title}>Eye Strain</Text>
        <View style={styles.container}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
          <View>
            <View style={{ display: "flex" }}>
              <View style={styles.recMain1}>
                <View style={styles.rectangle1}></View>
                <View></View>
                <Text>Entertainment</Text>
              </View>
              <View style={styles.recMain2}>
                <View style={styles.rectangle2}></View>
                <View></View>
                <Text>Game</Text>
              </View>
              <View style={styles.recMain3}>
                <View style={styles.rectangle3}></View>
                <View></View>
                <Text>Study</Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "black",
            borderStyle: "dotted",
            borderWidth: 0.4,
            margin: 10,
            height: 1,
          }}
        />
        <Text style={styles.title}>Stress Management</Text>
        <View style={styles.container}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
          <View>
            <View style={{ display: "flex" }}>
              <View style={styles.recMain1}>
                <View style={styles.rectangle1}></View>
                <View></View>
                <Text>Medium</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 40,
                  marginBottom: 7,
                }}
              >
                <View style={styles.rectangle2}></View>
                <View></View>
                <Text>Low</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 40,
                  marginBottom: 7,
                }}
              >
                <View style={styles.rectangle3}></View>
                <View></View>
                <Text>High</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "start",

    margin: 10,
  },

  recMain1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 40,
  },
  recMain2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 40,
    marginRight: 43,
  },
  recMain3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7,
    marginLeft: 40,
    marginRight: 43,
  },
  rectangle1: {
    height: 25,
    width: 25,
    backgroundColor: "#ff6c00",
    marginRight: 6,
  },
  rectangle2: {
    height: 25,
    width: 25,
    backgroundColor: "#ff3c00",
    marginRight: 6,
  },
  rectangle3: {
    height: 25,
    width: 25,
    backgroundColor: "#ff9100",
    marginRight: 6,
  },
  title: {
    fontSize: 38,
    margin: 10,
    color: "#555b66",
    fontWeight: "bold",
    marginLeft: 20,
  },
});
