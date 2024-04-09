import css from './Options.module.css'

export default function Options({updateFeedback, resetFeedback}) {
    return (
        <div className={css.buttonsList}>
            <button className={css.button} onClick={() => {updateFeedback('good')}}>Good</button>
            <button className={css.button} onClick={() => {updateFeedback('neutral')}}>Neutral</button>
            <button className={css.button} onClick={() => {updateFeedback('bad')}}>Bad</button>
            {resetFeedback > 0 ? <button className={css.button} onClick={() => {updateFeedback('reset')}}>Reset</button> : null}
        </div>
    )
}