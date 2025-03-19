package com.shiska.restaurant.controller;

import com.shiska.restaurant.dto.request.ContactRequest;
import com.shiska.restaurant.dto.request.NewsletterSubscriptionRequest;
import com.shiska.restaurant.dto.response.ApiResponse;
import com.shiska.restaurant.service.EmailService;
import com.shiska.restaurant.service.NewsletterService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Tag(name = "Contact", description = "Contact and newsletter API")
public class ContactController {

    private final EmailService emailService;
    private final NewsletterService newsletterService;

    @PostMapping
    @Operation(summary = "Submit contact form", description = "Submits a contact form message")
    public ResponseEntity<ApiResponse<Void>> submitContactForm(@Valid @RequestBody ContactRequest contactRequest) {
        emailService.sendContactFormEmail(contactRequest);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
    
    @PostMapping("/newsletter/subscribe")
    @Operation(summary = "Subscribe to newsletter", description = "Subscribes an email to the newsletter")
    public ResponseEntity<ApiResponse<Void>> subscribeToNewsletter(
            @Valid @RequestBody NewsletterSubscriptionRequest request) {
        newsletterService.subscribe(request.email());
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

