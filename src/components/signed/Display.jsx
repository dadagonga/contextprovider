import { useContext } from 'react'
import { AuthContext } from '../../AuthContextProvider'
import styles from "./Display.module.css"

const Display = () => {
  const [signedIn, setSignedIn] = useContext(AuthContext)
    return (
    <div className={(signedIn === true ? styles.signedIn : styles.signedOut)}>{signedIn ? "user is signed in" : "please sign in"}</div>
  )
}

export default Display