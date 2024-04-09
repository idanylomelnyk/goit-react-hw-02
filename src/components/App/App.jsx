import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import NoFeedback from "../NoFeedback/NoFeedback";
import css from './App.module.css'


export default function App() {

  const [feedback, setFeedback] = useState(() => {
    const storageData = localStorage.getItem('feedback');

    return storageData ? JSON.parse(storageData) : {
      good: 0, neutral: 0, bad: 0
    }
  });

    const updateFeedback = (feedbackType) => {

      if (feedbackType === 'reset') {
       return setFeedback({good: 0, neutral: 0, bad: 0})
      }

      setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

    useEffect(() => {
      localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback]);


  return (
    <div className={css.card}>
      <Description />
      <Options  updateFeedback={updateFeedback} resetFeedback={totalFeedback}/>

      {totalFeedback === 0 ? <NoFeedback />
      : <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}/>}
    </div>
  )
}