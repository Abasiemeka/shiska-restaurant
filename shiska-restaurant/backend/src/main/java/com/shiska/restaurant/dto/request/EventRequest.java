package com.shiska.restaurant.dto.request;

import com.shiska.restaurant.model.Event;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public record EventRequest(
    @NotBlank(message = "Title is required")
    String title,
    
    String description,
    
    @NotNull(message = "Start time is required")
    @Future(message = "Start time must be in the future")
    LocalDateTime startTime,
    
    @NotNull(message = "End time is required")
    @Future(message = "End time must be in the future")
    LocalDateTime endTime,
    
    String imageUrl,
    
    @NotNull(message = "Event type is required")
    Event.EventType type,
    
    Integer capacity,
    
    Boolean isPrivate
) {}

