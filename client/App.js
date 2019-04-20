import React from "react";
import { View, StyleSheet } from "react-native";
import { Route } from "react-router-native";

import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";
import { SearchView } from "./Components/Views/SearchView";
import { ProfileView } from "./Components/Views/ProfileView";
import { authenticate } from "./Components/Presentational/authenticate";
import { Navbar } from "./Components/Presentational/Navbar";
import { CharityProfile } from "./Components/Presentational/CharityProfile";
import { DonationForm } from "./Components/Presentational/DonationForm";

const App = props => {
  return (
    <View style={styles.container}>
      <Route exact path="/" render={props => <HomeView {...props} />} />
      <Route exact path="/search" render={props => <SearchView {...props} />} />
      <Route
        exact
        path="/profile"
        render={props => <ProfileView {...props} />}
      />
      <Route
        exact
        path="/search/profile/:id"
        render={props => <CharityProfile {...props} />}
      />
      <Route
        exact
        path="/search/profile/:id/donate"
        render={props => <DonationForm {...props} />}
      />
      <Navbar history={props.history} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  }
});

// Export through authenticate with LoginView via currying function
export default authenticate(App)(LoginView);
