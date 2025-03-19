package com.shiska.restaurant.repository;

import com.shiska.restaurant.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
    List<Menu> findByCategory(Menu.MenuCategory category);
    List<Menu> findByFeaturedTrue();
    List<Menu> findByVegetarianTrue();
    List<Menu> findByGlutenFreeTrue();
}

