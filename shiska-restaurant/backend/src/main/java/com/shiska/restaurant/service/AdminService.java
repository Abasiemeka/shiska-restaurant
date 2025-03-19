package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.response.DashboardStats;
import com.shiska.restaurant.model.JobApplication;
import com.shiska.restaurant.model.Reservation;
import com.shiska.restaurant.repository.EventRepository;
import com.shiska.restaurant.repository.JobApplicationRepository;
import com.shiska.restaurant.repository.MenuRepository;
import com.shiska.restaurant.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final ReservationRepository reservationRepository;
    private final MenuRepository menuRepository;
    private final EventRepository eventRepository;
    private final JobApplicationRepository jobApplicationRepository;

    public DashboardStats getDashboardStats() {
        LocalDateTime now = LocalDateTime.now();
        
        long totalReservations = reservationRepository.count();
        long upcomingReservations = reservationRepository.findUpcomingReservationsByStatus(
                Reservation.ReservationStatus.CONFIRMED, now).size();
        
        long totalMenuItems = menuRepository.count();
        
        long totalEvents = eventRepository.count();
        long upcomingEvents = eventRepository.findUpcomingEvents(now).size();
        
        long totalJobApplications = jobApplicationRepository.count();
        long newJobApplications = jobApplicationRepository.findByStatus(
                JobApplication.ApplicationStatus.RECEIVED).size();
        
        // In a real application, this would come from a ratings table
        BigDecimal averageRating = new BigDecimal("4.7");
        
        return new DashboardStats(
                totalReservations,
                upcomingReservations,
                totalMenuItems,
                totalEvents,
                upcomingEvents,
                totalJobApplications,
                newJobApplications,
                averageRating
        );
    }
}

