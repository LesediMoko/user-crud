import { api } from "encore.dev/api";
import { User, UserList } from "./types/userTypes";
import { userListMock } from "./utils/mocks";

export const getUsers = api({method: "GET", path: "/users"}, async () : Promise<UserList> => {
    return userListMock
})

export const createUser = api({method: "POST", path: "/user"}, async(newUser: User) : Promise<User> => {
    return newUser
})