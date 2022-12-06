import { IUser } from "../../interfaces/users";
import { users } from "../../database";

const userListService = async () => {
    return users
}

export default userListService;