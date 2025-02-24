import ExamListScreen from "../screens/ExamListScreen";
import SettingScreen from "../screens/SettingScreen";
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
        if (route.name === 'ExamList') {
          iconName = 'book';
        } else if (route.name === 'Setting') {
          iconName = 'person-outline';
        }else if (route.name === 'Home') {
          iconName = 'home';
        }
        return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
      
      <Tab.Screen  name="ExamList" component={ExamListScreen} options={{ title: "Sınav Listesi" }}  />
      <Tab.Screen  name="Home" component={HomeScreen} options={{ title: "Ana Sayfa" }}  />
      <Tab.Screen name="Setting" component={SettingScreen} />
      
      </Tab.Navigator>
  );
}
