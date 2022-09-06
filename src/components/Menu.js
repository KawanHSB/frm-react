import React from "react";
import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <div className="header">
        <img className="logo" src={"logo"}/>
            <nav>
                <Link to="/Motorista">Motoristas &#9951;</Link>
                <Link to="/clientes">Clientes &#128100;</Link>
                <Link to="/coletas">coletas &#128230;</Link>
                <Link to="/acessos">Acessos &#x1F511;</Link>
                <button className="btlogout">Sair</button>
            </nav>
        </div>
    );  
}

export default Menu