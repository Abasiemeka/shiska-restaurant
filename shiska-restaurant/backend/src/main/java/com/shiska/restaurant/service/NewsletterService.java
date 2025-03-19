package com.shiska.restaurant.service;

import com.shiska.restaurant.exception.ResourceNotFoundException;
import com.shiska.restaurant.model.NewsletterSubscription;
import com.shiska.restaurant.repository.NewsletterSubscriptionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class NewsletterService {

    private final NewsletterSubscriptionRepository subscriptionRepository;
    private final EmailService emailService;

    @Transactional
    public void subscribe(String email) {
        Optional<NewsletterSubscription> existingSubscription = subscriptionRepository.findByEmail(email);
        
        if (existingSubscription.isPresent()) {
            NewsletterSubscription subscription = existingSubscription.get();
            if (!subscription.isActive()) {
                subscription.setActive(true);
                subscription.setUpdatedAt(LocalDateTime.now());
                subscriptionRepository.save(subscription);
                log.info("Reactivated newsletter subscription for email: {}", email);
            } else {
                log.info("Email already subscribed to newsletter: {}", email);
            }
        } else {
            NewsletterSubscription subscription = NewsletterSubscription.builder()
                    .email(email)
                    .active(true)
                    .subscribedAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build();
            subscriptionRepository.save(subscription);
            log.info("New newsletter subscription for email: {}", email);
        }
    }

    @Transactional
    public void unsubscribe(String email) {
        NewsletterSubscription subscription = subscriptionRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("No subscription found for email: " + email));
        
        subscription.setActive(false);
        subscription.setUpdatedAt(LocalDateTime.now());
        subscriptionRepository.save(subscription);
        log.info("Unsubscribed email from newsletter: {}", email);
    }

    public List<NewsletterSubscription> getAllActiveSubscriptions() {
        return subscriptionRepository.findByActiveTrue();
    }
}

