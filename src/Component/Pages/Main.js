import React, { useEffect, useReducer } from 'react';
import Loading from './Loading';
import Error from './Error';
import StartScreen from './StartScreen';
import Questions from './Questions';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';
import '../Pages/css/menu.css'
const sec_par_Que=30;
const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',

      };

    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return { ...state, status: 'active',secondRemaining :state.questions.length * sec_par_Que};
    case "newAnswer":
      const quetion = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === quetion.correctOption ? state.points + quetion.points
            : state.points,
      };
    case "nextQuestion":
      if (state.index === state.questions.length - 1) {
        return {
          ...state,
          status: "finished",
        };


      } return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };

    case 'tick':
      return {
        ...state, secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? 'finished' : state.status
      }
    // return{...state,points:0,highscore:0,index:0  }

    default:
      throw new Error('Action unknown');
  }
}
function Main() {
  const [{ questions, status, index, answer, points, secondRemaining }, dispatch] = useReducer(reducer, initialState);
  const numOfQue = questions.length;
  const maxPossiblePoint = questions.reduce((a, b) => a + b.points, 0);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: 'dataReceived', payload: data })
      )
      .catch(() => dispatch({ type: 'dataFailed' }));
  }, []);


  return (
  <div className="app">
    {/* NAVBAR */}
    <nav className="navbar">
      <h2 className="logo">🧠 React Quiz</h2>
      {status === "active" && (
        <div className="nav-info">
          <span>Score: {points}</span>
        </div>
      )}
    </nav>

    {/* MAIN CONTENT */}
    <main className="main">
      {status === 'loading' && <Loading />}
      {status === 'error' && <Error />}
      {status === 'ready' && (
        <StartScreen numOfQue={numOfQue} dispatch={dispatch} />
      )}

      {status === 'active' && (
        <>
          <Progress
            numQuestion={numOfQue}
            index={index}
            points={points}
            maxPossiblePoint={maxPossiblePoint}
            answer={answer}
          />
          <Questions
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
            index={index}
          />
          <NextButton dispatch={dispatch} answer={answer} />
          <Footer>
            <Timer dispatch={dispatch} secondRemaining={secondRemaining} />
          </Footer>
        </>
      )}

      {status === "finished" && (
        <FinishScreen
          maxPossiblePoints={maxPossiblePoint}
          dispatch={dispatch}
          points={points}
        />
      )}
    </main>
  </div>
);
}

export default Main;
