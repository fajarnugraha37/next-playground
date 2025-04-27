import {
  LoginRequest,
  LoginRequestSchema,
  LoginResponse,
  LoginResponseSchema,
  TokenResponse,
  TokenResponseSchema,
  UserResponse,
  UserResponseSchema,
} from "@/lib/vm";
import { ApiUtility } from "../utils";

export class DummyJsonApi {
  private readonly apiUtility: ApiUtility;

  constructor(baseUrl: string = "https://dummyjson.com") {
    this.apiUtility = new ApiUtility(baseUrl);
  }

  public async login(
    credential: LoginRequest
  ): Promise<[LoginResponse | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        requestSchema: LoginRequestSchema,
        responseSchema: LoginResponseSchema,
        method: "POST",
        endpoint: "/auth/login",
        requestData: credential,
        options: {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      });

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  public async me(
    accessToken: string
  ): Promise<[UserResponse | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        responseSchema: UserResponseSchema,
        method: "GET",
        endpoint: "/auth/me",
        options: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          credentials: "include",
        },
      });

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  public async refresh(
    refreshToken: string
  ): Promise<[TokenResponse | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        responseSchema: TokenResponseSchema,
        method: "POST",
        endpoint: "/auth/refresh",
        requestData: {
          refreshToken: refreshToken, // Optional, if not provided, the server will use the cookie
          expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60
        },
        options: {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      });

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }
}
