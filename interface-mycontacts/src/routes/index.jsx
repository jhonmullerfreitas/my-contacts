import {Route, Routes as Switch} from "react-router-dom"
import LoginPage from "../pages/Login"
import HomePage from "../pages/Home"
import SignUpPage from "../pages/SignUp"
import SignUpContactPage from "../pages/SignUpContact"
import AllContactsPage from "../pages/AllContacts"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" element={<LoginPage/>} />
            <Route exact path="/home" element={<HomePage/>} />
            <Route exact path="/signup" element={<SignUpPage/>} />
            <Route exact path="/signup-contact" element={<SignUpContactPage/>} />
            <Route exact path="/all-contacts" element={<AllContactsPage/>} />
        </Switch>
    )
}

export default Routes;