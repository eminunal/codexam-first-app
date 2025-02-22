import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigator from "./BottomNavigator";
import ExamNameScreen from "../screens/ExamNameScreen";

export type RootStackParamList = {
  SinavListesi: undefined;
};

const Stack = createNativeStackNavigator();


export default function RootNavigator() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="ExamName" component={ExamNameScreen} />
        </Stack.Navigator>
  );
}
