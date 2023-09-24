import { useContext } from "react";
import { AuthContext } from "../AuthContextProvider";
import Deeper from "./deeper";

const Deep = () => {
    const nekakavTekst = useContext(AuthContext)
    return (
        <>
        <div>Deep</div>
        <p>Value od context is: {nekakavTekst}</p>
        <Deeper />
        
        </>
    )
}

export default Deep