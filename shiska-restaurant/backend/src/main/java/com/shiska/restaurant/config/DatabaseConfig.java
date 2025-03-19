package com.shiska.restaurant.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = "com.shiska.restaurant.repository")
@EnableTransactionManagement
@EnableJpaAuditing
public class DatabaseConfig {
    // Database configuration will be handled by application-test.yml properties
    // This class enables JPA features and can be extended for custom configurations
}

