import React from "react";
import styled from "styled-components/native";

import { ProfileCard } from "../../Presentational/ProfileCard";
import { ContributionsCard } from "../../Presentational/ContributionsCard";
import { CardInformation } from "../../Presentational/CardInformation";

const ProfileContainer = styled.View`
  flex: 1;
  align-self: stretch;
`;

const ProfileView = props => {
  return (
    <ProfileContainer>
      <CardInformation />
      <ContributionsCard />
      <ProfileCard />
    </ProfileContainer>
  );
};

export default ProfileView;
