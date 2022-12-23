import "./App.css";
import { useState } from "react";
function App() {
  const [showResults, setShowResults] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);

  const wordList = [
    {
      id: 1,
      word: "slowly",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: true },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 2,
      word: "ride",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: true },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 3,
      word: "bus",
      options: [
        { id: 0, text: "noun", isCorrect: true },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 4,
      word: "commute",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: true },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 5,
      word: "emissions",
      options: [
        { id: 0, text: "noun", isCorrect: true },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 6,
      word: "walk",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: true },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 7,
      word: "fast",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: true },
      ],
    },
    {
      id: 8,
      word: "car",
      options: [
        { id: 0, text: "noun", isCorrect: true },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 9,
      word: "crowded",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: true },
      ],
    },
    {
      id: 10,
      word: "arrival",
      options: [
        { id: 0, text: "noun", isCorrect: true },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 11,
      word: "emit",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: true },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 12,
      word: "independent",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: true },
      ],
    },
    {
      id: 13,
      word: "convenient",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: true },
      ],
    },
    {
      id: 14,
      word: "lane",
      options: [
        { id: 0, text: "noun", isCorrect: true },
        { id: 1, text: "adverb", isCorrect: false },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
    {
      id: 15,
      word: "heavily",
      options: [
        { id: 0, text: "noun", isCorrect: false },
        { id: 1, text: "adverb", isCorrect: true },
        { id: 2, text: "verb", isCorrect: false },
        { id: 3, text: "adjective", isCorrect: false },
      ],
    },
  ];
  const scoresList = [
    20, 90, 100, 50, 10, 50, 60, 0, 60, 10, 90, 30, 100, 30, 20, 90, 40, 20, 10,
    60, 50, 100, 50, 80, 50, 80, 60, 80, 10, 40,
  ];

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);

    }
    if (currentWord + 1 < wordList.length) {
      setCurrentWord(currentWord + 1);
    } else {
      setShowResults(true);
    }
  };
  /* Resets the game back to default */
  const restartQuiz = () => {
    setScore(0);
    setCurrentWord(0);
    setShowResults(false);
  };
  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Part of Speech Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {wordList.length} correct - (
            {(score / wordList.length) * 100}%)
          </h2>
          <button onClick={() => restartQuiz()}>Restart Quiz</button>
        </div>
      ) : (
        /* 5. words Card  */
        <div className="question-card">
          {/* Current word  */}
          <h2>
            Word: {currentWord + 1} out of {wordList.length}
          </h2>
          <h3 className="question-text">{wordList[currentWord].word}</h3>

          {/* List of possible answers  */}
          <ul>
            {wordList[currentWord].options.map((option) => {
              return (
                <li 
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default App;
