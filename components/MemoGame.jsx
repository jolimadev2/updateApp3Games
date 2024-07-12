import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text, Alert } from "react-native";





/**
 * This component render a memo game using an Array to storage the images to use for the cards
 * implementing a function i can flip the card to find the pairs and check if the cards match or not.
 * 
 * @returns {JSX.Element} The rendered the MemoGame component.
 */
const MemoGame = () => {
  const [cardsChosen, setCardsChosen] = useState([]); 
  const [cardsChosenIds, setCardsChosenIds] = useState([]); 
  const [cardsWon, setCardsWon] = useState([]);
  const [score, setScore] = useState(0);

  const [cardArray, setCardArray] = useState([
    {
      name: "boxing",
      img: require("../assets/images/boxing.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "swimming",
      img: require("../assets/images/swimming.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "javelin",
      img: require("../assets/images/javelin.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "gymnastic",
      img: require("../assets/images/gymnastic.png"),
      matched: false,
      isFlipped: false,
    },
    {
      name: "swimming",
      img: require("../assets/images/swimming.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "gymnastic",
      img: require("../assets/images/gymnastic.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "boxing",
      img: require("../assets/images/boxing.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "javelin",
      img: require("../assets/images/javelin.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "javelin",
      img: require("../assets/images/javelin.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "boxing",
      img: require("../assets/images/boxing.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "gymnastic",
      img: require("../assets/images/gymnastic.png"), 
      matched: false,
      isFlipped: false,
    },
    {
      name: "swimming",
      img: require("../assets/images/swimming.png"), 
      matched: false,
      isFlipped: false,
    },
  ]);

  const createBoard = () => {
    return cardArray.map((card, index) => (
      <TouchableOpacity key={index} onPress={() => flipCard(index)}>
        <Image
          source={card.isFlipped ? card.img : require("../assets/images/antorcha-olimpica.png")}
          style={{ width: 100, height: 100 }}
        />
      </TouchableOpacity>
    ));
  };

  const flipCard = (index) => {
    if (cardsChosenIds.length < 2 && !cardArray[index].isFlipped) {
      const updatedCardArray = [...cardArray];
      updatedCardArray[index].isFlipped = true;
      setCardsChosen([...cardsChosen, cardArray[index].name]);
      setCardsChosenIds([...cardsChosenIds, index]);
      setCardArray(updatedCardArray);
    }
  };

  const checkMatch = () => {
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (cardsChosen[0] === cardsChosen[1] && cardsChosen[0] !== "") {
      Alert.alert("   \n ¡Good for you!✅");
      setCardsWon([...cardsWon, cardsChosen[0]]);
      setScore(score + 1); 
      setTimeout(() => {
        setCardsChosenIds([]);
        setCardsChosen([]);
      }, 1000);

      if (cardsWon.length === cardArray.length / 2 - 1) {
        Alert.alert("\n ¡You WIN!🎁!");
      }
    } else {
      Alert.alert(" I'm sorry buddy, Try again ❌");
      const updatedCardArray = [...cardArray];
      updatedCardArray[optionOneId].isFlipped = false;
      updatedCardArray[optionTwoId].isFlipped = false;
      setCardArray(updatedCardArray);
      setTimeout(() => {
        setCardsChosenIds([]);
        setCardsChosen([]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (cardsChosenIds.length === 2) {
      checkMatch();
    }
  }, [cardsChosenIds]);

  return (
    <>
       <View style={styles.container}>
        <Text style={styles.scoreText}>
          SCORE: <Text style={styles.scoreValue}>{score}</Text>
        </Text>
        <View style={styles.grid}>{createBoard()}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    color: "#ffffff",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    padding: 24,
    paddingBottom: 10,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0c0c",
    paddingHorizontal: 20,
    width: 420,
    height: 420,
  },
  scoreText: {
    fontSize: 25,
    color: "#f0f0f0",
    marginBottom: 10,
  },
  scoreValue: {
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  grid: {
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 320,
    height: 420,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 10,
    alignItems: "center",
    paddingVertical: 10,
    paddingLeft: 7,
  },
});

export default MemoGame;
