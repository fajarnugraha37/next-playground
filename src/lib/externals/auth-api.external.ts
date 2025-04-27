import { Token, TokenSchema, User, UserSchema } from "../definitions";
import { UsernamePassword, UsernamePasswordSchema } from "../definitions/credential.definition";
import { UserComplete, UserCompleteSchema } from "../definitions/user-complete.definition";
import { ApiUtility } from "../utils";

export class AuthApi {
  private readonly apiUtility: ApiUtility;

  constructor(baseUrl: string = "https://dummyjson.com") {
    this.apiUtility = new ApiUtility(baseUrl);
  }

  public async login(
    credential: UsernamePassword
  ): Promise<[UserComplete | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        requestSchema: UsernamePasswordSchema,
        responseSchema: UserCompleteSchema,
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
  ): Promise<[User | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        responseSchema: UserSchema,
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
  ): Promise<[Token | null, unknown | null]> {
    try {
      const { data } = await this.apiUtility.fetchApi({
        responseSchema: TokenSchema,
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
