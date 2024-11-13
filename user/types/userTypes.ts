export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface UserList {
    users: User[];
}

export interface InsertUser {
    username: string;
    email: string;
    password: string;
}