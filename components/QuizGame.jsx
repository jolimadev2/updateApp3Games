import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const preguntas = [
    {
      pregunta: "What is the Olympic motto?",
      opciones: ["Higher, Faster, Stronger", "Higher, Better, Stronger", "Higher, Faster, Better", "Higher, Better, Faster"],
      respuestaCorrecta: 0,
      explicación:
        "The Olympic motto is 'Citius, Altius, Fortius', which is Latin for 'Faster, Higher, Stronger'.",
    },
    {
      pregunta: "In which year were the first modern Olympic Games held?",
      opciones: ["1896", "1900", "1912", "1920"],
      respuestaCorrecta: 0,
      explicación:
        "The first modern Olympic Games were held in Athens, Greece, in 1896.",
    },
    {
      pregunta: "Which country has won the most Olympic medals?",
      opciones: ["China", "Germany", "USA", "Russia"],
      respuestaCorrecta: 2,
      explicación: "The United States has won the most Olympic medals.",
    },
    {
      pregunta: "Which sport is known as 'the sport of kings' and is part of the Summer Olympics?",
      opciones: ["Equestrian", "Tennis", "Polo", "Fencing"],
      respuestaCorrecta: 0,
      explicación:
        "Equestrian, often referred to as 'the sport of kings', is part of the Summer Olympics.",
    },
    {
      pregunta: "Which athlete has won the most Olympic gold medals?",
      opciones: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Paavo Nurmi"],
      respuestaCorrecta: 1,
      explicación:
        "Michael Phelps, an American swimmer, has won the most Olympic gold medals.",
    },
  ];

  const handleAnswer = (respuestaSeleccionada) => {
    if (!showExplanation) {
      const preguntaActual = preguntas[currentQuestion];
      if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        setScore(score + 1);
      }
      setShowExplanation(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setShowExplanation(false);
      }, 4000);
    }
  };

  const reiniciarQuiz = () => {
    setCurrentQuestion(0);
    setShowExplanation(false);
    setScore(0);
  };

  const renderizarQuiz = () => {
    if (currentQuestion >= preguntas.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            QUIZ FINISHED {`\n`} 🎉 Thanks for participating! 🎉
          </Text>
          <Text style={styles.text}>
            {`\n`}Score: {score} / {preguntas.length}
          </Text>
          <TouchableOpacity style={styles.opcion} onPress={reiniciarQuiz}>
            <Text style={styles.text}>Retry Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    const { pregunta, opciones } = preguntas[currentQuestion];

    return (
      <View>
        <Text style={styles.pregunta}>{pregunta}</Text>
        {opciones.map((opcion, index) => (
          <TouchableOpacity
            key={index}
            style={styles.opcion}
            onPress={() => handleAnswer(index)}
            disabled={showExplanation}
          >
            <Text style={styles.text}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderizarExplicacion = () => {
    if (showExplanation && currentQuestion < preguntas.length) {
      const { explicacion } = preguntas[currentQuestion];
      return (
        <View style={styles.containerExplicacion}>
          <Text style={styles.explicacion}>Explanation:</Text>
          <Text style={styles.text}>{explicacion}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {renderizarQuiz()}
        {renderizarExplicacion()}
        {!showExplanation && (
          <ImageBackground
            // source={require("../assets/images/bgimg.png")}
            // style={{
            //   flex: 0,
            //   position: "absolute",
            //   top: 0,
            //   left: 0,
            //   right: 0,
            //   bottom: 0,
            // }}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  textTitle: {
    color: "#f0f0f0",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    padding: 24,
    paddingBottom: 10,
    backgroundColor: "black",
  },
  container: {
    padding: 40,
    backgroundColor: "black",
    width: 380,
    flexGrow: 1,
  },
  text: {
    color: "#f0f0f0",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 0,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#f0f0f0",
  },
  opcion: {
    backgroundColor: "#13161c",
    padding: 20,
    marginVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  containerExplicacion: {
    padding: 20,
    marginBottom: 40,
    backgroundColor: "#13161c",
    color: "#fff",
  },
  explicacion: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  // backgroundImage: {
  //   ...StyleSheet.absoluteFillObject,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  //   width: 350,
  //   height: 640,
  //   marginTop: 30,
  //   marginLeft: 20,
  //   // backgroundColor: "#F0F0F0",
  // },
});

export default QuizGame;
