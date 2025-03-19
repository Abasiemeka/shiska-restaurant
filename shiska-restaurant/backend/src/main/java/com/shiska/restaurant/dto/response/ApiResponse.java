package com.shiska.restaurant.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;

import java.time.LocalDateTime;

//check this
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ApiResponse<T>(
    String status,
    T data,
    ErrorDetails error,
    @Builder.Default
    LocalDateTime timestamp = LocalDateTime.now()
) {
    public static <T> ApiResponse<T> success(T data) {
        return ApiResponse.<T>builder()
                .status("success")
                .data(data)
                .build();
    }

    public static <T> ApiResponse<T> error(String message, String code) {
        return ApiResponse.<T>builder()
                .status("error")
                .error(new ErrorDetails(message, code))
                .build();
    }

    public record ErrorDetails(
        String message,
        String code
    ) {}
}

