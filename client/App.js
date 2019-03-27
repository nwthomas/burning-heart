import React, { useState, useEffect, useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NativeRouter, Route, Link, ScrollView } from "react-router-native";

import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";
import { SearchView } from "./Components/Views/SearchView";
import { ProfileView } from "./Components/Views/ProfileView";
import { authenticate } from "./Components/Presentational/authenticate";
import { Header } from "./Components/Presentational/Header";
import { Navbar } from "./Components/Presentational/Navbar";

const App = _ => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/profile" component={ProfileView} />
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
    backgroundColor: "#e9eeef"
  }
});

// Export through authenticate with LoginView via currying function
export default authenticate(App)(LoginView);
