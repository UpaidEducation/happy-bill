import React, { Component } from "react";
import { View, Button } from "react-native";

export default class RegisterView extends Component {
  static navigationOptions = {
    title: "Register"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Confirm sms" onPress={() => navigate('ConfirmSms')} />
        <Button title="Go back to login" onPress={() => navigate('Login')} />
      </View>
    );
  }
}
