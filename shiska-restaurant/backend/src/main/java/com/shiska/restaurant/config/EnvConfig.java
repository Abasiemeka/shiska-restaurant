package com.shiska.restaurant.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
public class EnvConfig {
    @Bean
    @Profile("development")
    public Dotenv dotenvDevelopment() {
        return Dotenv.configure()
                .directory("./")
                .filename(".env.development")
                .load();
    }

    @Bean
    @Profile("test")
    public Dotenv dotenvTest() {
        return Dotenv.configure()
                .directory("./")
                .filename(".env.test")
                .load();
    }
    
    @Bean
    @Profile("production")
    public Dotenv dotenvProduction() {
        return Dotenv.configure()
                .directory("./")
                .filename(".env.production")
                .load();
    }
}

