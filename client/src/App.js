import { UserContextProvider } from './contexts/UserContext'
import { SignalContextProvider } from './contexts/SignalContext'
import RoutesPath from './Routes'

function App() {
  return (
    <UserContextProvider>
      <SignalContextProvider>
        <RoutesPath />
      </SignalContextProvider>
    </UserContextProvider>
  );
}

export default App
