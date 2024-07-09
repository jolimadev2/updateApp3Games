import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  // Array de objetos con las preguntas p/el quiz, esto podemos mejorarlo con Firebase y actualizar las preguntas desde ahí.
  const preguntas = [
    {
      pregunta: "What is the next number in the sequence: 1, 2, 4, 8, 16, ...?",
      opciones: ["32", "64", "256", "512"],
      respuestaCorrecta: 1,
      explicación:
        "The sequence is a geometric progression, in which each number is twice the previous one. Therefore, the next number is 2 * 16 = 32.",
    },
    {
      pregunta: "Which animal has more legs?",
      opciones: ["The octopus", "The spider", "The starfish", "The earthworm"],
      respuestaCorrecta: 3,
      explicación:
        "The starfish has up to 50 legs, making it the animal with the most legs.",
    },
    {
      pregunta: "What is the capital of France?",
      opciones: ["París", "Saint Tropez", "Lyon", "Bordeaux"],
      respuestaCorrecta: 1,
      explicación: "Paris is the capital of France.",
    },
    {
      pregunta: "What is the result of 2 + 2 * 2?",
      opciones: ["6", "8", "10", "12"],
      respuestaCorrecta: 2,
      explicación:
        "The order of the mathematical operations is: 1. Multiplication and division 2. Addition and subtractionTherefore, the result is 2 * 2 = 4, then 4 + 2 = 6.",
    },
    {
      pregunta: "What is the answer to life, the universe and everything?",
      opciones: ["32", "The answer is 42", "No answer", "I don't know."],
      respuestaCorrecta: 1,
      explicación:
        "The answer to life, the universe and everything is 42, according to Douglas Adams' novel 'The Hitchhiker's Guide to the Galactic Hitchhiker'.",
    },
  ];

  // Logica para setear las respuestas, como ven recibiimos como param un dato tipo number
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
  // Función para reiniciar el quiz
  const reiniciarQuiz = () => {
    setCurrentQuestion(0);
    setShowExplanation(false);
    setScore(0);
  };

  //Renderiza el quiz con las preguntas y opciones correspondientes, despues se reincia el quiz dandole click:
  const renderizarQuiz = () => {
    if (currentQuestion >= preguntas.length) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            QUIZ FINISHED {`\n`} 🎉¡Thanks to participate!🎉
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
        {/*Ver si sacar o no la pregunta de abajo */}
        {/* <Text style={styles.text}>Por favor, responde la siguiente pregunta:</Text> */}
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
    <>
      <View style={styles.container}>
        {renderizarQuiz()}
        {renderizarExplicacion()}

        {showExplanation ? null : (
          //Esta opcion va a ser muy buena para escoger imagenes de la tematica del quiz
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
    </>
  );
};

const styles = StyleSheet.create({
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
