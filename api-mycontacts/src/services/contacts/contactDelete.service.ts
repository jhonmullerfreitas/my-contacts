import { IContactId } from "../../interfaces/contacts";
import { contacts } from "../../database";

const contactDeleteService = async ({idContact}: IContactId) => {

    const contactIndex = contacts.findIndex(contact => contact.id === idContact)

    contacts.splice(contactIndex)

    return {}
}

export default contactDeleteService;