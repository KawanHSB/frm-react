useEffect(() => {
    const getMotoristas = async () => {
        const data = await getDocs(collection(db, "Motoristas"))
        setMotoristas(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id, motorista1:doc.data()})))
    }
    getMotoristas()
}, [])


// MODELO DE TABELA
return (
    <div>
        <h1>DRIVER LIST</h1>
        <table>
            <tr>
                <th>CPF</th>
                <th>Cidade</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Nome</th>
                <th>Placa</th>
                <th>RG</th>
                <th>Senha</th>
                <th>Telefone</th>
                <th>Veiculo</th>
            </tr>
            <tbody>
                <td>4514</td>
                <td>salto</td>
                <td>test@test.com</td>
                <td>são paulo</td>
                <td>alex</td>
                <td></td>
                <td>000000</td>
                <td>password</td>
                <td>phone</td>
                <td>carreta</td>
            </tbody>
        </table>
    </div>
);

return (
    <div>
        <h1>DRIVERS LIST</h1>
        {motoristas.map((motorista) => {
            return (
                <div>
                    {" "}
                    <h1>motoristas: {motorista.Nome}</h1>
                </div>
            )
        })}
    </div>
);

// Old
import { async } from "@firebase/util";
import { EmailAuthProvider } from "firebase/auth";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../assets/config/firebase-config"
//import {  } from '';

const MotoristaLista = () => {

    const [motoristas, setMotoristas] = useState([])

    useEffect(() => {
        const getMotoristas = async () => {
            const data = await getDocs(collection(db, "Motoristas"))
            setMotoristas(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getMotoristas()
    }, [])

    return (
        
    )
}

export default MotoristaLista