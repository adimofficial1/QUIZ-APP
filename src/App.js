import React, { useState } from 'react';
import QuizStart from './components/QuizStart/QuizStart';
import QuizRules from './components/QuizRules/QuizRules';
import QuizQuestion from './components/QuizQuestions/QuizQuestion';
import QuizResult from './components/QuizResult';
import questions from './data/questions';

function App() {
  const [step, setStep] = useState(1); // 1: Start, 2: Rules, 3: Quiz, 4: Result
  const [name, setName] = useState('');
  const [category, setCategory] = useState('javascript');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, skipped: 0 });

  const startQuiz = (userName, quizCategory) => {
    setName(userName);
    setCategory(quizCategory);
    setStep(2);
  };

  const nextQuestion = (isCorrect, skipped) => {
    if (isCorrect) setScore({ ...score, correct: score.correct + 1 });
    else setScore({ ...score, incorrect: score.incorrect + 1 });

    if(skipped) setScore({ ...score, skipped: score.skipped + 1 });

    if (currentQuestionIndex < questions[category].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep(3);
    }
  };

  const retakeQuiz = () => {
    setStep(1);
    setCurrentQuestionIndex(0);
    setScore({ correct: 0, incorrect: 0, skipped: 0 });
  };

  return (
    <div className="App">
      {step === 1 && <QuizStart startQuiz={startQuiz} />}
      {step === 2 && (
        <QuizQuestion
          question={questions[category][currentQuestionIndex]}
          nextQuestion={nextQuestion}
          finishQuiz={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <QuizResult
          score={score}
          totalQuestions={questions[category].length}
          retakeQuiz={retakeQuiz}
        />
      )}
    </div>
  );
}

export default App;
