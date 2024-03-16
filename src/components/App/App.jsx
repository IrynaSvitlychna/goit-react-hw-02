import { useEffect, useState } from 'react';


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
     
    <Options valueTotal={totalFeedback} onTrack={updateFeedback} onReset={handleReset} />

    { totalFeedback === 0 && <Notification total={totalFeedback} />}
          
    { totalFeedback > 0 && <Feedback value={clicks} total={totalFeedback} positive={positivFeedback} />}    
      
    </> 
  );
}

export default App

