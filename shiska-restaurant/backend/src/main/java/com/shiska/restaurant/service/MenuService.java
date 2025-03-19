package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.request.MenuRequest;
import com.shiska.restaurant.exception.ResourceNotFoundException;
import com.shiska.restaurant.model.Menu;
import com.shiska.restaurant.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {
    
    private final MenuRepository menuRepository;
    
    public List<Menu> getAllMenuItems() {
        return menuRepository.findAll();
    }
    
    public Menu getMenuItemById(Long id) {
        return menuRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Menu item not found with id: " + id));
    }
    
    public List<Menu> getMenuItemsByCategory(Menu.MenuCategory category) {
        return menuRepository.findByCategory(category);
    }
    
    public List<Menu> getFeaturedMenuItems() {
        return menuRepository.findByFeaturedTrue();
    }
    
    @Transactional
    public Menu createMenuItem(MenuRequest menuRequest) {
        Menu menu = Menu.builder()
                .name(menuRequest.name())
                .description(menuRequest.description())
                .price(menuRequest.price())
                .category(menuRequest.category())
                .imageUrl(menuRequest.imageUrl())
                .vegetarian(menuRequest.vegetarian())
                .glutenFree(menuRequest.glutenFree())
                .featured(menuRequest.featured())
                .build();
        
        return menuRepository.save(menu);
    }
    
    @Transactional
    public Menu updateMenuItem(Long id, MenuRequest menuRequest) {
        Menu existingMenu = getMenuItemById(id);
        
        existingMenu.setName(menuRequest.name());
        existingMenu.setDescription(menuRequest.description());
        existingMenu.setPrice(menuRequest.price());
        existingMenu.setCategory(menuRequest.category());
        existingMenu.setImageUrl(menuRequest.imageUrl());
        existingMenu.setVegetarian(menuRequest.vegetarian());
        existingMenu.setGlutenFree(menuRequest.glutenFree());
        existingMenu.setFeatured(menuRequest.featured());
        
        return menuRepository.save(existingMenu);
    }
    
    @Transactional
    public void deleteMenuItem(Long id) {
        Menu menu = getMenuItemById(id);
        menuRepository.delete(menu);
    }
}

