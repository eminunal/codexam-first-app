import { View, Text, Button, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import React from "react";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "SinavListesi">;

export default function SinavListesiScreen({ navigation }: Props) {
  return (
    <View>
      <View style={styles.examlist}>
      <Text style={{fontSize:40,}}>Sınav Listesi</Text>
      </View>
      <View style={styles.examlistbackground}>
      <TouchableOpacity style={styles.buttonExam} onPress={() => navigation.navigate("Profile")}>
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
    marginTop: 500,
    marginLeft:220,
    
     
  },

examlistbackground:{
    backgroundColor: "gray",
    marginTop:60,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 30,
    height: 650,
},
  examlist:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop:40,
    backgroundColor: "lightblue",
}
})