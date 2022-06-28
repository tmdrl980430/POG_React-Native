import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';

const AuthStack = createStackNavigator(
    {
        Login: {screen: Login},
        SignUp: {screen: SignUp}
    },
    {
        initialRouteName: 'Login'
    }
);

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);