import "./styles.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate()

    let token = localStorage.getItem("token");

    setTimeout(() => {
        if(!token){
            navigate("/");
        }
    }, "1000") 

    const listAll = () =>{
        navigate("/all-contacts")
    }
    
    const registerContact = () =>{
        navigate("/signup-contact")
    }

    const logout = () =>{
        window.localStorage.clear()
        navigate("/")
    }

    return(
        <div className="box-dashboard">
            <h2 className="header">My contacts</h2>
            <h3 className="title">Seja bem vindo (a)!</h3>
            <button className="button-signup-contact button" onClick={registerContact} >Cadastrar contatos</button>
            <button className="button-list-contacts button" onClick={listAll} >Listar todos os contatos</button>
            <button className="button-logout-contact button" onClick={logout} >Sair</button>
        </div>
    )
}

export default HomePage;