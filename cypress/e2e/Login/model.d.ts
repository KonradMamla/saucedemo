export interface User {
    id: number;
    userName: string;
    password: string;
}

interface Users {
    users: User[];
}