import Login from "../Login.js";
import Home from "./Home.js";
import Inbox from "./Inbox.js";
import Profile from "./Profile.js";
import Topp from "./Topp.js";
import Upload from "./Upload.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Topp" component={Topp} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="Inbox" component={Inbox} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNav;
