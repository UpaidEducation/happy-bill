import React, { Component } from 'react';
import { View, Button, TextInput, Image } from 'react-native';
import { COLORS } from '../../styles';
import s from './styles';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Happy Bill'
  };
  state = {
    phone: '',
    password: ''
  };

  handleLoginPress = () => {
    console.log(this.state);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={s.wrapper}>
        <Image
          source={require('../../images/logo.png')}
          style={{ width: '65%', height: null, aspectRatio: 362 / 80, alignSelf: 'center', marginTop: 50 }}
        />
        <View style={{ marginVertical: 30 }}>
          <TextInput
            keyboardType="numeric"
            style={s.input}
            placeholder="Phone"
            underlineColorAndroid={COLORS.blue}
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <TextInput
            style={s.input}
            placeholder="Password"
            underlineColorAndroid={COLORS.blue}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Button title="Log in" onPress={this.handleLoginPress} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button color={COLORS.green} title="Create an account" onPress={() => navigate('Register')} />
        </View>
      </View>
    );
  }
}
