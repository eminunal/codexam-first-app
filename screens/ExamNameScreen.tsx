import { View, Text, Button, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../navigators/RootNavigator";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import global from "./styles"
import BackButton from "../components/BackButton";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = BottomTabScreenProps<RootStackParamList, "ExamName">;

export default function ExamNameScreen({ navigation }: Props) {
  const [examName, setExamName] = useState("");

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.label}>Sınav ismini girin</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Sınav ismi..."
        value={examName}
        onChangeText={setExamName}
      />
    <BackButton navigation={navigation}/>
    </View>
    </SafeAreaView>
    
  );
}
const styles=StyleSheet.create({
  container:{

  },
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
});
