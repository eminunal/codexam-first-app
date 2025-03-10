import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import ExamNameScreen from "../screens/ExamNameScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ExamListScreen from "../screens/ExamListScreen";
import SettingScreen from "../screens/SettingScreen";
import AccountScreen from "../screens/AccountScreen";



export type RootStackParamList = {
  ExamList:undefined;
  ExamName:undefined;
  Login:undefined;
  Register:undefined;
  Home:undefined;
  Setting:undefined;
  Account:undefined;
};

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="ExamName" component={ExamNameScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ExamList" component={ExamListScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
  );
}
