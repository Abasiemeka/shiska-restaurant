package com.shiska.restaurant.controller;

import com.shiska.restaurant.dto.request.ReservationRequest;
import com.shiska.restaurant.dto.response.ApiResponse;
import com.shiska.restaurant.model.Reservation;
import com.shiska.restaurant.service.ReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReservationController {
    
    private final ReservationService reservationService;
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<Reservation>>> getAllReservations() {
        return ResponseEntity.ok(ApiResponse.success(reservationService.getAllReservations()));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Reservation>> getReservationById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(reservationService.getReservationById(id)));
    }
    
    @GetMapping("/email/{email}")
    public ResponseEntity<ApiResponse<List<Reservation>>> getReservationsByEmail(@PathVariable String email) {
        return ResponseEntity.ok(ApiResponse.success(reservationService.getReservationsByEmail(email)));
    }
    
    @GetMapping("/date-range")
    public ResponseEntity<ApiResponse<List<Reservation>>> getReservationsByDateRange(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime end) {
        return ResponseEntity.ok(ApiResponse.success(reservationService.getReservationsByDateRange(start, end)));
    }
    
    @GetMapping("/upcoming")
    public ResponseEntity<ApiResponse<List<Reservation>>> getUpcomingReservations() {
        return ResponseEntity.ok(ApiResponse.success(reservationService.getUpcomingReservations()));
    }
    
    @PostMapping
    public ResponseEntity<ApiResponse<Reservation>> createReservation(
            @Valid @RequestBody ReservationRequest reservationRequest) {
        Reservation createdReservation = reservationService.createReservation(reservationRequest);
        return new ResponseEntity<>(ApiResponse.success(createdReservation), HttpStatus.CREATED);
    }
    
    @PutMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Reservation>> updateReservationStatus(
            @PathVariable Long id,
            @RequestParam Reservation.ReservationStatus status) {
        return ResponseEntity.ok(ApiResponse.success(reservationService.updateReservationStatus(id, status)));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Reservation>> updateReservation(
            @PathVariable Long id,
            @Valid @RequestBody ReservationRequest reservationRequest) {
        return ResponseEntity.ok(ApiResponse.success(reservationService.updateReservation(id, reservationRequest)));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

