package com.shiska.restaurant.dto.response;

import java.math.BigDecimal;

public record DashboardStats(
    long totalReservations,
    long upcomingReservations,
    long totalMenuItems,
    long totalEvents,
    long upcomingEvents,
    long totalJobApplications,
    long newJobApplications,
    BigDecimal averageRating
) {}

