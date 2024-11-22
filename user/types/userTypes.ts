import { RequireAtLeastOne } from "./genericTypes";

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}

export interface UserList {
    users: User[];
}

export type InsertUser = Omit<User, "id">;

// Your interface with optional properties
export type OptionalUser = Partial<User>;

// Enforce at least one property
export type PartialUser = RequireAtLeastOne<OptionalUser>