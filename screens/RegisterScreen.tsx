import { Text, TextInput, TouchableOpacity, View, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '../navigators/RootNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackButton from '../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface RegisterForm {
    username: string;
    email:string;
    password: string;
    
  }
  

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({navigation}:Props){
    
    const [form, setForm] = useState({ username: '', password: '' ,email:''});


    function handleInputChange(field: keyof RegisterForm, value: string): void {
        setForm({ ...form, [field]: value });
    }


    const handleRegister = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
            return;
        }
    
        try {
            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
    
            const data = await response.json();
            Alert.alert("Bilgi", data.message);
    
            if (response.ok) {
                navigation.navigate("Login");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Hata", "Sunucuya bağlanılamadı.");
        }
    };
    

    return (
        
        <SafeAreaView style={{flex:1,backgroundColor:"#1e1e2e"}}>
          
            <View style={styles.header}> 
            <BackButton navigation={navigation} 
            />
    
    
                <Text style={styles.title}>CodExam</Text>
            </View>
            <View style={styles.body}>
            <View style={styles.icon}>
                  <Ionicons name="code" size={40} color="#cdd6f4" />
            </View>
            </View>
            <View style={styles.footer}>
                    <Text style={{fontSize:60,paddingHorizontal: 20,marginTop:50}}>Register</Text>
                <View style={styles.inputContainer}>
                  
                    <Text style={styles.label}>Kullanıcı adı</Text>
                    <TextInput
                    value={form.username}
                    onChangeText={(text) => handleInputChange("username", text)}
                    style={styles.input}
                    placeholder="Kullanıcı Adınızı Girin"
                    placeholderTextColor="#888"
                    />
                    
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                    value={form.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                    style={styles.input}
                    placeholder="E-posta Adresinizi Girin"
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    />
                    <Text style={styles.label}>Şifre</Text>
                    <TextInput
                    value={form.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                    style={styles.input}
                    placeholder="Şifre yazın"
                    placeholderTextColor="#888"
                    secureTextEntry
                    />
                    {/* <TouchableOpacity style={styles.buttonRegistered} onPress={() => navigation.navigate("Login")}>
                                                     <View> 
                                                      <Text style={{fontSize:36,alignItems:"center",color:"#1e1e2e"}}>Üye Ol</Text>
                                                    </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.buttonRegistered} onPress={handleRegister}>
                    <View> 
                        <Text style={{fontSize:36,alignItems:"center",color:"#1e1e2e"}}>Üye Ol</Text>
                    </View>
                    </TouchableOpacity>





                    <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate("Login")}>
                                     <View> 
                                      <Text style={styles.registerInfo}>Üye misiniz ? Giriş yapın</Text>
                                    </View>
                      </TouchableOpacity>
                    
                
                
                </View>
            </View>
        </SafeAreaView>
    
    
        
      )
    }
    
    
    
    
    const styles=StyleSheet.create({
        header:{  
          textAlign:"center",
          flex: 1,
          flexDirection:"row",
          alignItems:"center",
          backgroundColor:"#cdd6f4"
        },
        body:{
          flex:1,
          justifyContent:"center",
          backgroundColor:"#1e1e2e",
          
    
        },
        footer:{
            flex:6,
            backgroundColor:"#cdd6f4",
            borderTopRightRadius:50,
            
    
        },
        title:{
          fontSize: 50,
          color: "#1e1e2e", // Açık renkli yazı
          fontWeight: "bold",
          textAlign: "center",
        },
        icon:{
          marginLeft:40,
          color: "#1e1e2e", // Açık renkli yazı
          fontWeight: "bold",
          textAlign: "center",
          
        },
        input: {
          height: 40,
          borderWidth: 1,
          borderColor: "#1e1e2e",
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom:20,
          color: "#1e1e2e",
        },
        
        inputContainer: {
          paddingHorizontal: 20,
          marginTop:80
        },
        
        label: {
          
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 10,
          color: "#1e1e2e",
        },
        registerInfo:{
          fontSize: 12,
          fontWeight: "bold",
          color: "#1e1e2e",
          textAlign:"right"
          
        },buttonRegister:{
          
        },
        buttonRegistered:{

        }
      })


