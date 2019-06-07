import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import ConfirmSmsScreen from './screens/ConfirmSms';
import SetPinScreen from './screens/SetPin';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  ConfirmSms: ConfirmSmsScreen,
  SetPin: SetPinScreen
});

export default createAppContainer(AppNavigator);
