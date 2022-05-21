import { createContext, useReducer } from 'react';
import { signalReducer } from '../reducers/signalReducer.js';

export const SignalContext = createContext();

export function SignalContextProvider(props) {
  const initialState = {
    playVideo: null, // hold video play time
    pauseVideo: null, // hold command timestamp

    // when transition is true, no player related socket event will
    // be emitted to the server. This prevents unintentional back and forth
    // event passing and provides consistency in video seek/pause.
    transition: false,
    videoChanging: false,
  };

  const [signalData, dispatch] = useReducer(signalReducer, initialState);

  return (
    <SignalContext.Provider value={{ signalData, dispatch }}>
      {props.children}
    </SignalContext.Provider>
  );
}
