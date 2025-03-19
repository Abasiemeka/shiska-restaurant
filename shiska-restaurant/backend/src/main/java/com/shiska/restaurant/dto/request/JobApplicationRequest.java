package com.shiska.restaurant.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record JobApplicationRequest(
    @NotBlank(message = "Full name is required")
    String fullName,
    
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    String email,
    
    @NotBlank(message = "Phone number is required")
    String phone,
    
    @NotBlank(message = "Position is required")
    String position,
    
    String experience,
    
    String coverLetter
) {}

