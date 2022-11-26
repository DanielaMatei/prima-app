import Header from "../Header/Header"
import Main from "../Main/Main"
import Footer from "../footer/Footer"
import "./Layout.css"



function Layout () {
    let titoloMain = "Il mio Titolo"
    return (
    <div className="container">
        
        <Header>questo testo verrà ignorato se non viene gestito il children nel componeste header</Header>
        <Main tema="light" titolo={titoloMain}></Main>
       <Footer>ciao sono footer</Footer>
       {/* // sono un footer è il children di footer */}
    </div>
    )
}
export default Layout

/*  componente geniore -> componente figlio -> componente nipote
Layout -> Main -> Card

Layout abbiamo il componente Main a cui passiamo l'attributo tema = light

Main -> i nostri attributi vanno a finire nel parametro props (props ha una struttura ad oggetto) Tema=light
Card -> recuperare l informazione dell'attributo tema= light tramite il parametro props tema = light

Layout -> Main
in Layout ho titoloMain = 'il mio titolo'
  componete figlio -> attributo titolo nel Main
*/
