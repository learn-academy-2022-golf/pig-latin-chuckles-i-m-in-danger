import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter(vowel => {
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!
      // We need an else if statement (conditionals) that will take in a word that starts with "qu" in the first syllable and then returns that word with "first syllable and "ay"
        //input: queen squeal
        //out: eenquay    ealsquay
        // Were going to use .indexOf("u")to first identify the location of "u".
        //we will subtract -1 as it relates to indexes to see if it is set to the index of "q"
          //Will also have to create another variable in the event there is another const that precedes q
        //then return the new variables added together + "ay"
        // Using slice to remove all values to the left of the "u", index will start at 0
        //Establish variable names for new conditional statements: newWord1 and newWord2  
        //Take a word that has no vowels other than "y" and adds the letters before y to the end and add ay
        //to identify y we will find the indexOf y
        //slice eachword from the zero index until index that is before y
        // another else if statement
        //new variable newWord3
      if(eachWord[0] === vowelsArray[0]) {
        return eachWord + "way"}
        else if(eachWord.indexOf("u") -1 === eachWord.indexOf("q")){
        let newWord1 = eachWord.slice(0, eachWord.indexOf("u") + 1)
        let newWord2 = eachWord.slice(eachWord.indexOf("u") + 1)
        return newWord2 + newWord1 + "ay"
      }else if(eachWord.indexOf("y") !== eachWord.indexOf[0]){
        let newWord3 = eachWord.slice(0, eachWord.indexOf("y")) 
        let newWord4 = eachWord.slice(eachWord.indexOf("y"))
       return newWord4 + newWord3 + "ay"
      }
      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App