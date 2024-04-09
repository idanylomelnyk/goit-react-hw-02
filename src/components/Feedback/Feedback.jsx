import css from './Feedback.module.css'

export default function Feedback({good, neutral, bad, total, positive}) {
    return(
        <div className={css.feedbackList}>
           <p className={css.feedbackItem}>Good: {good}</p>
           <p className={css.feedbackItem}>Neutral: {neutral}</p>
           <p className={css.feedbackItem}>Bad: {bad}</p>
           <p className={css.feedbackTotal}>Total: {total}</p>
           <p className={css.feedbackPositive}>Positive: {positive}%</p>
        </div>
    )
}