import { Api } from "../../../services/axios/api";
import type { RegisterRequest } from "../models/RegisterRequest";

export const register = async (request: RegisterRequest) => {
    const response = await Api.post("/auth/register", request);

    return response.data;
}