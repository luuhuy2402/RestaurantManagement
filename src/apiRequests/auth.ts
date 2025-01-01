import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";

const authApiRequest = {
    //Server login request
    sLogin: async (body: LoginBodyType) =>
        http.post<LoginResType>("/auth/login", body),
    // <loginResType> là kiểu dữ liệu trả về từ server
    //Client login request
    login: (body: LoginBodyType) =>
        http.post<LoginResType>("/api/auth/login", body, {
            baseUrl: "",
        }),
};

export default authApiRequest;
