import "./styles.css"

import axios from "axios";
import { useState, useEffect } from "react";

const AllContactsComponent = () => {

    const [contacts, setContacts] = useState([])

    const token = window.localStorage.getItem("token")

    useEffect(()=>{
        axios.get("http://localhost:3001/users/contact", {headers: {'Authorization': `Bearer ${token}`}})
        .then((res)=>{setContacts(res.data)})
        .catch((erro)=>{console.log(erro)})
    }, [])


    return(
        <ul className="list-contacts">
            <h3>Todos os contatos</h3>
            {contacts? contacts.map((contact, index)=> 
            
            
            <li className="list-item" key={index} >
                <span>Nome: {contact.name}</span>
                <span>Telefone: {contact.phone}</span>
                <span>Email: {contact.email}</span>
            </li>) 

            : <p>Sem Contatos</p>}
        </ul>
    )
}

export default AllContactsComponent;