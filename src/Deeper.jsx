import {useContext} from 'react'
import { AuthContext } from "./AuthContextProvider";


const Deeper = () => {
    const [signedIn, setSignedIn] = useContext(AuthContext)

  return (
    <>
    <div>Deeper is user signed in: {String(signedIn)}</div>
    {/* <button onClick={() => setSignedIn(prev => !prev)}>Change</button> */}
    </>
  )
}

export default Deeper