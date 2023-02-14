import "./styles.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllContactsComponent = () => {

    const [contacts, setContacts] = useState([])
    const navigate = useNavigate()

    const token = window.localStorage.getItem("token")

    useEffect(()=>{
        axios.get("http://localhost:3001/users/contact", {headers: {'Authorization': `Bearer ${token}`}})
        .then((res)=>{setContacts(res.data)})
        .catch((erro)=>{console.log(erro)})
    }, [token])

    const deleteContact = (id) =>{
        axios.delete("http://localhost:3001/users/contact", {idContact: `${id}`})
        .then((res)=> 
            {
                const deleteNotify = () => toast("Contato deletado.")
                deleteNotify()
            axios.get("http://localhost:3001/users/contact", {headers: {'Authorization': `Bearer ${token}`}})
            .then((res)=>{setContacts(res.data)})
            .catch((erro)=>{console.log(erro)})}
        )
        .catch((error)=> console.log(error))
    }

    return(
        <ul className="list-contacts">
            <ToastContainer/>
            <h3>Todos os contatos</h3>
            {contacts? contacts.map((contact, index)=> 
            
            
            <li className="list-item" key={index} >
                <span>Nome: {contact.name}</span>
                <span>Telefone: {contact.phone}</span>
                <span>Email: {contact.email}</span>
                <button className="btn-delete" onClick={()=> deleteContact(contact.id)} >del</button>
            </li>) 

            : <p>Sem Contatos</p>}
            <button className="button-form-signup-contact" onClick={()=> navigate("/home")} >Voltar</button>
        </ul>
    )
}

export default AllContactsComponent;