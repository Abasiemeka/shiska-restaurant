package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.request.ReservationRequest;
import com.shiska.restaurant.exception.ResourceNotFoundException;
import com.shiska.restaurant.model.Reservation;
import com.shiska.restaurant.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationService {
    
    private final ReservationRepository reservationRepository;
    
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }
    
    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reservation not found with id: " + id));
    }
    
    public List<Reservation> getReservationsByEmail(String email) {
        return reservationRepository.findByEmail(email);
    }
    
    public List<Reservation> getReservationsByDateRange(LocalDateTime start, LocalDateTime end) {
        return reservationRepository.findByReservationTimeBetween(start, end);
    }
    
    public List<Reservation> getUpcomingReservations() {
        return reservationRepository.findUpcomingReservationsByStatus(
                Reservation.ReservationStatus.CONFIRMED, 
                LocalDateTime.now()
        );
    }
    
    @Transactional
    public Reservation createReservation(ReservationRequest reservationRequest) {
        Reservation reservation = Reservation.builder()
                .customerName(reservationRequest.customerName())
                .email(reservationRequest.email())
                .phone(reservationRequest.phone())
                .reservationTime(reservationRequest.reservationTime())
                .partySize(reservationRequest.partySize())
                .specialRequests(reservationRequest.specialRequests())
                .status(Reservation.ReservationStatus.PENDING)
                .build();
        
        return reservationRepository.save(reservation);
    }
    
    @Transactional
    public Reservation updateReservationStatus(Long id, Reservation.ReservationStatus status) {
        Reservation reservation = getReservationById(id);
        reservation.setStatus(status);
        return reservationRepository.save(reservation);
    }
    
    @Transactional
    public Reservation updateReservation(Long id, ReservationRequest reservationRequest) {
        Reservation reservation = getReservationById(id);
        
        reservation.setCustomerName(reservationRequest.customerName());
        reservation.setEmail(reservationRequest.email());
        reservation.setPhone(reservationRequest.phone());
        reservation.setReservationTime(reservationRequest.reservationTime());
        reservation.setPartySize(reservationRequest.partySize());
        reservation.setSpecialRequests(reservationRequest.specialRequests());
        
        return reservationRepository.save(reservation);
    }
    
    @Transactional
    public void deleteReservation(Long id) {
        Reservation reservation = getReservationById(id);
        reservationRepository.delete(reservation);
    }
}

