
import css from './Options.module.css';

function Options( { onTrack, valueTotal, onReset }) {

    return (
        <>
            <button className={css.btn} onClick={() => onTrack('good')}>Good</button>
            <button className={css.btn} onClick={() => onTrack('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onTrack('bad')}>Bad</button>      
            { valueTotal > 0 && <button className={css.btn} onClick={onReset}>Reset</button>}
        </>
    )
 }

export default Options
