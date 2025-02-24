import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const SettingScreen = ({ navigation }) => {
  const settingsOptions = [
    { id: 'account', label: 'Account' },  
    { id: 'notifications', label: 'Notifications' },
    { id: 'appearance', label: 'Appearance' },
    { id: 'privacy', label: 'Privacy' },
  ];

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#1e1e2e"}}>
      <View style={styles.header}> 
        <BackButton navigation={navigation} />
      </View>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
        {settingsOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate(item.label)} // Sayfaya yönlendirme
          style={styles.button}
          activeOpacity={0.7} // Tıklanma efekti
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {  flex: 1 },
  header: { color:"#cdd6f4",fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: {
    backgroundColor: '#cdd6f4',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {color:"#1e1e2e", fontSize: 20 ,fontWeight:"bold"}
});

export default SettingScreen;

  






  


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


