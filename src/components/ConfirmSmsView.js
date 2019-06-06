import React, { Component } from "react";
import { View, Button } from "react-native";

export default class ConfirmSmsView extends Component {
  static navigationOptions = {
    title: "Confirm SMS"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Login now" onPress={() => navigate('Login')} />
      </View>
    );
  }
}
