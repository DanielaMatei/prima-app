 import Todo from "../Todo/Todo";
 import { useState } from "react";


 function Lista({listaTask, setListaTask, setStr }) {
  
    const handleDelete= (e) => {
        console.log('ciao');
        let listaAppoggio1 =[...listaTask]
           listaAppoggio1.splice(e.target.id,1)  // mi definisce quale elemento mi cancella
           setListaTask(listaAppoggio1)
   
       // let valore = e.target.value 
       // console.log(valore);
   }
   const hendleChange= (e, indice) => {
    let arrayEditor = [...listaTask]
    console.log(e.target.value);
    
    arrayEditor[indice]=e.target.value
    setListaTask(arrayEditor)
    
  }
  const handleModifica = (e, index) => {
    let stato = document.getElementById("input" + index).disabled;
    
    // se stato è uguale a TRUE lo aggiorniamo con FALSE , testo bottone VaLUE = DISABILITA
    if (stato){
        document.getElementById("input"+index).disabled = false; // al click andiamo ad abilitare l'input
        e.target.value="Abilita"
    }else{
    document.getElementById("input"+index).disabled = true;
      //se stato è uguale a FALSE lo aggiorniamo con TRUE , testo bottone VaLUE = ABILITA
      e.target.value="Modifica"
    }   
   
  
  }
 

   


        return (
            <div className="list">
            <ul>
            {listaTask.map((elementoli, index) =>(
                <li key={index}>
                    <input type="text" value={elementoli}  onChange={(e)=>hendleChange(e,index)} disabled = {true} id={"input" + index}  />
                    <button type="button" onClick={handleDelete} id={index} >X</button>
                    <input type="button" onClick={(e)=> handleModifica(e, index)} value = "Modifica" />
                     </li>
            ))}
            </ul>
            
            <p> impegni in lista: {listaTask.length}</p>
        </div>
        )  
    
 }

  export default Lista

//   onChange={(e)=>hendleChange(e,index)} -> passiamo l 'evento e anche la nostra variabile
// abbiamo bisogno dell'indice e richiamrlo nella funzione