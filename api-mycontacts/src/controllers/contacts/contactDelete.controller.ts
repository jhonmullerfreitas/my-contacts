import { Request, Response } from "express";
import contactDeleteService from "../../services/contacts/contactDelete.service";

const contactDeleteController = async (req: Request, res: Response) => {

    try {

        const {idContact} = req.body
        console.log("controler",idContact)
        const contactDelete = await contactDeleteService({idContact});

        return res.status(204).send(contactDelete);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(401).send({
                error: err.name,
                message: err.message,
            })
        }
    }
}

export default contactDeleteController;