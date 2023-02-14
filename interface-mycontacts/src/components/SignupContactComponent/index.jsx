import "./styles.css"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const SignUpContactComponent = () =>{

    const notifySucess = () => toast("Sucess!")
    const navigate = useNavigate()

    let token = localStorage.getItem("token");

    setTimeout(() => {
        if(!token){
            navigate("/");
        }
    }, "1000") 

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório."),
        email: yup.string().email("Email inválido.").required("Campo obrigatório."),
        phone: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors },} = useForm({
        resolver: yupResolver(schema),
    });

    const url = "http://localhost:3001/users/contact"

    const onSubmitFunction = (data) => {

        axios.post(url, data, {headers: {'Authorization': `Bearer ${token}`}})
        .then(function(res){
            notifySucess()

            setTimeout(() => {
                navigate("/home");
            }, "1500")  
        })
        .catch(function(error){
            const notifyErro = () => toast(`${error.response.data.message}`)
            notifyErro()
        })
    }

    return(
        <div className="box-signup-contact">
            <ToastContainer/>
            <h3>Cadastro de contato</h3>
            <form className="form-signup-contact" onSubmit={handleSubmit(onSubmitFunction)}>

                <input className="item-signup-contact" placeholder="Nome" {...register('name')} />
                <span className="erro-feedback-signup-contact">{errors.name?.message}</span>

                <input className="item-signup-contact" placeholder="Email" {...register('email')} />
                <span className="erro-feedback-signup-contact">{errors.email?.message}</span>

                <input className="item-signup-contact" placeholder="Telefone" {...register('phone')} />
                <span className="erro-feedback-signup-contact">{errors.phone?.message}</span>

                <button className="button-form-signup-contact" type="submit" >Cadastrar</button>

            </form>

                <button className="button-form-signup-contact" onClick={()=> navigate("/home")} >Voltar</button>
        </div>
    )
}

export default SignUpContactComponent;