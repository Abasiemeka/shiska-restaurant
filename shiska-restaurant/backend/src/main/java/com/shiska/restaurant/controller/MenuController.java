package com.shiska.restaurant.controller;

import com.shiska.restaurant.dto.request.MenuRequest;
import com.shiska.restaurant.dto.response.ApiResponse;
import com.shiska.restaurant.model.Menu;
import com.shiska.restaurant.service.MenuService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@RequiredArgsConstructor
public class MenuController {
    
    private final MenuService menuService;
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<Menu>>> getAllMenuItems() {
        return ResponseEntity.ok(ApiResponse.success(menuService.getAllMenuItems()));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Menu>> getMenuItemById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(menuService.getMenuItemById(id)));
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<Menu>>> getMenuItemsByCategory(
            @PathVariable Menu.MenuCategory category) {
        return ResponseEntity.ok(ApiResponse.success(menuService.getMenuItemsByCategory(category)));
    }
    
    @GetMapping("/featured")
    public ResponseEntity<ApiResponse<List<Menu>>> getFeaturedMenuItems() {
        return ResponseEntity.ok(ApiResponse.success(menuService.getFeaturedMenuItems()));
    }
    
    @PostMapping
    public ResponseEntity<ApiResponse<Menu>> createMenuItem(@Valid @RequestBody MenuRequest menuRequest) {
        Menu createdMenu = menuService.createMenuItem(menuRequest);
        return new ResponseEntity<>(ApiResponse.success(createdMenu), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Menu>> updateMenuItem(
            @PathVariable Long id, 
            @Valid @RequestBody MenuRequest menuRequest) {
        return ResponseEntity.ok(ApiResponse.success(menuService.updateMenuItem(id, menuRequest)));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteMenuItem(@PathVariable Long id) {
        menuService.deleteMenuItem(id);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

