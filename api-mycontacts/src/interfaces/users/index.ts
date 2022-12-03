export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface IUserCreate {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}