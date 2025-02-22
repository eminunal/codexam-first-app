import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigator from "./navigators/RootNavigator";
import BottomNavigator from "./navigators/BottomNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      </GestureHandlerRootView>
  );
}
