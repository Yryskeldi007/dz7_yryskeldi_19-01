import React from 'react';



function App1() {
  const [ seconds, setSeconds ] = React.useState(60);
  const [ timerActive, setTimerActive ] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 100, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [ seconds, timerActive ]);

  return (
    <div>
      {seconds
        ? <React.Fragment>
            <button onClick={() => setTimerActive(!timerActive)}>
              {timerActive ? 'stop' : 'start'}
            </button>
            <div>{seconds}</div>
          </React.Fragment>
        : <button onClick={() => setSeconds(60)}>ещё раз</button>
      }
    </div>
  );
}
export default App1