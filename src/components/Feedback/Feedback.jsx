
function Feedback({ value: { good, neutral, bad }, total, positive}) {
    if (good || neutral || bad != 0) {
        return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>  
                <p>Total: {total}</p> 
                <p>Positive: {positive}%</p> 
     </>
     )  
    } 
  
 }

export default Feedback