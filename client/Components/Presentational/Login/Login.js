import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Vibration
} from "react-native";
import { Link } from "react-router-native";
import TouchID from "react-native-touch-id";

import fireGif from "../../../assets/images/fire.gif";

const Login = ({ setLoggedIn, history }) => {
  const [loginSelected, setLoginSelected] = useState(false);
  const [manualLoginSelected, setManualLoginSelected] = useState(false);
  const [biometryType, setBiometryType] = useState("");
  const optionalConfigObject = {
    fallbackLabel: "Show Passcode",
    unifiedErrors: true,
    passcodeFallback: true
  };
  // Automatically run login on component mount
  useEffect(() => {
    runBiometricLogin();
  }, []);
  // Biometric login via TouchID package that returns promise
  const runBiometricLogin = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === "FaceID") {
          // Case with FaceID
          setBiometryType(biometryType);

          TouchID.authenticate("Unlock with your fingerprint")
            .then(success => {
              setLoggedIn(true);
            })
            .catch(err => {
              setLoginSelected(false);
              setManualLoginSelected(false);
            });
        } else {
          // Case with TouchID
          setBiometryType(biometryType);

          TouchID.authenticate("Unlock with your fingerprint")
            .then(success => {
              setLoggedIn(true);
            })
            .catch(err => {
              setLoginSelected(false);
              setManualLoginSelected(false);
            });
        }
      })
      .catch(err => {
        // Edge case fallback for manual log in
        setLoginSelected(false);
        setManualLoginSelected(false);
      });
  };
  const bioLoginApp = e => {
    e.preventDefault();
    Vibration.vibrate(); // Rumble on press
    setLoginSelected(true); // Change button color
    runBiometricLogin(); // Begin TouchID/FaceID process
  };
  const manualLoginApp = e => {
    e.preventDefault();
    setManualLoginSelected(true);
    history.push("/manual-login");
  };
  return (
    <View style={styles.container}>
      <Image source={fireGif} style={styles.burningHeartGif} />
      <View style={styles.btnContainer}>
        <TouchableHighlight
          underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
          onPress={bioLoginApp}
          style={loginSelected ? styles.loginBtnSelected : styles.loginBtn}
        >
          <Text style={styles.loginBtnText}>Login With {biometryType}</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
          onPress={manualLoginApp}
          style={
            manualLoginSelected ? styles.loginBtnSelected : styles.loginBtn
          }
        >
          <Text style={styles.loginBtnText}>Login with Passcode</Text>
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
  burningHeartGif: {
    height: 150,
    width: 150,
    marginLeft: 5,
    marginBottom: 150
  },
  btnContainer: {
    alignSelf: "stretch",
    alignContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30
  },
  loginBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 20
  },
  loginBtnSelected: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F070", // Last two numbers indicate opacity
    backgroundColor: "#0E30F070", // Last two numbers indicate opacity
    marginBottom: 20
  },
  loginBtnText: {
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
