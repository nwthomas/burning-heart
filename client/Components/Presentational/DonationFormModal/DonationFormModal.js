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

const DonationFormModal = props => {
  const { state, dispatch } = useContext(Store);
  const {
    makeDonationStart,
    makeDonationError,
    makeDonationSuccess,
    message
  } = state;
  console.log(state);
  const goToSearch = e => {
    e.preventDefault();
    if (makeDonationsSuccess) props.history.push("/search");
    closeModal(dispatch);
  };
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={makeDonationStart || makeDonationSuccess || makeDonationError}
    >
      <View style={styles.modal}>
        <Text style={styles.modalText}>{message ? message : "Sending..."}</Text>
        <TouchableHighlight
          underlayColor={"#0E30F050"} // Last two numbers indicate opacity of color
          onPress={goToSearch}
          style={styles.submitBtn}
        >
          {makeDonationStart ? (
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
    fontFamily: "Montserrat-Bold",
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
    fontFamily: "OpenSans-Regular",
    fontSize: 16
  }
});

export default DonationFormModal;
