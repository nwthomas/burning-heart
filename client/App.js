import React, { useState, useEffect, useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NativeRouter, Route, Link, ScrollView } from "react-router-native";
import axios from "react-native-axios";

import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";
import { SearchView } from "./Components/Views/SearchView";
import { ProfileView } from "./Components/Views/ProfileView";
import { authenticate } from "./Components/Presentational/authenticate";
import { Header } from "./Components/Presentational/Header";
import { Navbar } from "./Components/Presentational/Navbar";

const App = _ => {
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
          setDonations(res.data.donations);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  return (
    <NativeRouter>
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
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000"
  }
});

// Export through authenticate with LoginView via currying function
export default authenticate(App)(LoginView);
