import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import Spinner from '../../components/Spinner';

export default class ConfirmSmsScreen extends Component {
  static navigationOptions = {
    title: 'Confirm SMS',
    headerLeft: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
      ToastAndroid.show('You can now log in! Or can you?', ToastAndroid.SHORT);
    }, 1100);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinner text="Almost there!" size={80} />
      </View>
    );
  }
}
