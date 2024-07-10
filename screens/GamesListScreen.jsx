import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const GamesListScreen = ({ navigation }) => {
  const handleOnPress = (selectedGame) => {
    navigation.navigate(selectedGame); // Navegar a la pantalla seleccionada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Click any game to start:
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game1")} 
        >
          <Text style={styles.buttonText}>Quiz Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game2")}
        >
          <Text style={styles.buttonText}>Memo Game</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleOnPress("Game3")}
        >
          <Text style={styles.buttonText}>Penalty Score</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13161c", 
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  buttonContainer: {
    backgroundColor: "transparent",
    paddingTop: 22,
    paddingRight: 16,
    paddingBottom: 22,
    paddingLeft: 16,
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0ae98a",
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%", // Ajusta el ancho de los botones según sea necesario
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#13161c",
  },
});

export default GamesListScreen;
