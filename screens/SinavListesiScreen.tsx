import { View, Text, Button, TouchableOpacity,StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";
import React from "react";



type Props = NativeStackScreenProps<RootStackParamList, "SinavListesi">;

// export default function SinavListesiScreen({ navigation }: Props) {
  export default function SinavListesiScreen({ navigation }: Props) {
    return (
    <View>
      <View style={styles.examlist}>
      <Text style={{fontSize:40,}}>Sınav Listesi</Text>
      </View>
      <View style={styles.examlistbackground}>
      <TouchableOpacity style={styles.buttonExam} onPress={() => navigation.navigate("ExamName")}>
         <View> 
          <Text style={{fontSize:50,alignItems:"center"}}>+</Text>
        </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
const styles=StyleSheet.create({
  buttonExam:{
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 300,
    marginLeft:220,
    
     
  },

examlistbackground:{
    backgroundColor: "gray",
    marginTop:60,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 30,
    height: 500,
},
  examlist:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop:40,
    backgroundColor: "lightblue",
}
})