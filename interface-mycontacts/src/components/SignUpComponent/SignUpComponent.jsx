import "./styles.css"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const SignUpComponent = () =>{

    const notifySucess = () => toast("Sucess!")
    const navigate = useNavigate()
    
    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório."),
        email: yup.string().email("Email inválido.").required("Campo obrigatório."),
        password: yup.string().required("Senha obrigatória."),
        phone: yup.string().required("Campo obrigatório")
    })

    const {register, handleSubmit, formState: { errors },} = useForm({
        resolver: yupResolver(schema),
    });

    const url = "http://localhost:3001/users/"
    const onSubmitFunction = (data) => {

        axios.post(url, data)
        .then(function(res){
            notifySucess()

            setTimeout(() => {
                navigate("/");
            }, "3000")  
        })
        .catch(function(error){
            const notifyErro = () => toast(`${error.response.data.message}`)
            notifyErro()
        })
    }

    return(
        <div className="box-form-signup">
            <ToastContainer/>
            <h3>Cadastro</h3>
            <form className="form-signup" onSubmit={handleSubmit(onSubmitFunction)} >

                <input className="item-signup" placeholder="Nome" {...register('name')} />
                <span className="erro-feedback-signup">{errors.name?.message}</span>
                <input className="item-signup" placeholder="Email" {...register('email')} />
                <span className="erro-feedback-signup">{errors.email?.message}</span>
                <input className="item-signup" placeholder="Senha" {...register('password')} />
                <span className="erro-feedback-signup">{errors.password?.message}</span>
                <input className="item-signup" placeholder="Telefone" {...register('phone')} />
                <span className="erro-feedback-signup">{errors.phone?.message}</span>

                <button className="button-form-signup" type="submit" >Cadastrar</button>
            </form>
        </div>
    )
}

export default SignUpComponent;