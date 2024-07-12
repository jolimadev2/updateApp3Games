import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Animated,
} from "react-native";

/**
 * PenaltyShootoutGame Component
 * This component renders a penalty shootout game using hooks and React Native elements.
 * @returns {JSX.Element} PenaltyShootoutGame component
 */

const PenaltyShootoutGame = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [pressAnim] = useState(new Animated.Value(1));

   /**
   * Handles the shooting logic, determining if the player scores or misses.
   * @param {number} direction - The direction the player shoots (0: left, 1: center, 2: right)
   */
  const handleShoot = (direction) => {
    const goalkeeperDirection = Math.floor(Math.random() * 3); // 0: izquierda, 1: centro, 2: derecha

    if (direction === goalkeeperDirection) {
      Alert.alert("Missed!", "🧤 The goalkeeper saved the goal.");
    } else {
      Alert.alert("Goal!", "⚽️ You scored!");
      setScore(score + 1);
    }

    setAttempts(attempts - 1);

    if (attempts - 1 === 0) {
      setGameOver(true);
    }
  };

  const animatePress = () => {
    Animated.sequence([
      Animated.timing(pressAnim, { toValue: 0.8, duration: 100, useNativeDriver: true }),
      Animated.timing(pressAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(5);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.score}>Score: {score}</Text>
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Play Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/soccer-field.png')} style={styles.fieldImage} />
      <Text style={styles.title}>Penalty Shootout</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.attempts}>Attempts Left: {attempts}</Text>
      <View style={styles.buttonsContainer}>
        <AnimatedTouchableOpacity
          style={[styles.button, { transform: [{ scale: pressAnim }] }]}
          onPress={() => { handleShoot(0); animatePress(); }}
        >
          <Text style={styles.buttonText}>⬅️</Text>
        </AnimatedTouchableOpacity>
        <AnimatedTouchableOpacity
          style={[styles.button, { transform: [{ scale: pressAnim }] }]}
          onPress={() => { handleShoot(1); animatePress(); }}
        >
          <Text style={styles.buttonText}>⬆️</Text>
        </AnimatedTouchableOpacity>
        <AnimatedTouchableOpacity
          style={[styles.button, { transform: [{ scale: pressAnim }] }]}
          onPress={() => { handleShoot(2); animatePress(); }}
        >
          <Text style={styles.buttonText}>➡️</Text>
        </AnimatedTouchableOpacity>
      </View>
    </View>
  );
};

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
  },
  fieldImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  title: {
    fontSize: 24,
    color: "#f0f0f0",
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    color: "#f0f0f0",
    marginBottom: 10,
  },
  attempts: {
    fontSize: 18,
    color: "#f0f0f0",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#13161c",
    padding: 20,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#f0f0f0",
    fontSize: 16,
  },
});

export default PenaltyShootoutGame;
