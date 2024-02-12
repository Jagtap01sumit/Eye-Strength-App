import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const onPressLearnMore = () => {
    // Navigate to the home page (replace 'Home' with the name of your home screen)
    navigation.navigate('distance');
  };

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
  textStyle: {
    fontSize: 21,
    marginTop: 24,
  },
  mintextStyle: {
    fontSize: 18,
    marginTop: 14,
    marginBottom: 12,
  },
  buttonStyle: {
    height:50,
    width:160,
    backgroundColor: "#841584",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
});
