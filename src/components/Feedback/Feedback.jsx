
function Feedback({ value: { good, neutral, bad }}) {
    if (good || neutral || bad != 0) {
        return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>  
     </>
     )  
    } 
  
 }

export default Feedback