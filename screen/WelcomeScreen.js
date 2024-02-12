import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text style={{ backgroundColor: "black" }}>Welcome</Text>
        <Pressable onPress={() => navigation.navigate("EyeHealth")}>
          <Text>press</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
