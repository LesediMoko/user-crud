import { UserList } from "../types/userTypes";

export const userListMock : UserList= {
    users: [
        {
            id: 1,
            username: "Alice",
            email: "alice@example.com",
            password: "1234"
        },
        {
            id: 2,
            username: "Bob",
            email: "Bob@example.com",
            password: "5678"
        },
    ]
}