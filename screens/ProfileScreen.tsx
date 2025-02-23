import { View, Text, TextInput, StyleSheet } from "react-native";
import global from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <View>
      <Text>asdds</Text>
    </View>
  ); 
}

const styles=StyleSheet.create({
  header:{  
    flex: 2,
    backgroundColor: "orange",
  },
  body:{
    flex:5,
    backgroundColor: "red",
  },
  title:{
    fontSize: 36,
    color: "#cdd6f4", // Açık renkli yazı
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15%",
  },
  text:{
    fontSize: 38,
    color: "#cdd6f4", // Açık renkli yazı
    textAlign: "center",
    marginTop: "5%",
    marginHorizontal: "5%",
    alignSelf: "flex-start",
  },
  icon:{
    color: "#cdd6f4", // Açık renkli yazı
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "15%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#cdd6f4",
  },
  inputContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  emailLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#cdd6f4",
  },
  passwordLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#cdd6f4",
  }
})











  


//       {/* Label ve Input */}
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Email</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Email Giriniz.."
//           placeholderTextColor="#888"
//         />
//       </View>
//        {/* Label ve Input */}
//        <View style={styles.inputContainer}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Şifre Giriniz.."
//           placeholderTextColor="#888"
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   pagename: {
//     fontSize: 50,
//     textAlign: "center",
//     marginTop: 100,
//   },
//   inputContainer: {
//     marginTop: 30,
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 2,
//     color: "#333",
//     alignSelf: "flex-start",
//     textAlign: "left",
//   },
//   icon:{
//     color: "#cdd6f4", // Açık renkli yazı
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: "15%",
// },
// text:{
//   fontSize: 18,
//   color: "#cdd6f4", // Açık renkli yazı
//   textAlign: "center",
//   marginTop: "5%",
//   marginHorizontal: "5%",
  
// },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 90,
//   },
//   title:{
//     fontSize: 36,
//     color: "#cdd6f4", // Açık renkli yazı
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: "15%",

// },
//   header:{  
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: "5%",
//     marginLeft: "1%",
// }
// });


