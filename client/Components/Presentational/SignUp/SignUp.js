import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { Link } from "react-router-native";

import signupPerson from "../../../assets/images/signup-person.gif";

const { width } = Dimensions.get("window"); // Get window dimensions

const SignUp = props => {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: ""
  });
  const [focusInput, setFocusInput] = useState({
    email: true,
    username: false,
    password: false,
    firstName: false,
    middleName: false,
    lastName: false,
    phoneNumber: false
  });
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        scrollEventThrottle={16} // Sends event feedback back as fast as possible
        decelerationRate={0} // Stops scroll instantly
        snapToInterval={width} // Auto snap to center of screen on swipe
        snapToAlignment={"center"} // Snapts boxes to middle of screen
        style={styles.signUpForm}
        keyboardDismissMode={"interactive"}
        keyboardShouldPersistTaps={"never"}
      >
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your email:</Text>
          <TextInput
            returnKeyType="next"
            autofocus={true}
            style={styles.input}
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your username:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your password:</Text>
          <TextInput
            returnKeyType="next"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your first name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your middle name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Middle name"
            name="middleName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your last name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your phone number:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Phone number"
            name="phoneNumber"
            onChange={handleChange}
          />
        </View>
        <View style={styles.btnContainer}>
          <Link to="/" underlayColor={"#0E30F0"} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </Link>
        </View>
      </ScrollView>
      <View style={styles.signupHeader}>
        <Image source={signupPerson} style={styles.signupPerson} />
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
  signupHeader: {
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
    // borderBottomColor: "#4F68F4",
    // borderBottomWidth: 1
  },
  signupPerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 50
  },
  signUpForm: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 150,
    paddingTop: 20,
    height: 100
  },
  signUpFormBox: {
    width: width - 80,
    height: 110,
    marginLeft: 40,
    marginRight: 40
  },
  inputTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 20
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
  btnContainer: {
    alignSelf: "stretch",
    alignContent: "center"
  },
  cancelBtn: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 50
  },
  cancelBtnSelected: {
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
  cancelBtnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default SignUp;
