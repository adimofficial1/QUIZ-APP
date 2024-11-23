import React, { useState } from 'react';
import styles from './QuizStart.module.css'

function QuizStart({ startQuiz }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    return (
        // <div className="container text-center">
        //   <h2>Welcome to QuizMania</h2>
        //   <p>Please read all the rules before you start.</p>
        //   <input
        //     type="text"
        //     className="form-control mb-3"
        //     placeholder="Full Name"
        //     value={name}
        //     onChange={(e) => setName(e.target.value)}
        //   />
        //   <select
        //     className="form-control mb-3"
        //     onChange={(e) => setCategory(e.target.value)}
        //     value={category}
        //   >
        //     <option value="">Select Topic</option>
        //     <option value="Javascript Basic">Javascript Basic</option>
        //     <option value="Angular Basic">Angular Basic</option>
        //   </select>
        //   <button
        //     className="btn btn-primary"
        //     onClick={() => startQuiz(name, category)}
        //     disabled={!name || !category}
        //   >
        //     Start Quiz
        //   </button>
        // </div>
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className={`${styles.quizCard} p-4 shadow`}>
                <h1 className="text-center mb-4">
                    <span className="text-danger">QUIZ</span>Mania
                </h1>
                <p className="text-center text-muted">Please read all the rules about this quiz before you start. 
                    <a href="#" className="text-danger text-decoration-none" data-bs-toggle="modal" data-bs-target="#quizRulesModal">Quiz rules</a>
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full name</label>
                        <input type="text" id="fullName" className="form-control" placeholder="Full name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Please select topic to continue</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="topic" id="javascriptBasic" value="javascript"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="javascriptBasic">Javascript Basic</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="topic" id="angularBasic" value="angular"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="angularBasic">Angular Basic</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="topic" id="reactJsAdvance" value="react"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="reactJsAdvance">React.js Advance</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="topic" id="flutter" value="flutter"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="flutter">Flutter</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-danger w-100" onClick={() => startQuiz(name, category)}
                        disabled={!name || !category}>Start Quiz</button>
                </form>
            </div>
        </div>
    );
}

export default QuizStart;
