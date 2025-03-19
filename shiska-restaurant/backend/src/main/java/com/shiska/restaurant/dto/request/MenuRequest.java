package com.shiska.restaurant.dto.request;

import com.shiska.restaurant.model.Menu;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

import java.math.BigDecimal;

public record MenuRequest(
    @NotBlank(message = "Name is required")
    String name,
    
    String description,
    
    @NotNull(message = "Price is required")
    @Positive(message = "Price must be positive")
    BigDecimal price,
    
    @NotNull(message = "Category is required")
    Menu.MenuCategory category,
    
    String imageUrl,
    
    boolean vegetarian,
    
    boolean glutenFree,
    
    boolean featured
) {}

