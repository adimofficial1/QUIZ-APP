function QuizResult({ score, totalQuestions, retakeQuiz }) {
    const percentage = Math.round((score.correct / totalQuestions) * 100);
  
    return (
      <div className="quiz-result text-center">
        <h2>{percentage >= 60 ? 'Congratulations!' : 'Keep Practicing!'}</h2>
        <p>Your Score: {percentage}%</p>
        <p>
          Correct: {score.correct}, Incorrect: {score.incorrect}, Skipped: {score.skipped}
        </p>
        <button className="btn btn-primary" onClick={retakeQuiz}>
          Retake Quiz
        </button>
      </div>
    );
  }
  
  export default QuizResult;
  