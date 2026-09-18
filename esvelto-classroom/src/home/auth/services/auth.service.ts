import { Api } from "../../../services/axios/api";
import type { LoginRequest } from "../models/LoginRequest";
import type { LoginResponse } from "../models/LoginResponse";
import type { RegisterRequest } from "../models/RegisterRequest";
import type { RegisterResponse } from "../models/RegisterResponse";

export const register = async (request: RegisterRequest) => {
    const response: RegisterResponse = await Api.post("/auth/register", request);

    console.log(response);
    return response;

}

export const login = async (request: LoginRequest) => {
    const response: LoginResponse = await Api.post("/auth/login", request);

    return response;
}