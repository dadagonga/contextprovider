import {useContext} from 'react'
import { AuthContext } from "../AuthContextProvider";


const Deeper = () => {
const nekakavTekst = useContext(AuthContext)

  return (
    <div>Deeper {nekakavTekst}</div>
  )
}

export default Deeper