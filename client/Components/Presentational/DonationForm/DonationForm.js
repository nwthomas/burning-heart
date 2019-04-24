import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableHighlight
} from "react-native";
import { Store } from "../../store/store";
import { Link } from "react-router-native";
import { updateDonationForm } from "../../store/actions";

import boomBoxPerson from "../../../assets/images/boom-box-person.gif";

const { width } = Dimensions.get("window");

const DonationForm = ({ history, match }) => {
  const { state, dispatch } = useContext(Store);
  const {
    donation,
    makeDonationStart,
    makeDonationSuccess,
    makeDonationError
  } = state;
  const { amount, creditCard, expDate, securityCode } = donation;
  const handleChange = (name, value) => {
    updateDonationForm(name, value, dispatch);
  };
  const submitPayment = e => {
    e.preventDefault();
    // Finish out with action creator and reducer on Stripe implementation
  };
  return (
    <View style={styles.donationFormContainer}>
      <View style={styles.donateHeader}>
        <Text style={styles.donateTitle}>Make Donation</Text>
        <Image source={boomBoxPerson} style={styles.donatePerson} />
      </View>
      <ScrollView style={styles.donationFormScroll}>
        <View style={styles.donationFormBox}>
          <Text style={styles.inputTitle}>Donation amount:</Text>
          <TextInput
            returnKeyType="done"
            autofocus={true}
            style={styles.input}
            placeholder="Donation amount"
            id="amount"
            value={amount}
            onChangeText={text => handleChange("amount", text)}
          />
        </View>
        <View style={styles.donationFormBox}>
          <Text style={styles.inputTitle}>Credit card number:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Credit Card"
            id="creditCard"
            value={creditCard}
            onChangeText={text => handleChange("creditCard", text)}
          />
        </View>
        <View style={styles.donationFormBox}>
          <Text style={styles.inputTitle}>Expiration date:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Expiration date"
            id="expDate"
            value={expDate}
            onChangeText={text => handleChange("expDate", text)}
          />
        </View>
        <View style={styles.donationFormBox}>
          <Text style={styles.inputTitle}>Security code:</Text>
          <TextInput
            returnKeyType="done"
            style={styles.input}
            placeholder="Security code"
            id="securityCode"
            value={securityCode}
            onChangeText={text => handleChange("securityCode", text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight
            underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
            onPress={submitPayment}
            style={styles.submitBtn}
          >
            {makeDonationStart ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.btnText}>Make Payment</Text>
            )}
          </TouchableHighlight>
          <Link to="/search" underlayColor={"#0E30F0"} style={styles.cancelBtn}>
            <Text style={styles.btnText}>Cancel</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  donationFormContainer: {
    flex: 1,
    alignSelf: "stretch"
  },
  donateHeader: {
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
  donateTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 70,
    marginTop: 100,
    fontFamily: "Montserrat-Bold",
    fontSize: 28,
    color: "#4F68F4"
  },
  donatePerson: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 60,
    height: 70,
    width: 70
  },
  donationFormScroll: {
    marginTop: 160,
    marginBottom: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  donationFormBox: {
    width: width - 80,
    height: 110
  },
  inputTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    width: width - 80,
    fontFamily: "OpenSans-Regular",
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
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#0E30F0",
    backgroundColor: "#0E30F0",
    marginBottom: 89
  },
  cancelBtnSelected: {
    alignSelf: "stretch",
    justifyContent: "center",
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
    fontFamily: "Montserrat-Bold",
    fontSize: 16
  }
});

export default DonationForm;
