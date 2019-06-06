import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginView from "./components/LoginView";
import RegisterView from "./components/RegisterView";
import ConfirmSmsView from "./components/ConfirmSmsView";

const AppNavigator = createStackNavigator({
    Login: LoginView,
    Register: RegisterView,
    ConfirmSms: ConfirmSmsView
  });
  
export default createAppContainer(AppNavigator);