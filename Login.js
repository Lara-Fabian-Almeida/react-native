import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {useState} from "react";

import logo from "./assets/logo-diamante.png";

import { useNavigation } from '@react-navigation/native';
  
export default function Login() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  async function entrar(){
    if(login === ""){
      alert("Digite o e-mail");
      return;
    }

    if(password === ""){
      alert("Digite a senha");
      return;
    }

    const response = await fetch(
      "https://uesb-estagio.free.beeceptor.com/login", 
      {
        method: "POST",
        body: JSON.stringify({
          login, 
          password,
        }),
      }
    );

    if(response.status === 200){
      const data = await response.json();
      // navigation.navigate("Home");
      return;
    }

    navigation.navigate("Home");

    alert("Usuário ou senha inválido.");

    // console.log(response);
  }

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>App LF</Text> 
      </View>

      <View>
        <Text style={styles.label}>Login</Text> 
        <TextInput
          style={styles.input} 
          value={login} 
          onChangeText={ (text) => {
            setLogin(text)
          } } 
        />
      </View>

      <View>
        <Text style={styles.label}>Senha</Text> 
        <TextInput 
          style={styles.input} 
          value={password} 
          secureTextEntry
          onChangeText={ (text) => {
            setPassword(text)
          } }
        />
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={entrar} >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8faf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 13,
    color: "#5a5a5a",
  },
  input: {
    borderColor: "EAECEB",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 20,
    minWidth: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btn: {
    borderColor: "EAECEB",
    backgroundColor: "#52ABCB",
    borderWidth: 1,
    borderRadius: 6,
    minWidth: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  }, 
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2b2c2b",
  },
  logoContainer: {
    alignItems: "center",
  },
  forgotPassword: {
    marginTop: 25,
    opacity: 0.5,
  }
});
