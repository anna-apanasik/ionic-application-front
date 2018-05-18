export interface ErrorResponse {
    title: string;
    errors: object[],
    message: string,
    statusCode: number,
    url: string
}