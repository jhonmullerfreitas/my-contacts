export interface IContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    related_owner_email: string;
}

export interface IContactCreate {
    name: string;
    email: string;
    phone: string;
    token: any;
}

export interface IToken {
    token: any;
}

export interface TokenPayload {
    email_token: string;
    iat: number;
    exp: number;
}

export interface IDelete {
    token: any;
    idContact: string;
}

export interface IContactId{
    idContact: string;
}
