export interface UserDTO {
    _id?: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    adress?: string;
    role?: string;
    phone?: string;
    salary?: number;
    hours?: {
        begin?: string;
        end?: string;
    };
}
