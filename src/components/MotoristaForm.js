import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from "../assets/config/firebase-config"

const Motorista = () => {

  const { handleSubmit } = useForm ();

  // INPUT METODS
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // FIELD DECLARATION  
  const onSubmit = async (e)=> {
    try {
      const docRef = await addDoc(collection(db, "Motoristas"), {
        Nome: nome,
        CPF: cpf,
        RG: rg,
        Estado: estado,
        Cidade: cidade,
        Telefone: telefone,
        Veiculo: veiculo,
        Placa: placa,
        Email: email,
        Senha: senha,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  // RETURN
    return (
        // DRIVER INFO
        <div className="dados">
          <h1>DRIVER FORMS</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Nome</label>
                <input type="text" value={nome}
                  onChange={(e) => setNome(e.target.value)}/>

                <label>CPF</label>
                <input type="number" value={cpf}
                  onChange={(e) => setCpf(e.target.value)}/>

                <label>RG</label>
                <input type="number" value={rg}
                  onChange={(e) => setRg(e.target.value)}/>

                <label>Estado</label>
                <input type="search" value={estado}
                  onChange={(e) => setEstado(e.target.value)}/>

                <label>Cidade</label>
                <input type="search" value={cidade}
                  onChange={(e) => setCidade(e.target.value)}/>

                <label>Telefone</label>
                <input type="tel" value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}/>

                <label>Tipo do veiculo</label>
                <select value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}>
                            <option value="fiorino"></option>
                            <option value="hr">HR</option>
                            <option value="vuc">VUC</option>
                            <option value="toco">Toco</option>
                            <option value="truck">Truck</option>
                            <option value="carreta">Carreta</option>
                            <option value="3_4">3/4</option>
                        </select>

                <label>Placa</label>
                <input type="text" value={placa}
                  onChange={(e) => setPlaca(e.target.value)}/>

                <label className="email">E-mail</label>
                <input type="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}/> 

                <label>Senha</label>
                <input type="text" value={senha}
                  onChange={(e) => setSenha(e.target.value)}/>

                <button className="bt" type="submit">Novo</button>
                <button className="bt">Editar</button>
                <button className="bt">Excluir</button>
            </form>
        </div>
    );
}

export default Motorista
