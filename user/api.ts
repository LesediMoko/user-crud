import { api, APIError } from "encore.dev/api";
import { InsertUser, OptionalUser, PartialUser, User, UserList } from "./types/userTypes";
import { userListMock } from "./utils/mocks";
import { IRootResponse } from "./types/responseTypes";
import { SQLDatabase } from "encore.dev/storage/sqldb";
import knex from "knex";
import { RequireAtLeastOne } from "./types/genericTypes";
import { IUpdateUserRequest } from "./types/requestTypes";

const db = new SQLDatabase("encore_users_db", {migrations: "./migrations"})

const orm = knex({
    client: "pg",
    connection: db.connectionString,
  });

const usersTable = () => orm<User>("user_table");

export const getUsers = api({method: "GET", path: "/users"}, async () : Promise<UserList> => {
    const usersData = await usersTable().select()
    if (usersData.length === 0) {
        throw APIError.notFound("No users found")
    }
    return {users : usersData}
})

export const createUser = api({method: "POST", path: "/user"}, async(newUser: InsertUser) : Promise<User> => {
    const [existingUser] = await usersTable().where("username", newUser.username)
    if (existingUser) {
        throw APIError.alreadyExists("User already exists")
    }
    const [newUserResponse] = await usersTable().insert(newUser).returning("*")
    if (!newUserResponse) {
        throw APIError.internal("Failed to create user")
    }
    return newUserResponse 
})

export const updateUser = api({method: "PATCH", path: "/user/:username"}, async({username, newUserData} : IUpdateUserRequest) : Promise<User> => {
    if (username == "") {
        throw APIError.invalidArgument("username is required")
    }
    if (newUserData && Object.keys(newUserData).length === 0) {
        throw APIError.invalidArgument("At least one field is required")
    }
    const [updatedUser] = await usersTable().where("username", username).update(newUserData).returning("*")
    if (!updatedUser) {
        throw APIError.notFound("User not found")
    }
    return updatedUser
})

export const deleteUser = api({method: "DELETE", path: "/user/:username"}, async({username} : {username: string}) : Promise<User> => {
    if (username == "") {
        throw APIError.invalidArgument("username is required")
    }
    const [deletedUser] = await usersTable().where("username", username).del().returning("*")
    if (!deletedUser) {
        throw APIError.notFound("User not found")
    }
    return deletedUser
})

export const rootRoute = api({method: "GET", path: "/api"}, async () : Promise<IRootResponse> => {
    return {message : "Welcome to Encore.ts"}
})

export const getUser = api({method: "GET", path: "/user/:username"}, async({username} : {username: string}) : Promise<User> => {
    const [user] = await usersTable().where("username", username)
    if (!user) {
        throw APIError.notFound("User not found")
    }
    return user
})