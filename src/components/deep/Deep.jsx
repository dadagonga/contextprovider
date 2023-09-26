import Deeper from "../../deeper";
import styles from "./Deep.module.css"

const Deep = () => {
    return (
        <>
        <div><h3 className={styles.h3}>Deep</h3></div>
        <Deeper />
        
        </>
    )
}

export default Deep