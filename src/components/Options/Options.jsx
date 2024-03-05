// import Feedback from "../Feedback/Feedback"
import css from './Options.module.css';

function Options({ clicks, onTrack }) {
    return (
        <>
            <button className={css.btn} onClick={onTrack}>Good</button>
            <button className={css.btn} onClick={onTrack}>Neutral</button>
             <button className={css.btn} onClick={onTrack}>Bad</button>        
        </>
    )
 }

export default Options