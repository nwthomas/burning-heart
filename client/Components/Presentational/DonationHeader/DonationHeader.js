import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";

const DonationBox = styled.View`
  flex: 2;
  align-self: stretch;
  background-color: #ec3323;
  height: 60;
  margin-left: 40;
  margin-top: 30;
  border-bottom-left-radius: 50;
  border-top-left-radius: 50;
  justify-content: center;
`;

const DonationTitle = styled.Text`
  color: #ffffff;
  margin-left: 30;
  font-size: 25;
  font-family: "Roboto-Black";
`;

const DonationHeader = ({ user }) => {
  return (
    <DonationBox>
      <DonationTitle>Donations</DonationTitle>
    </DonationBox>
  );
};

// const styles = StyleSheet.create({
//   donationBox: {
//     flex: 2,
//     alignSelf: "stretch",
//     backgroundColor: "#ec3323",
//     height: 60,
//     marginLeft: 40,
//     marginTop: 30,
//     borderBottomLeftRadius: 50,
//     borderTopLeftRadius: 50,
//     justifyContent: "center"
//   },
//   donationTitle: {
//     color: "#ffffff",
//     marginLeft: 20,
//     fontSize: 20,
//     fontFamily: "Roboto-Medium"
//   },
//   donations: {
//     // finish
//   }
// });

export default DonationHeader;
