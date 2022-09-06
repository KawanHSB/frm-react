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

}

export default MotoristaLista
