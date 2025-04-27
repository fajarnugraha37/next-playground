import {
  LoginRequest,
  LoginRequestHelper,
  LoginResponse,
  LoginResponseHelper,
  TokenResponse,
  TokenResponseHelper,
  UserResponse,
  UserResponseHelper,
} from "@/lib/vm";

export class DummyJsonApi {
  constructor(private readonly basePath: string = "https://dummyjson.com") {}

  public async login(
    credential: LoginRequest
  ): Promise<[LoginResponse | null, unknown | null]> {
    const {
      data: credData,
      success: credSuccess,
      error: credError,
    } = await LoginRequestHelper.validateAsync(credential);
    if (!credSuccess) return [null, credError];

    try {
      const response = await fetch(`${this.basePath}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credData),
        credentials: "include",
      });
      const json = await response.json();
      const { data, success, error } = await LoginResponseHelper.validateAsync(
        json
      );
      if (!success) return [null, error];

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  public async me(
    accessToken: string
  ): Promise<[UserResponse | null, unknown | null]> {
    try {
      const response = await fetch(`${this.basePath}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });
      const json = await response.json();
      const { data, success, error } = await UserResponseHelper.validateAsync(
        json
      );
      if (!success) return [null, error];

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }

  public async refresh(
    refreshToken: string
  ): Promise<[TokenResponse | null, unknown | null]> {
    try {
      const response = await fetch(`${this.basePath}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          refreshToken: refreshToken, // Optional, if not provided, the server will use the cookie
          expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60
        }),
        credentials: "include",
      });
      const json = await response.json();
      const { data, success, error } = await TokenResponseHelper.validateAsync(
        json
      );
      if (!success) return [null, error];

      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }
}
