import { Api } from "../../../services/axios/api";
import type { LoginRequest } from "../models/LoginRequest";
import type { LoginResponse } from "../models/LoginResponse";
import type { RegisterRequest } from "../models/RegisterRequest";
import type { RegisterResponse } from "../models/RegisterResponse";
import type { VerifyEmailRequest } from "../models/VerifyEmailRequest";

export const register = async (request: RegisterRequest) => {
    const response = await Api.post<RegisterResponse>("/auth/register", request);

    console.log(response);
    localStorage.setItem("register_data", JSON.stringify(response.data));
    return response;

}

export const login = async (request: LoginRequest) => {
    const response = await Api.post<LoginResponse>("/auth/login", request);

    console.log(response);
    return response;
}

export const verifyEmail = async (req: VerifyEmailRequest, userId: string) => {
    const response = await Api.post(`/auth/verify-email?userId=${userId}`, req);
    return response;
}
