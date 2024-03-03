// import Feedback from "../Feedback/Feedback"
import css from './Options.module.css';

function Options({ onTrack, children }) {
    return (
        <>
            <button className={css.btn} onClick={onTrack}>{children}</button>
                     
        </>
    )
 }

export default Options