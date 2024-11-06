import { api } from "encore.dev/api";
import { UserList } from "./types/userTypes";
import { userListMock } from "./utils/mocks";

export const getUsers = api({method: "GET", path: "/users"}, async () : Promise<UserList> => {
    return userListMock
})