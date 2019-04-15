import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NativeRouter as Router, Route } from "react-router-native";
import axios from "axios";
import { MyStore } from "./Components/store/store";

import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";
import { SearchView } from "./Components/Views/SearchView";
import { ProfileView } from "./Components/Views/ProfileView";
import { authenticate } from "./Components/Presentational/authenticate";
import { Header } from "./Components/Presentational/Header";
import { Navbar } from "./Components/Presentational/Navbar";

const App = () => {
  const [user, setUser] = useState({});
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    if (!user.username) {
      axios
        .get("http://localhost:8000/api/restricted/accounts/1")
        .then(res => {
          setUser(res.data.account);
        })
        .catch(err => console.log(err));
    }
    if (!donations.length) {
      axios
        .get("http://localhost:8000/api/restricted/donations/account/1")
        .then(res => {
          console.log(res.data.donations);
          setDonations(res.data.donations);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  return (
    <Router>
      <MyStore>
        <View style={styles.container}>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <HomeView {...props} user={user} donations={donations} />
            )}
          />
          <Route
            exact
            path="/search"
            render={props => <SearchView {...props} user={user} />}
          />
          <Route
            exact
            path="/profile"
            render={props => <ProfileView {...props} user={user} />}
          />
          <Navbar />
        </View>
      </MyStore>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E9EEEF"
  }
});

// Export through authenticate with LoginView via currying function
export default authenticate(App)(LoginView);
