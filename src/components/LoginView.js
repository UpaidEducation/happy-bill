import React, { Component } from "react";
import { View, Button } from "react-native";

export default class LoginView extends Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Create an account" onPress={() => navigate('Register')} />
      </View>
    );
  }
}
