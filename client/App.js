import React, { useState, useEffect, useReducer } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { NativeRouter, Route, Link, ScrollView } from "react-router-native";

import { LoginView } from "./Components/Views/LoginView";
import { HomeView } from "./Components/Views/HomeView";
import { SearchView } from "./Components/Views/SearchView";
import { ProfileView } from "./Components/Views/ProfileView";
import { authenticate } from "./Components/Presentational/authenticate";
import { Header } from "./Components/Presentational/Header";
import { Navbar } from "./Components/Presentational/Navbar";

const AppContainer = styled.View`
  justify-content: center;
  flex: 1;
  align-items: center;
  background: #e9eeef;
`;

const App = _ => {
  return (
    <NativeRouter>
      <AppContainer>
        <Header />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/search" component={SearchView} />
        <Route exact path="/profile" component={ProfileView} />
        <Navbar />
      </AppContainer>
    </NativeRouter>
  );
};

// Export through authenticate with LoginView via currying function
export default authenticate(App)(LoginView);
