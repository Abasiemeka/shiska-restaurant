package com.shiska.restaurant.controller;

import com.shiska.restaurant.dto.request.EventRequest;
import com.shiska.restaurant.dto.response.ApiResponse;
import com.shiska.restaurant.model.Event;
import com.shiska.restaurant.service.EventService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/events")
@RequiredArgsConstructor
@Tag(name = "Events", description = "Events management API")
public class EventController {
    
    private final EventService eventService;
    
    @GetMapping
    @Operation(summary = "Get all events", description = "Retrieves a list of all events")
    public ResponseEntity<ApiResponse<List<Event>>> getAllEvents() {
        return ResponseEntity.ok(ApiResponse.success(eventService.getAllEvents()));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get event by ID", description = "Retrieves an event by its ID")
    public ResponseEntity<ApiResponse<Event>> getEventById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(eventService.getEventById(id)));
    }
    
    @GetMapping("/type/{type}")
    @Operation(summary = "Get events by type", description = "Retrieves events filtered by type")
    public ResponseEntity<ApiResponse<List<Event>>> getEventsByType(
            @PathVariable Event.EventType type) {
        return ResponseEntity.ok(ApiResponse.success(eventService.getEventsByType(type)));
    }
    
    @GetMapping("/upcoming")
    @Operation(summary = "Get upcoming events", description = "Retrieves all upcoming events")
    public ResponseEntity<ApiResponse<List<Event>>> getUpcomingEvents() {
        return ResponseEntity.ok(ApiResponse.success(eventService.getUpcomingEvents()));
    }
    
    @GetMapping("/date-range")
    @Operation(summary = "Get events by date range", description = "Retrieves events within a specified date range")
    public ResponseEntity<ApiResponse<List<Event>>> getEventsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        return ResponseEntity.ok(ApiResponse.success(eventService.getEventsByDateRange(start, end)));
    }
    
    @GetMapping("/public")
    @Operation(summary = "Get public events", description = "Retrieves all public (non-private) events")
    public ResponseEntity<ApiResponse<List<Event>>> getPublicEvents() {
        return ResponseEntity.ok(ApiResponse.success(eventService.getPublicEvents()));
    }
    
    @PostMapping
    @Operation(summary = "Create event", description = "Creates a new event")
    public ResponseEntity<ApiResponse<Event>> createEvent(@Valid @RequestBody EventRequest eventRequest) {
        Event createdEvent = eventService.createEvent(eventRequest);
        return new ResponseEntity<>(ApiResponse.success(createdEvent), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}")
    @Operation(summary = "Update event", description = "Updates an existing event")
    public ResponseEntity<ApiResponse<Event>> updateEvent(
            @PathVariable Long id, 
            @Valid @RequestBody EventRequest eventRequest) {
        return ResponseEntity.ok(ApiResponse.success(eventService.updateEvent(id, eventRequest)));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete event", description = "Deletes an event by its ID")
    public ResponseEntity<ApiResponse<Void>> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

