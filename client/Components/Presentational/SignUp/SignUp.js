import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  Keyboard
} from "react-native";
import { Link } from "react-router-native";

const { width } = Dimensions.get("window"); // Get window dimensions

const SignUp = props => {
  useEffect(() => {
    // Finish with focus events
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16} // Sends event feedback back as fast as possible
        decelerationRate={0} // Stops scroll instantly
        snapToInterval={width} // Auto snap to center of screen on swipe
        snapToAlignment={"center"} // Snapts boxes to middle of screen
        style={styles.signUpForm}
      >
        <View style={styles.signUpFormBox}>
          <TextInput
            autofocus={true}
            style={styles.input}
            placeholder="Please enter an email"
            name="email"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <TextInput
            style={styles.input}
            placeholder="Please enter a username"
            name="username"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text style={styles.inputTitle}>Please enter a password:</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            name="password"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <TextInput
            style={styles.input}
            placeholder="Please enter a first name"
            name="firstName"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <TextInput
            style={styles.input}
            placeholder="Please enter a middle name"
            name="middleName"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <TextInput
            style={styles.input}
            placeholder="Please enter a last name"
            name="lastName"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <TextInput
            style={styles.input}
            placeholder="Please enter a phone number"
            name="phoneNumber"
          />
        </View>
        <View style={styles.signUpFormBox}>
          <Text>Submit</Text>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <Link to="/" underlayColor={"#0E30F0"} style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
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
    alignSelf: "stretch",
    backgroundColor: "#ffffff"
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
    borderTopWidth: 1,
    borderBottomColor: "#4F68F4",
    borderBottomWidth: 1
  },
  inputTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    width: width - 80,
    fontFamily: "Roboto-Medium",
    fontSize: 16
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
    marginBottom: 39
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
    marginBottom: 25
  },
  cancelBtnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default SignUp;
