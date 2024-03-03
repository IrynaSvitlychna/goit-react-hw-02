import { useEffect, useState } from 'react';

// import css from './App.module.css';

import Options from '../Options/Options';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const getInitialclicks = () => {
  const savedClickes = window.localStorage.getItem("saved-clicks");
  if (savedClickes !== null) {
    return JSON.parse(savedClickes);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0
  }
}
  
function App() {
  const [clicks, setClicks] = useState(getInitialclicks);
 
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log(totalFeedback);

  const positivFeedback = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100);
   
  const updateFeedback = feedbackType => {
  setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
  });
  }

  const handleReset = () => {
    setClicks({
    good: 0,
    neutral: 0,
    bad: 0
  });
  };
  
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
   }, [clicks]);
  
  return (
    <>
     
    < Description />
     
      <Options value={clicks.good} onTrack={() => updateFeedback('good')}>Good</Options>
      <Options value={clicks.neutral} onTrack={() => updateFeedback('neutral')}>Neutral</Options>
      <Options value={clicks.bad} onTrack={() => updateFeedback('bad')}>Bad</Options> 

      { clicks === 0 && <Notification total={totalFeedback} />}


      {(totalFeedback != 0) && (<button onClick={handleReset} >Reset</button>)}
      
         
      <Feedback value={clicks} total={totalFeedback} positive={positivFeedback} />    
      
    </> 
  );
}

export default App
