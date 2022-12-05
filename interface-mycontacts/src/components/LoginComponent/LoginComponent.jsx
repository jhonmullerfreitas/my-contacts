import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"


const LoginComponent = () =>{

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório.").email("E-mail invalido."),
        password: yup.string().required("Senha obrigatória."),
    })

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(formSchema),
    });


    const onSubmitFunction = (data) => console.log(data);
    
    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmitFunction)} >
                <input placeholder="Email" {...register('email')} />
                <input type="Senha" {...register('password')} />

                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default LoginComponent;