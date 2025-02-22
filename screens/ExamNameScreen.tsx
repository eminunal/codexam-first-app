import { View, Text, Button, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigators/RootNavigator";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";


type Props = BottomTabScreenProps<RootStackParamList, "ExamName">;

export default function ProfileScreen({ navigation }: Props) {
  const [examName, setExamName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sınav ismini girin</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Sınav ismi..."
        value={examName}
        onChangeText={setExamName}
      />

      <TouchableOpacity style={styles.buttonone} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
    </View>
    
  );
}
const styles=StyleSheet.create({
  examName:{
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop:40,
    backgroundColor: "lightblue",
},
label: {
  fontWeight: "bold",
  fontSize: 35,
  marginLeft: "2%",
  marginTop: "30%",
  },
input: {
  width: "80%",
  padding: 15,
  borderWidth: 1,
  borderColor: "gray",
  backgroundColor: "white",
  marginLeft: "2%",
  marginTop: "5%",
  borderBottomRightRadius:50,
  borderTopRightRadius:50,
  fontSize: 25,
},
buttonone:{
  width: 120,
  height: 50,
  backgroundColor: "white",
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  marginTop: "10%",
  marginLeft:"3%",
}});
