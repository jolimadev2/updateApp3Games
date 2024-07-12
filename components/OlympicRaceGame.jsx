import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated, Easing } from 'react-native';


/**
 * 
 * This component renders a mini runner game where the player can control a runner
 * that moves across the screen. The game uses React Native Animated and timing to 
 * animate the runner's movement.
 * 
 * @returns {JSX.Element} The rendered OlympicRaceGame component.
 */
const OlympicRaceGame = () => {
  const [progress, setProgress] = useState(0);
  const [pressAnim] = useState(new Animated.Value(1));
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  const timerDuration = 4000;

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setGameOver(true);
    }, timerDuration);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  /**
   * Handles the runner's movement when user taps the Run button.
   */
  const handleRun = () => {
    setProgress(progress + 10); 
    clearTimer(); // Clear existing timer when user runs
    startTimer(); // Start new timer after user runs
  };

  const animatePress = () => {
    Animated.sequence([
      Animated.timing(pressAnim, { toValue: 0.8, duration: 100, useNativeDriver: false, easing: Easing.linear }),
      Animated.timing(pressAnim, { toValue: 1, duration: 100, useNativeDriver: false, easing: Easing.linear }),
    ]).start();
  };

  /**
   * Function that Start timer again on restart
   */
  const handleRestart = () => {
    setProgress(0);
    setGameOver(false);
    startTimer(); 
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearTimer(); 
    };
  }, []); 
  if (gameOver) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.resultText}>Time's up! You did your best.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleRestart}
        >
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olympic Race</Text>
      <View style={styles.trackContainer}>
        <ImageBackground source={require('../assets/images/track.png')} style={styles.trackImage}>
          <Animated.Image
            source={require('../assets/images/runner.png')}
            style={[
              styles.runnerImage,
              { bottom: progress }, // Adjusted to move the runner upwards
              { transform: [{ scale: pressAnim }] }
            ]}
          />
        </ImageBackground>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleRun();
          animatePress();
        }}
      >
        <Text style={styles.buttonText}>Run</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
  },
  title: {
    fontSize: 24,
    color: '#f0f0f0',
    marginBottom: 20,
  },
  trackContainer: {
    width: 400,
    height: 420,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trackImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  runnerImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: 105, 
  },
  button: {
    backgroundColor: '#13161c',
    padding: 20,
    width: 100,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#f0f0f0',
    fontSize: 16,
    textAlign: 'center',
  },
  resultText: {
    fontSize: 20,
    color: '#f0f0f0',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default OlympicRaceGame;
