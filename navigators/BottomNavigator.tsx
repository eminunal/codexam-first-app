import SinavListesiScreen from "../screens/SinavListesiScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator  
        screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ color, size }) => {
        let iconName;   
        if (route.name === 'SinavListesi') {
          iconName = 'book';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        }else if (route.name === 'Home') {
          iconName = 'home';
        }
        return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
      
      <Tab.Screen  name="SinavListesi" component={SinavListesiScreen} options={{ title: "Sınav Listesi" }}  />
      <Tab.Screen  name="Home" component={HomeScreen} options={{ title: "Ana Sayfa" }}  />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
      </Tab.Navigator>
  );
}
