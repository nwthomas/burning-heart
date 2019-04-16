import React, { useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Image
} from "react-native";
import { Store } from "../../store/store";
import { handleLoginForm } from "../../store/actions";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";

const { width } = Dimensions.get("window"); // Get window dimensions

const ManualLogin = props => {
  const { state, dispatch } = useContext(Store);
  const { loginForm } = state;
  const { username, password } = loginForm;
  const handleChange = (name, value) => {
    handleLoginForm(name, value, dispatch);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.loginForm}>
        <View style={styles.loginBox}>
          <Text style={styles.inputTitle}>Enter your username:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Username"
            id="username"
            value={username}
            onChangeText={text => handleChange("username", text)}
          />
        </View>
        <View style={styles.loginBox}>
          <Text style={styles.inputTitle}>Enter your password:</Text>
          <TextInput
            returnKeyType="done"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            id="password"
            value={password}
            onChangeText={text => handleChange("password", text)}
          />
        </View>
      </View>
      <View style={styles.loginHeader}>
        <Text style={styles.loginTitle}>Login</Text>
        <Image source={boomBoxPerson} style={styles.loginPerson} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#ffffff"
  },
  loginHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    marginRight: 40,
    marginLeft: 40,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: 149,
    zIndex: 10
  },
  loginTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  loginPerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  loginForm: {
    marginTop: 170,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  loginBox: {
    width: width - 80,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
  },
  inputTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    width: width - 80,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#cacacf",
    borderRadius: 5,
    height: 45,
    paddingLeft: 5
  },
  loginFormBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 20,
    marginTop: 10
  },
  btnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default ManualLogin;
