import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TouchID from "react-native-touch-id";

const Login = _ => {
  const [touch, setTouch] = useState(false);
  const [face, setFace] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    TouchID.isSupported()
      .then(biometryType => {
        if (biometryType === "TouchID") {
          // Touch ID is supported on iOS
        } else if (biometryType === "FaceID") {
          // Face ID is supported on iOS
        }
      })
      .catch(err => {
        // User's device is not supported on TouchID (or Face ID)
        // Also triggered if Touch/FaceID is not enabled
      });
  }, []);
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
    backgroundColor: "#ffffff"
  },
  signInText: {
    fontFamily: "Ubuntu-Medium",
    fontSize: 20,
    textAlign: "center"
  }
});

export default Login;
