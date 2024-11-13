import { api } from "encore.dev/api";
import { InsertUser, User, UserList } from "./types/userTypes";
import { userListMock } from "./utils/mocks";
import { IRootResponse } from "./types/responseTypes";
import { SQLDatabase } from "encore.dev/storage/sqldb";
import knex from "knex";

const db = new SQLDatabase("encore_users_db", {migrations: "./migrations"})

const orm = knex({
    client: "pg",
    connection: db.connectionString,
  });

const usersTable = () => orm<User>("user_table");

export const getUsers = api({method: "GET", path: "/users"}, async () : Promise<UserList> => {
    const usersData = await usersTable().select()
    return {users : usersData}
})

export const createUser = api({method: "POST", path: "/user"}, async(newUser: InsertUser) : Promise<User> => {
    const [newUserResponse] = await usersTable().insert(newUser).returning("*")
    return newUserResponse 
})

export const rootRoute = api({method: "GET", path: "/api"}, async () : Promise<IRootResponse> => {
    return {message : "Welcome to Encore.ts"}
})