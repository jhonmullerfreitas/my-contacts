import { Request, Response } from "express";
import contactCreateService from "../../services/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    const token = req.headers.authorization;

    const contact = await contactCreateService({ name, email, phone, token });

    return res.status(201).send(contact);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default contactCreateController;
