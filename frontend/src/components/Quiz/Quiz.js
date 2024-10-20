import React, { useState } from 'react';
import './Quiz.css';
function Quiz() {
  const questions = [
    {
      questionText: "What is the capital of France",
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla",
      answerOptions: [
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Jack Ma', isCorrect: false },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Steve Jobs', isCorrect: false },
      ],
    },
    {
      questionText: "When is India's Independence Day",
      answerOptions: [
        { answerText: '11 Aug', isCorrect: false },
        { answerText: '16 Jun', isCorrect: false },
        { answerText: '12 Dec', isCorrect: false },
        { answerText: '15 Aug', isCorrect: true },
      ],
    },
    {
      questionText: "Who is the Prime Minister of India",
      answerOptions: [
        { answerText: 'Manmohan Singh', isCorrect: false },
        { answerText: 'Narendra Modi', isCorrect: true },
        { answerText: 'Rahul Gandhi', isCorrect: false },
        { answerText: 'Amit Shah', isCorrect: false },
      ],
    },
   {
    questionText : "What is full form of WHO",
    answerOptions : [
      {answerText : "World Hail Organization", isCorrect : false},
      {answerText : "Work Health Organization", isCorrect: false},
      {answerText : "World Health Organization", isCorrect : true},
      {answerText : "Work Health Organization", isCorrect :false},

    ],
  },
   {
    questionText : "Who is the Iron Lady of India",
    answerOptions : [
      {answerText : "Priyanka Gandhi", isCorrect : false},
      {answerText : "Sonia Gandhi", isCorrect: false},
      {answerText : "Pratiba Patil", isCorrect : true},
      {answerText : "Indira Gandhi", isCorrect :false},

    ],
  },
   {
    questionText : "Name the largest ocean in the World",
    answerOptions : [
      {answerText : "Indian Ocean", isCorrect : false},
      {answerText : "Pacific ocean", isCorrect: true},
      {answerText : "Atlantic Ocean", isCorrect : false},
      {answerText : "Artic Ocean", isCorrect :false},

    ],
  },
   {
    questionText : "Who created Bitcoin",
    answerOptions : [
      {answerText : "Satoshi Nakamoto", isCorrect : true},
      {answerText : " Kim Nakamoto", isCorrect: false},
      {answerText : "Bill Gates", isCorrect : false},
      {answerText : "Steve Jobs", isCorrect :false},

    ],
  },
   {
    questionText : "Which continent is known as the 'Dark' continent",
    answerOptions : [
      {answerText : "Asia", isCorrect : false},
      {answerText : "Africa", isCorrect: true},
      {answerText : "Australia", isCorrect : false},
      {answerText : "Europe", isCorrect :false},

    ],
  },
   {
    questionText : "Which palnet is known as Red Planet",
    answerOptions : [
      {answerText : "Earth", isCorrect : false},
      {answerText : "Saturn", isCorrect: false},
      {answerText : "Venus", isCorrect : false},
      {answerText : "Mars", isCorrect :true},

    ],
  },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='Quiz'>
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
        
     
      ) : (
        <>
          <div className='score-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
