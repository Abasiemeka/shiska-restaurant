package com.shiska.restaurant.dto.response;

import java.util.List;

public record JwtResponse(
    String token,
    String type,
    Long id,
    String username,
    String email,
    List<String> roles
) {
    public static JwtResponse of(String token, Long id, String username, String email, List<String> roles) {
        return new JwtResponse(token, "Bearer", id, username, email, roles);
    }
}

