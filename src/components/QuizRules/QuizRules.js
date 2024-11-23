import styles from './QuizRules.module.css';

function QuizRules({ closeRules }) {
  return (
    // <div className="quiz-rules">
    //   <h3>Quiz Rules</h3>
    //   <p>- Each question comes with a 10-second timer.</p>
    //   <p>- You can skip or answer questions manually.</p>
    //   <p>- Final score will display correct, incorrect, and skipped answers.</p>
    //   <button className="btn btn-secondary" onClick={closeRules}>
    //     Close Rules
    //   </button>
    // </div>
    <div className="modal fade" id="quizRulesModal" tabindex="-1" aria-labelledby="quizRulesModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className={`${styles.modalContent}`}>
          <div className="modal-header">
            <h5 className="modal-title text-danger" id="quizRulesModalLabel">Quiz rules</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="rule-section mb-3">
              <h6 className="bg-light p-2 rounded">10-Second Timer</h6>
              <ul>
                <li>Each question comes with a 10-second timer.</li>
                <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
              </ul>
            </div>
            <div className="rule-section mb-3">
              <h6 className="bg-light p-2 rounded">Manual Navigation</h6>
              <ul>
                <li>You can navigate to the next question manually before the timer expires.</li>
                <li>Use the “Next” button to move ahead if you’re ready before the timer runs out.</li>
              </ul>
            </div>
            <div className="rule-section">
              <h6 className="bg-light p-2 rounded">Final Score and Performance Message</h6>
              <ul>
                <li>After all questions are answered, your final score will be displayed.</li>
                <li>Based on your performance, you will receive a personalized message:
                  <ul>
                    <li><b>Great job!</b> If you score above 80%.</li>
                    <li><b>Well done!</b> If you score between 60% and 80%.</li>
                    <li><b>Keep practicing!</b> If you score below 60%.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeRules}>
              Close Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizRules;
