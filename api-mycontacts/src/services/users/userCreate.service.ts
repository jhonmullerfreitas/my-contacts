import { users } from "../../database";
import { IUserCreate, IUser } from "../../interfaces/users";
import { v4 as uuidv4 } from "uuid"
import bcrypt from "bcrypt"

const userCreateService = async ({name, email, phone, password}:IUserCreate) => {

    if(!name){
        throw new Error("Name is required!")
    }
    if(!email){
        throw new Error("Email is required!")
    }
    if(!password){
        throw new Error("Password is required!")
    }


    const emailAlreadyExists = users.find(user => user.email === email);
    if(emailAlreadyExists){
        throw new Error("Email already exists!");
    };

    
    const newUser: IUser = {
        id: uuidv4(),
        name,
        email,
        phone,
        password: bcrypt.hashSync(password, 10)
    }

    users.push(newUser)

    return newUser;
}

export default userCreateService;