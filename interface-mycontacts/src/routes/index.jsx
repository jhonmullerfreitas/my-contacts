import {Route, Routes as Switch} from "react-router-dom"

import LoginPage from "../pages/Login"
import HomePage from "../pages/Home"
import SignUpPage from "../pages/SignUp"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" element={<LoginPage/>} />
            <Route exact path="/home" element={<HomePage/>} />
            <Route exact path="/signup" element={<SignUpPage/>} />
        </Switch>
    )
}

export default Routes;