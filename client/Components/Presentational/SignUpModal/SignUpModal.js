import React, { useContext } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { Store } from "../../store/store";
import { closeModal } from "../../store/actions";

const { width, height } = Dimensions.get("window"); // Get window dimensions

const SignUpModal = props => {
  const { state, dispatch } = useContext(Store);
  const {
    createAccountStart,
    createAccountSuccess,
    createAccountError,
    message
  } = state;
  const goToLogin = e => {
    e.preventDefault();
    if (createAccountSuccess) props.history.push("/home-login");
    closeModal(dispatch);
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={createAccountStart || createAccountSuccess || createAccountError}
    >
      <View style={styles.modal}>
        <Text style={styles.modalText}>{message ? message : "Sending..."}</Text>
        <TouchableHighlight
          underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
          onPress={goToLogin}
          style={styles.submitBtn}
        >
          {createAccountStart ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.btnText}>Okay</Text>
          )}
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    width: width,
    height: height,
    zIndex: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignContent: "center"
  },
  modalText: {
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    textAlign: "center",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20
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
  btnText: {
    color: "#ffffff",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 16
  }
});

export default SignUpModal;
