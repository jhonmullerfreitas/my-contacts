import { Request, Response } from "express";
import contactListService from "../../services/contacts/contactList.service";

const contactListController = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization;
        const contacts = await contactListService({token})

        return res.status(200).send(contacts)
    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default contactListController;