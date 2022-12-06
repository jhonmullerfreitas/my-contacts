import { users } from "../../database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUserLogin } from "../../interfaces/users";

const userLoginService = async ({email, password}: IUserLogin) => {

    const account = users.find(user => user.email === email);

    if(!account){
        throw new Error("Wrong email/password!");
    }
    if(!bcrypt.compareSync(password, account.password)){
        throw new Error("Wrong email/password!");
    }

    const token = jwt.sign(
        {email_token: email},
        "SECRET_KEY",
        {expiresIn: "24h"}
    )

    return {token: token};
}

export default userLoginService;