package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.request.EventRequest;
import com.shiska.restaurant.exception.ResourceNotFoundException;
import com.shiska.restaurant.model.Event;
import com.shiska.restaurant.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {
    
    private final EventRepository eventRepository;
    
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
    
    public Event getEventById(Long id) {
        return eventRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Event not found with id: " + id));
    }
    
    public List<Event> getEventsByType(Event.EventType type) {
        return eventRepository.findByType(type);
    }
    
    public List<Event> getUpcomingEvents() {
        return eventRepository.findUpcomingEvents(LocalDateTime.now());
    }
    
    public List<Event> getEventsByDateRange(LocalDateTime start, LocalDateTime end) {
        return eventRepository.findByStartTimeBetween(start, end);
    }
    
    public List<Event> getPublicEvents() {
        return eventRepository.findByIsPrivate(false);
    }
    
    @Transactional
    public Event createEvent(EventRequest eventRequest) {
        Event event = Event.builder()
                .title(eventRequest.title())
                .description(eventRequest.description())
                .startTime(eventRequest.startTime())
                .endTime(eventRequest.endTime())
                .imageUrl(eventRequest.imageUrl())
                .type(eventRequest.type())
                .capacity(eventRequest.capacity())
                .isPrivate(eventRequest.isPrivate())
                .build();
        
        return eventRepository.save(event);
    }
    
    @Transactional
    public Event updateEvent(Long id, EventRequest eventRequest) {
        Event existingEvent = getEventById(id);
        
        existingEvent.setTitle(eventRequest.title());
        existingEvent.setDescription(eventRequest.description());
        existingEvent.setStartTime(eventRequest.startTime());
        existingEvent.setEndTime(eventRequest.endTime());
        existingEvent.setImageUrl(eventRequest.imageUrl());
        existingEvent.setType(eventRequest.type());
        existingEvent.setCapacity(eventRequest.capacity());
        existingEvent.setIsPrivate(eventRequest.isPrivate());
        
        return eventRepository.save(existingEvent);
    }
    
    @Transactional
    public void deleteEvent(Long id) {
        Event event = getEventById(id);
        eventRepository.delete(event);
    }
}

