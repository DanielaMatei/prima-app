import { useState } from "react"
import Lista from "../Lista/Lista"
import "./Todolist.css"
import Todoform from "../Todoform/Todoform";

function Todo () {
   
 //senza lo useState react non stampa inuovi valori dell'array
 const [listaTask , setListaTask, setStr] = useState([]); // stiamo creando un nuovo stato inizia arrai vuoto
 // let listaTask = ['spesa', 'studio', 'ripasso', 'esercizi']
 


    return(
        <>
        <div className="contenitore">
            {/* {submit, change,stampa,str } */}
            <Todoform  listaTask={listaTask } setListaTask= {setListaTask} setStr={setStr}  />
    
        <Lista listaTask={listaTask} setListaTask= {setListaTask} setStr={setStr}/>
    </div>
    </>
    )




}


export default Todo