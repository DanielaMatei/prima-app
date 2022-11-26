import { useState } from "react";
import "./Todolist.css";


function Todo_1() {
    let arrayReset= ["task1", "task2", "task3"]
    const [array,setArray] = useState (arrayReset) // ([])
    const [valore, setValore] = useState ("")
    // let valore = "" // stringa


    const handleChange = (e)=>{
        setValore(e.target.value)
       
    }
     const hendleSubmit = (e)=> {
     e.preventDefault();
     console.log(array);
     let arrayMomentaneo = [...array, valore]
     setArray(arrayMomentaneo)
     setValore ("")

    }
return(
<>
<div className="contenitore">
    <form onSubmit={hendleSubmit}>
        <input type="text" onChange={handleChange} value={valore} defaultValue />
        <button id="btn" type="submit">Aggiungi</button>
    </form>
    <div className="list">
            <ul>
                {array.map(( elementili, index ) =>
                  <li key={index}>{elementili}</li>
                 )}
                
            </ul>
            
    </div>
</div>
</>
)
}

export default Todo_1