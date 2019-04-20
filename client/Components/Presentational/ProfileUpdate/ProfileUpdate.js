import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image
} from "react-native";
import { Link } from "react-router-native";
import { Store } from "../../store/store";
import { updateUserAccount, handleUpdateForm } from "../../store/actions";

import updatePerson from "../../../assets/images/signup-person.gif"; // Replace

const { width } = Dimensions.get("window");

const ProfileUpdate = props => {
  const { state, dispatch } = useContext(Store);
  const {
    updateAccount,
    newPassword,
    token,
    updateAccountStart,
    updateAccountSuccess,
    updateAccountError
  } = state;
  const {
    id,
    email,
    firstName,
    middleName,
    lastName,
    phone,
    username
  } = updateAccount;
  const handleUpdateAccount = e => {
    e.preventDefault();
    updateUserAccount(updateAccount, id, token, dispatch);
  };
  const handleChange = (name, value) => {
    handleUpdateForm(name, value, dispatch);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        scrollEventThrottle={16} // Sends event feedback back as fast as possible
        decelerationRate={0} // Stops scroll instantly
        snapToInterval={110} // Auto snap to center of screen on swipe
        snapToAlignment={"center"} // Snapts boxes to middle of screen
        style={styles.updateForm}
        keyboardDismissMode={"interactive"}
        keyboardShouldPersistTaps={"never"}
      >
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your email:</Text>
          <TextInput
            returnKeyType="done"
            autofocus={true}
            style={styles.input}
            placeholder="Email"
            id="email"
            value={email}
            onChangeText={text => handleChange("email", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your username:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Username"
            id="username"
            value={username}
            onChangeText={text => handleChange("username", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Enter a new password:</Text>
          <TextInput
            returnKeyType="done"
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            id="password"
            value={newPassword}
            onChangeText={text => handleChange("password", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your first name:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="First name"
            id="firstName"
            value={firstName}
            onChangeText={text => handleChange("firstName", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your middle name:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Middle name"
            id="middleName"
            value={middleName}
            onChangeText={text => handleChange("middleName", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your last name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            id="lastName"
            value={lastName}
            onChangeText={text => handleChange("lastName", text)}
          />
        </View>
        <View style={styles.updateFormBox}>
          <Text style={styles.inputTitle}>Update your phone number:</Text>
          <TextInput
            returnKeyType="done"
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
            onPress={handleUpdateAccount}
            style={styles.submitBtn}
          >
            {updateAccountStart ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnText}>Submit</Text>
            )}
          </TouchableHighlight>
          <Link
            to="/profile"
            underlayColor={"#0E30F0"}
            style={styles.cancelBtn}
          >
            <Text style={styles.btnText}>Cancel</Text>
          </Link>
        </View>
      </ScrollView>
      <View style={styles.updateHeader}>
        <Text style={styles.updateTitle}>Sign Up</Text>
        <Image source={updatePerson} style={styles.updatePerson} />
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
  updateHeader: {
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
  updateTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Roboto-Black",
    fontSize: 28,
    color: "#4F68F4"
  },
  updatePerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 50
  },
  updateForm: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 150,
    paddingTop: 20,
    height: 100
  },
  updateFormBox: {
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
    marginBottom: 150
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

export default ProfileUpdate;
