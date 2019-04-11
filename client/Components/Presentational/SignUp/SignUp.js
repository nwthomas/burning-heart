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
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16} // Sends event feedback back as fast as possible
        decelerationRate={0} // Stops scroll instantly
        snapToInterval={width} // Auto snap to center of screen on swipe
        snapToAlignment={"center"} // Snapts boxes to middle of screen
        style={styles.signUpForm}
        keyboardDismissMode={"none"}
        keyboardShouldPersistTaps={"always"}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter your email:</Text>
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
          <Text style={styles.inputTitle}>Please enter your username:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter your password:</Text>
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
          <Text style={styles.inputTitle}>Please enter your first name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter your middle name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Middle name"
            name="middleName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter your last name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter your phone number:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Phone number"
            name="phoneNumber"
            onChange={handleChange}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text>Submit</Text>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Link to="/" underlayColor={"#0E30F0"} style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Continue</Text>
        </Link>
      </View>
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
    alignSelf: "stretch",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    height: 149,
    zIndex: 10
  },
  signupPerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 75,
    marginRight: 30,
    height: 70,
    width: 50
  },
  signUpForm: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 150,
    height: 100
  },
  signUpFormBox: {
    width: width - 80,
    height: 150,
    paddingTop: 45,
    marginLeft: 40,
    marginRight: 40,
    borderTopColor: "#4F68F4",
    borderTopWidth: 1
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
    marginBottom: 20
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
