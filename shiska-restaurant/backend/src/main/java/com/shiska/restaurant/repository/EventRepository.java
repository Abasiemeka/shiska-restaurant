package com.shiska.restaurant.repository;

import com.shiska.restaurant.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByType(Event.EventType type);
    
    @Query("SELECT e FROM Event e WHERE e.startTime > :now ORDER BY e.startTime ASC")
    List<Event> findUpcomingEvents(LocalDateTime now);
    
    List<Event> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);
    
    List<Event> findByIsPrivate(Boolean isPrivate);
}

