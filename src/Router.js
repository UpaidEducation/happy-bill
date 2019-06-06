import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import ConfirmSmsScreen from './screens/ConfirmSms';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  ConfirmSms: ConfirmSmsScreen
});

export default createAppContainer(AppNavigator);
