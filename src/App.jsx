
import './App.css'

import AuthContextProvider from './AuthContextProvider'
import Deep from './components/deep/Deep'
import Display from './components/signed/Display'
import SignInButton from './SignInButton'

function App() {

  return (
    <AuthContextProvider>
      <h1>React context</h1>
      <SignInButton />
      <Display />
      <Deep />
    </AuthContextProvider>
  )
}

export default App