import './App.css';
import Home from './Home';
import Success from './Success';
import { useState } from 'react';

function App() {
  const [successful, setSuccessful] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  let content;

  if(!successful) {
    content = <Home successful={setSuccessful} emailAddress={setEmailAddress}/>
  } else {
    content = <Success successful={setSuccessful} emailAddress={emailAddress}/>
  }

  return (
      <div className="App">
        <div className="content">
          {content}
        </div>
      </div>
  );
}

export default App;
