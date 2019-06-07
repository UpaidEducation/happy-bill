import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ToastAndroid, Alert, Platform } from 'react-native';
import { STYLES, COLORS } from '../../styles';
import s from './styles';
import { StackActions } from 'react-navigation';
import TouchID from 'react-native-touch-id';

export default class SetPinScreen extends Component {
  static navigationOptions = {
    title: 'Set PIN',
    headerLeft: null
  };
  state = {
    pin: '',
    confirmPin: '',
    fingerprint: false,
    isBiometryAvailable: true
  };

  componentDidMount() {
    TouchID.isSupported()
      .then(biometryType => {
        if (Platform.OS === 'ios' && biometryType !== 'TouchID') {
          this.setState({ isBiometryAvailable: false });
        }
      })
      .catch(() => this.setState({ isBiometryAvailable: false }));
  }

  componentWillUnmount() {
    const action = StackActions.replace({ routeName: 'Login' });
    this.props.navigation.dispatch(action);
  }

  handlePress = () => {
    this.props.navigation.navigate('Login');
    ToastAndroid.show('You can now log in! Or can you?', ToastAndroid.SHORT);
  };

  toggleFingerprint = fingerprint => {
    if (fingerprint) this.scanFingerprint();
    this.setState({ fingerprint });
  };

  scanFingerprint = () => {
    TouchID.authenticate()
      .then(() => ToastAndroid.show('Fingerprint added successfully.', ToastAndroid.SHORT))
      .catch(() => {
        this.toggleFingerprint(false);
        ToastAndroid.show('Fingerprint authentication failed.', ToastAndroid.SHORT);
      });
  };

  render() {
    const { pin, confirmPin, fingerprint, isBiometryAvailable } = this.state;

    const biometrySwitch = isBiometryAvailable ? (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 30 }}>
        <Switch
          trackColor={{ true: COLORS.blue }}
          thumbColor={COLORS.blue}
          value={fingerprint}
          onValueChange={this.toggleFingerprint}
        />
        <Text onPress={() => this.toggleFingerprint(!fingerprint)}>Use fingerprint</Text>
      </View>
    ) : null;

    return (
      <View style={s.wrapper}>
        <Text style={{ ...STYLES.primaryText, ...{ textAlign: 'center', marginVertical: 30 } }}>
          Set PIN which will be used later to confirm transactions.
        </Text>
        <TextInput
          secureTextEntry={true}
          keyboardType="numeric"
          style={s.input}
          placeholder="PIN"
          underlineColorAndroid={COLORS.blue}
          value={pin}
          onChangeText={pin => this.setState({ pin })}
        />
        <TextInput
          secureTextEntry={true}
          keyboardType="numeric"
          style={s.input}
          placeholder="Confirm PIN"
          underlineColorAndroid={COLORS.blue}
          value={confirmPin}
          onChangeText={confirmPin => this.setState({ confirmPin })}
        />
        {biometrySwitch}
        <View style={{ marginTop: 20 }}>
          <Button color={COLORS.blue} title="Confirm" onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}
