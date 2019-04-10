import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableHighlight
} from "react-native";
import { Link } from "react-router-native";
import TouchID from "react-native-touch-id";

const Login = ({ setLoggedIn }) => {
  const [signInSelected, setSignInSelected] = useState(false);
  const [signUpSelected, setSignUpSelected] = useState(false);
  // const optionalConfigObject = {
  //   fallbackLabel: "Show Passcode",
  //   unifiedErrors: false,
  //   passcodeFallback: true
  // };
  // const handlePress = e => {
  //   e.preventDefault();
  //   TouchID.isSupported(optionalConfigObject)
  //     .then(biometryType => {
  //       if (biometryType === "FACEID") {
  //         Alert.alert("FaceID is supported.");
  //       } else {
  //         Alert.alert("TouchID is supported.");
  //       }
  //     })
  //     .catch(error => {
  //       Alert.alert("Authentication Failed");
  //     });
  // };
  const loginApp = e => {
    e.preventDefault();
    setSignInSelected(true);
    setLoggedIn(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableHighlight
          underlayColor={"#0E30F0"}
          onPress={loginApp}
          style={signInSelected ? styles.signInBtnSelected : styles.signInBtn}
        >
          <Text style={styles.signInBtnText}>Sign In</Text>
        </TouchableHighlight>
        <Link to="/signup" style={styles.signUpLink}>
          <Text style={styles.signUpLinkText}>Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  btnContainer: {
    alignSelf: "stretch",
    alignContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 60
  },
  signInBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 25
  },
  signInBtnSelected: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F070", // Last two numbers indicate opacity
    backgroundColor: "#0E30F070", // Last two numbers indicate opacity
    marginBottom: 25
  },
  signInBtnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  },
  signUpLink: {
    alignSelf: "center"
  },
  signUpLinkText: {
    color: "#000000",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default Login;
