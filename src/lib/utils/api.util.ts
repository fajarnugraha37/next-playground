import { z } from "zod";
import { ApiResponse, HttpMethod } from "./types.util";

// Error Type
class ApiError extends Error {
  message: string;
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

// Generic API Utility Class
export class ApiUtility {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  async fetchApi<
    TResponse extends z.ZodTypeAny,
    TRequest extends z.ZodTypeAny | null = null
  >({
    endpoint,
    method = "GET",
    responseSchema,
    requestSchema,
    requestData,
    options = {},
  }: {
    endpoint: string;
    method?: HttpMethod;
    responseSchema: TResponse;
    requestSchema?: TRequest;
    requestData?: TRequest extends z.ZodTypeAny ? z.infer<TRequest> : object;
    options?: RequestInit;
  }): Promise<ApiResponse<z.infer<TResponse>>> {
    try {
      // Validate request data if provided
      if (requestSchema && requestData) {
        await requestSchema.parseAsync(requestData);
      }

      const url = `${this.baseUrl}${endpoint}`;
      const headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };

      const response = await fetch(url, {
        method,
        headers,
        body: requestData ? JSON.stringify(requestData) : undefined,
        ...options,
      });

      if (!response.ok) {
        throw new ApiError(
          `HTTP error! Status: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();
      const validatedData = await responseSchema.parseAsync(data);

      return {
        data: validatedData,
        status: response.status,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new ApiError(`Validation error: ${error.message}`);
      }
      
      console.error("unexpected api call error: ", error);
      throw error instanceof ApiError
        ? error
        : new ApiError("Unknown error occurred");
    }
  }
}
