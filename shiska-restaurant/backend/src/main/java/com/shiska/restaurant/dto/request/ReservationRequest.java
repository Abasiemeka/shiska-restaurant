package com.shiska.restaurant.dto.request;

import jakarta.validation.constraints.*;

import java.time.LocalDateTime;

public record ReservationRequest(
    @NotBlank(message = "Customer name is required")
    String customerName,
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Phone number is required")
    String phone,
    
    @NotNull(message = "Reservation time is required")
    @Future(message = "Reservation time must be in the future")
    LocalDateTime reservationTime,
    
    @NotNull(message = "Party size is required")
    @Min(value = 1, message = "Party size must be at least 1")
    @Max(value = 20, message = "Party size cannot exceed 20")
    Integer partySize,
    
    String specialRequests
) {}

