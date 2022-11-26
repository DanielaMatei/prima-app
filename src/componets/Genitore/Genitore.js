import { useState } from "react"
import Figlio from "../Figlio/Figlio"

function Genitore() {
    let numero= 2
    // let nuovoValore
    const [nuovoValore, setNuovovalore] = useState(0)
    const handleClick = (valore) => {
        console.log("click");
        console.log("stampo valore nel genitre", valore);
        // nuovoValore = valore      non funzionava
        setNuovovalore(valore)
    }
    return(
        <div>
            <Figlio valore={numero} handleClick= {handleClick}/>
            <h2>genitore</h2>
            <p>Numero figlio : {numero}</p>
            <p>Numero genitore aggiunto {numero}</p>
           
        </div>
    )
}
export default Genitore
