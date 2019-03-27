import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Login = _ => {
  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Please sign in.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9eeef"
  },
  signInText: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 20,
    textAlign: "center"
  }
});

export default Login;
