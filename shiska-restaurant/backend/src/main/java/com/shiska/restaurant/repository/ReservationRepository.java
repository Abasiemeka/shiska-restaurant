package com.shiska.restaurant.repository;

import com.shiska.restaurant.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByEmail(String email);
    
    List<Reservation> findByReservationTimeBetween(LocalDateTime start, LocalDateTime end);
    
    @Query("SELECT r FROM Reservation r WHERE r.status = :status AND r.reservationTime > :now")
    List<Reservation> findUpcomingReservationsByStatus(Reservation.ReservationStatus status, LocalDateTime now);
}

