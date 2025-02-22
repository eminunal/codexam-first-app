import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import global from "./styles"

  export default function ProfileScreen() {
    return (
    <View style={global.profilebackground}>
      <Text></Text>
      <View>
        <Text style={styles.pagename}>Profile</Text>
      </View>
      
    </View>
  );
}
const styles=StyleSheet.create({
    

 pagename:{
   fontSize: 50,
   textAlign: "center",
   marginTop: 300,
 }
})


