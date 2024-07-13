import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import appFirebase from '../credentials';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";




const auth = getAuth(appFirebase)
/**
 * 
 * Function that handles the login,
 * @returns when the user is authenticated by logging in correctly 
 * he/she can navigate to the Home screen.
 */
const LogInScreen = (props) => {


  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = async() => {
    try {
      await signInWithEmailAndPassword(auth,email,password)
      Alert.alert('logging in...', 'entering')
      props.navigation.navigate('Home')  //when i logg succesfully
  
    } catch (error) {
      console.log('error: ',error)
      Alert.alert('The User or Password is incorrect')

    }
  }


  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/messiProfile.png")}
          style={styles.profileImg}
        />
      </View>

      <View style={styles.card}>
        <View style={styles.cardPlaceholder}>
          <TextInput
            placeholder="example@mail.com"
            style={{ paddingHorizontal: 15 }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.cardPlaceholder}>
          <TextInput placeholder="Password" style={{ paddingHorizontal: 15 }} 
          onChangeText={(text) => setPassword(text)} secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={login}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13161c",
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "white",
  },
  card: {
    margin: 20,
    backgroundColor: "#f0f0f0", //maybe change it later
    borderRadius: 20,
    width: "90%",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, //like fade shadow
    shadowRadius: 4, //a round shadow
    elevation: 5, //like z-index effect bro
  },
  cardPlaceholder:{
    paddingVertical: 20,
    backgroundColor:'#ccc', //change it later
    borderRadius:30,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#0ae98a",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 16,
    width: 150,
    height: 50,
  },
  btnText:{
    textAlign:'center',
    color:'white'
  }
});
export default LogInScreen;
