import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Register'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 20, flex: 1, justifyContent: 'center' }}>
        <Button title="Confirm sms" onPress={() => navigate('ConfirmSms')} />
        <View style={{ marginTop: 40 }}>
          <Button title="Go back to the login screen" onPress={() => navigate('Login')} />
        </View>
      </View>
    );
  }
}
