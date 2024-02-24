import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css';

import Options from '../Options/Options';
// import Feedback from '../Feedback/Feedback';


function App() {
  const [clicks, setClicks] = useState({
	good: 0,
	neutral: 0,
	bad: 0
});

  
  const updateFeedback = feedbackType => {
  setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
  });
  }
  
  return (
    <>
      <>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </>
      
     
      <Options value={clicks.good} onTrack={() => updateFeedback('good')}>Good</Options>
      <Options value={clicks.neutral} onTrack={() => updateFeedback('neutral')}>Neutral</Options>
      <Options value={clicks.bad} onTrack={() => updateFeedback('bad')}>Bad</Options> 
    
      {/* <Options value={clicks.good} onTrack={updateFeedback}>Good</Options>
      <Options value={clicks.neutral} onTrack={updateFeedback}>Neutral</Options>
      <Options value={clicks.bad} onTrack={updateFeedback}>Bad</Options>  */}
            
    </>
  );
}

export default App
