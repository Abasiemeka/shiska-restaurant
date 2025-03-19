package com.shiska.restaurant.controller;

import io.micrometer.core.annotation.Timed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthCheckController {

    @Autowired(required = false)
    private BuildProperties buildProperties;

    @GetMapping
    @Timed(value = "health.check", description = "Time taken to perform health check")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        response.put("timestamp", System.currentTimeMillis());
        
        if (buildProperties != null) {
            Map<String, String> buildInfo = new HashMap<>();
            buildInfo.put("version", buildProperties.getVersion());
            buildInfo.put("artifact", buildProperties.getArtifact());
            buildInfo.put("name", buildProperties.getName());
            buildInfo.put("time", buildProperties.getTime().toString());
            response.put("build", buildInfo);
        }
        
        return ResponseEntity.ok(response);
    }
}

