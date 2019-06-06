import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginView from "./components/LoginView";
import RegisterView from "./components/RegisterView";
import ConfirmSmsView from "./components/ConfirmSmsView";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Login: LoginView,
  Register: RegisterView,
  ConfirmSms: ConfirmSmsView
});

const AppContainer = createAppContainer(AppNavigator);
