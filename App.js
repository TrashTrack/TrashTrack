import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/assets/screens/welcomeScreen";
import SignupPage from "./app/assets/screens/signupPage";
import MainPage from "./app/assets/screens/mainPage";
export default function App() {
  return <WelcomeScreen />;
}
