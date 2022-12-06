import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./styles.css"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const LoginComponent = () =>{
    const notifySucess = () => toast("Login realizado com sucesso.")
    const notifyErro = () => toast("Email ou senha errado.")
    const navigate = useNavigate()


    const schema = yup.object().shape({
        email: yup.string().email("E-mail invalido.").required("Email obrigatório."),
        password: yup.string().required("Senha obrigatória."),
    })

    const {register, handleSubmit, formState: { errors },} = useForm({
        resolver: yupResolver(schema),
    });


    const url = "http://localhost:3001/users/login"
    const onSubmitFunction = (data) => {

        axios.post(url, data)
        .then(function (res){
                window.localStorage.setItem("token", res.data.token)
                notifySucess()

                setTimeout(() => {
                    
                    navigate("/home");
                    
                }, "2000") 
            })
        .catch(function (error){
                notifyErro()
        })
    
    };
    
    return(
        <div className="box-form" >
            <ToastContainer/>
            <h3>Login</h3>
            <form className="form" onSubmit={handleSubmit(onSubmitFunction)} >

                <input className="item-form" placeholder="Email" {...register('email')} />
                <span className="erro-feedback">{errors.email?.message}</span>
                <input className="item-form" placeholder="Senha" {...register('password')} />
                <span className="erro-feedback">{errors.password?.message}</span>

                <button className="button-form" type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginComponent;