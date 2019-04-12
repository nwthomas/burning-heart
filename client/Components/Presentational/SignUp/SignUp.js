import React, { useContext } from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  TouchableHighlight,
  Image
} from "react-native";
import { Link } from "react-router-native";
import { handleSignUpForm } from "../../store/actions";
import { Store } from "../../store/store";
import { createAccount } from "../../store/actions";

import signupPerson from "../../../assets/images/signup-person.gif";

const { width } = Dimensions.get("window"); // Get window dimensions

const SignUp = props => {
  const { state, dispatch } = useContext(Store);
  const { signUpForm } = state;
  const {
    email,
    username,
    password,
    firstName,
    middleName,
    lastName,
    phone
  } = signUpForm;
  const handleChange = (name, value) => {
    handleSignUpForm(name, value, dispatch);
  };
  const createAccount = e => {
    e.preventDefault();
    const userDetails = { ...signUpForm };
    createAccount(userDetails, dispatch); // Stopped working here... Need to finish working out e.preventDefault() bug
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        scrollEventThrottle={16} // Sends event feedback back as fast as possible
        decelerationRate={0} // Stops scroll instantly
        snapToInterval={110} // Auto snap to center of screen on swipe
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
            id="email"
            value={email}
            onChangeText={text => handleChange("email", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your username:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Username"
            id="username"
            value={username}
            onChangeText={text => handleChange("username", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your password:</Text>
          <TextInput
            returnKeyType="next"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            id="password"
            value={password}
            onChangeText={text => handleChange("password", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your first name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="First name"
            id="firstName"
            value={firstName}
            onChangeText={text => handleChange("firstName", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your middle name:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Middle name"
            id="middleName"
            value={middleName}
            onChangeText={text => handleChange("middleName", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your last name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            id="lastName"
            value={lastName}
            onChangeText={text => handleChange("lastName", text)}
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Enter your phone number:</Text>
          <TextInput
            returnKeyType="next"
            style={styles.input}
            placeholder="Phone number"
            id="phone"
            value={phone}
            onChangeText={text => handleChange("phone", text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight
            underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
            onPress={createAccount}
            style={styles.submitBtn}
          >
            <Text style={styles.btnText}>Submit</Text>
          </TouchableHighlight>
          <Link to="/" underlayColor={"#0E30F0"} style={styles.cancelBtn}>
            <Text style={styles.btnText}>Cancel</Text>
          </Link>
        </View>
      </ScrollView>
      <View style={styles.signupHeader}>
        <Text style={styles.signupTitle}>Sign Up</Text>
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
  signupTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
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
  btnContainer: {
    alignSelf: "stretch",
    alignContent: "center"
  },
  submitBtn: {
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
    marginBottom: 60
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
  btnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default SignUp;
