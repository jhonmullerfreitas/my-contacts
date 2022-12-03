import { contacts } from "../database";
import {
  IContactCreate,
  IContact,
  TokenPayload,
} from "../interfaces/contacts";
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";

const contactCreateService = async ({
  name,
  email,
  phone,
  token,
}: IContactCreate) => {
  if (!token) {
    throw new Error("Authorization token not found");
  }

  const emailAlreadyExists = contacts.find(
    (contact) => contact.email === email
  );

  if (emailAlreadyExists) {
    throw new Error(
      "This email is already associated with another contact, please enter other email."
    );
  }

  const account = jwt.verify(token, "SECRET_KEY");

  const { email_token } = account as TokenPayload;

  const newContact: IContact = {
    id: uuidv4(),
    name,
    email,
    phone,
    related_owner_email: email_token,
  };

  contacts.push(newContact);

  return newContact;
};

export default contactCreateService;
