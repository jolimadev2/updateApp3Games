import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

const LogInScreen = ({navigation}) => {
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
          />
        </View>

        <View style={styles.cardPlaceholder}>
          <TextInput placeholder="Password" style={{ paddingHorizontal: 15 }} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Play to Start</Text>
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
    backgroundColor: "white", //maybe change it later
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
    backgroundColor:'#f0f0f0', //change it later
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
});
export default LogInScreen;
