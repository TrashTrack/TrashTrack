import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import MainPage from "./mainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../background.jpg")}
      resizeMode="cover" // Correct relative path
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../icon.png")} />
        <Text style={{ fontWeight: 600, color: "white" }}>
          Real-Time Trash, Real-Time Track
        </Text>
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("MainPage ")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  startButton: {
    width: "80%", // Full width of the screen
    paddingVertical: 13,
    borderRadius: 20,
    backgroundColor: "orange",
    position: "absolute",
    color: "red",
    bottom: 20, // 20px from the bottom
    alignItems: "center",
  },
  buttonText: {
    color: "white", // Text color
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 180,
    height: 180,
  },
  logoContainer: {
    position: "absolute",
    top: 320,
    alignItems: "center",
  },
});
export default WelcomeScreen;
