export interface UserResponse {
    id: string;
    fullName: {
        firstName: string,
        lastName: string,
        middleName: string
    }
}