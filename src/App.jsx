
import './App.css'

import AuthContextProvider from '../AuthContextProvider'

import Deep from './Deep'

function App() {

  return (
    <AuthContextProvider>
        <h1>React context</h1>
    {/* <SignInButton />
    <Display /> */}
    <Deep />
    </AuthContextProvider>
  )
}

export default App