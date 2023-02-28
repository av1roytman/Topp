import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import TabNav from "./Screens/MainTabs/TabNav.js";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: "fade_from_bottom",
        animationDuration: 200,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNav" component={TabNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
