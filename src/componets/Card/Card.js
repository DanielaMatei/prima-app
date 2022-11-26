import "./style.css"
import caffe from "./caffe.jpg"
import Button from "../Button/Button"


//componente -> funzione
// props -> parametri della funzione ->oggetto

// function Card ({ colore})
// function Card ( props ) -> props.colore
function Card ({ colore, dati}) {
// "card "+props.colore
// `card ${props.tema}`
// "card light"
    return(
        <div className={"card "+colore}>
        <div className="card-body">
             {/* Metodo 1 - ho l immagine nella cartella del progetto */}
            {/* <img src={caffe} alt="caffe" /> */}
            <img src= {dati.cover.src} alt={dati.cover.alt}/> 
            {/* Metodo 2 - lo uso quando mi serve in + posti l'imma e la metto nella cartella
            pubblic */}
            <div>
                <h1>{dati.id} {dati.title}</h1>
                <p>{dati.price}</p>
            </div>
        </div>
        <div className="card-footer">
            <div className="etichette">
                {/* <span>Hot</span>
                <span>Cold</span> */}
                {/* etichette è un array */}
                {/* se ettichette esiste allora fammi etichette.map  */}
                {dati.etichette && dati.etichette.map((valore, index)=> (<span key={index}>{valore}</span>))}

            </div>
            <button>{dati.buttonTitle}</button>
            {/* <button>{titoloPulsante}</button> */}
            {dati.senzaBottone ? null : <Button>{dati.buttonTitle}</Button> }
        </div>
    </div>
    )
}
export default Card