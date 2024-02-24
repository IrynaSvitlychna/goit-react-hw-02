// import Feedback from "../Feedback/Feedback"

function Options({ onTrack, children }) {
    return (
        <>
            <button onClick={onTrack}>{children}</button>
                     
        </>
    )
 }

export default Options