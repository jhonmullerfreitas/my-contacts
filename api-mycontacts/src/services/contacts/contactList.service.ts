import { contacts } from "../../database";
import { IToken, TokenPayload } from "../../interfaces/contacts";
import jwt from "jsonwebtoken"

const contactListService = async ({token}: IToken) =>{

    if(!token){
        throw new Error("Authorization token not found");
    }

    const account = jwt.verify(token, "SECRET_KEY");

    const {email_token} = account as TokenPayload;

    const contacts_list = contacts.filter(contact => contact.related_owner_email === email_token)


    return contacts_list
}

export default contactListService;