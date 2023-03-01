import Login from "../Login.js";
import Home from "./Home.js";
import Inbox from "./Inbox.js";
import Profile from "./Profile.js";
import Topp from "./Topp.js";
import Upload from "./Upload.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Topp":
      iconName = "Trophy";
      break;
    case "Upload":
      iconName = "plussquareo";
      break;
    case "Inbox":
      iconName = "inbox";
      break;
    case "Profile":
      iconName = "user";
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={24} />;
};
const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Topp" component={Topp} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Inbox" component={Inbox} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNav;
