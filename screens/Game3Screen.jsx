import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import PenaltyShootoutGame from "../components/PenaltyShootoutGame";









const Game3Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PenaltyShootoutGame />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Game's List</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Go back to Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#13161c", // Color de fondo de pantalla
  },
  buttonContainer: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#0ae98a",
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#13161c",
    fontSize: 16,
  },
});

export default Game3Screen;
