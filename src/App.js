import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import LoginC from "./components/LoginC";
import Motorista from "./components/Motorista"
import Clientes from "./components/Clientes";
import Coletas from "./components/Coletas";
import Acessos from "./components/Acessos";

export default function App( ) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginC/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Clientes" element={<Clientes/>}/>
                <Route path="/Motorista" element={<Motorista/>}/>
                <Route path="/Coletas" element={<Coletas/>}/>
                <Route path="/Acessos" element={<Acessos/>}/>

            </Routes>
        </BrowserRouter>
    );
} 