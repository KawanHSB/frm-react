import React from "react";
import Menu from "./Menu";
import MotoristaForm from "./MotoristaForm";
import MotoristaLista from "./MotoristaLista";

const Motorista = () => {
    return (
        <div>
            <Menu/>
            <MotoristaForm/>
            <MotoristaLista/>
        </div>
    );
}

export default Motorista