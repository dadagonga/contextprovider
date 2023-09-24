import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

const Display = () => {
  const [signedIn, setSignedIn] = useContext(AuthContext)
    return (
    <div>{signedIn ? "user is signed in" : "please sign in"}</div>
  )
}

export default Display