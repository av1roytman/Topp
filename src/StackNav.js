import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login.js'
import Home from './Screens/Home.js'

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerShown: false
            }}
        >
            <Stack.Group>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default StackNav;