import { OptionalUser } from "./userTypes";

export interface IUpdateUserRequest {
    username: string;
    newUserData: OptionalUser;
}