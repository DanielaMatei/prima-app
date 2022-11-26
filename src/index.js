import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./componets/Layout/Layout";
import logo from "./logo.svg"
import { ReactComponent as LogoReact } from "./logo.svg"
import Todo from "./componets/Todo/Todo"
import Todo_1 from "./componets/Todo_1/Todo_1"
// import Genitore from"./componets/Genitore/Genitore"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>Titolo della pagina</h1>
       {/* <Layout></Layout> */}
       <Todo  />
       {/* <Genitore /> */}
       {/* <Todo_1 /> */}
       {/* metodo 1-2 -- per importare l'immagine */}
       {/* <img src = {logo}/> */}
        {/* metodo 3 -- se l immagine è un svg -> far finta che il nostro svg sia un componente */}
        {/* <LogoReact /> */}

    </React.StrictMode>
);
