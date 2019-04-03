import React from "react";
import styled from "styled-components/native";

import { DonationHeader } from "../../Presentational/DonationHeader";
import { DonationCard } from "../../Presentational/DonationCard";

const Container = styled.ScrollView`
  flex: 1;
  margin-top: 70;
  align-self: stretch;
`;

const HomeView = ({ user, donations }) => {
  return (
    <Container>
      <DonationHeader user={user} />
    </Container>
  );
};

HomeView.defaultProps = {
  user: {}
};

export default HomeView;
