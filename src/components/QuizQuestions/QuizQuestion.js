import React, { useState, useEffect } from 'react';
import styles from './QuizQuestion.module.css';

function QuizQuestion({ question, nextQuestion, finishQuiz }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      nextQuestion(false); // If time runs out, go to the next question
      setTimer(10); // Reset the timer for the next question
      return; // Exit early to avoid unnecessary interval setup
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, [timer, nextQuestion]);

  const handleNext = (isCorrect = false, skipped) => {
    nextQuestion(isCorrect, skipped);
    setSelectedOption('');
    setTimer(10);
  };

  const handleSkip = () => {
    // Skip the current question
    handleNext(false, true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  return (
    <div className="container mt-5">
      <div className={`${styles.quizCard} p-4 rounded shadow`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="quiz-title">Quiz<span className="brand-name">Mania</span></h2>
          <button className="btn btn-outline-danger btn-sm">Exit Quiz</button>
        </div>
        {/* <div className="progress mb-3">
          <div className="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div> */}
        <div className="question-section mb-3">
          {/* <p className="mb-2">1/10</p> */}
          <p>Time Left: {timer}s</p>
          <h5 className="question-text">{question.question}</h5>
        </div>
        <form>
          {question.options.map((option, index) => (
            <div key={index + 1} className="form-check mb-2">
              <input className="form-check-input" type="radio" name="question" id={`option${index + 1}`}
                // className={`btn btn-block ${selectedOption === option ? 'btn-primary' : 'btn-light'}`}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label className="form-check-label" htmlFor={`option${index + 1}`}>
                {option}
              </label>
            </div>
          ))}
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-light" onClick={handleSkip}>Skip this question</button>
            <button type="button" className="btn btn-primary" onClick={() => handleNext(selectedOption === question.correct, false)}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuizQuestion;
