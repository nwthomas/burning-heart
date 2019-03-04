import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const ProfileText = styled.Text`
  font-family: "Ubuntu-Medium";
  font-size: 20;
`;

const ProfileView = props => {
  return (
    <View home={props.history}>
      <ProfileText>This is the profile screen.</ProfileText>
    </View>
  );
};

export default ProfileView;
