import {Route, Routes as Switch} from "react-router-dom"

import LoginPage from "../pages/Login"
import HomePage from "../pages/Home"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" element={<LoginPage/>} />
            <Route exact path="/home" element={<HomePage/>} />
        </Switch>
    )
}

export default Routes;