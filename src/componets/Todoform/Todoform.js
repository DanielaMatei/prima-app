import {useState} from "react"

function Todoform ({listaTask , setListaTask }){
//  const [str, setStr ] =useState("")  // stringa vuota
const [str, setStr ] = useState("")  // stringa vuota
 
const change =(e) =>{  // nelle tonde gli argomenti
    console.log(e.target.value);
    setStr(e.target.value);   // stringa vuota che li do io il valore
    console.log(str);
    // listaTask.push(str) // aggiungo all array listaTask la stringa
};

const submit = (event) =>{
    // la funzione submit serve per assegnirli la gestione dell'arow function
    event.preventDefault(); // serve per non far ricaricare il form
    //  listaTask.push (str)
    // nel dom di react ci stampa solo un elemento del nostro array, il dom di react
    // non vede il secondo array => dobbiamo usare useSTATE
    let listaAppoggio =[...listaTask, str]; // creo il secondo array temporanea, prendi
    // tutti gli elementi che aveva fino ad adesso ...ListaTask + la nuova stringa (str)
    setListaTask(listaAppoggio); // aggiorno l'array listaTASK con listaAPPOGGIO
    console.log(listaTask);
    setStr("");
    
}
const stampa = () =>{
    // console.log("pippo");
} 
 
    

    return(
        <form action="" onSubmit={submit}>
        <input type="text" onChange={change} value={str}/>
        <button onClick={stampa} type="submit" id="btn" >Make todoList</button> 
       
        </form>
    )
}
export default Todoform