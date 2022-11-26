function Figlio({nuovoValore, handleClick} ) {
    // valore = valore +1
    // handleClick(valore)
    return(
        <div>
            <h2>Figlio</h2>
            <p>Numero figlio{nuovoValore}</p>
            <button onClick={handleClick(nuovoValore + 1)}>Cliccami</button>
            {/* riesco a tornare il valore dal figlio al genitore dichiarando
            la funzione nel figlio */}
        </div>
    )
}
export default Figlio