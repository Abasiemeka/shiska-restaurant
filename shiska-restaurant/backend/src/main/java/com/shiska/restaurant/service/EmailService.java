package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.request.ContactRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;
    
    // In a real application, these would be configured in application.properties
    private static final String CONTACT_EMAIL_TO = "contact@shiska.com";
    private static final String RESERVATION_EMAIL_TO = "reservations@shiska.com";
    private static final String CAREERS_EMAIL_TO = "careers@shiska.com";
    
    public void sendContactFormEmail(ContactRequest contactRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(CONTACT_EMAIL_TO);
        message.setSubject("Contact Form Submission: " + contactRequest.subject());
        message.setText(buildContactEmailBody(contactRequest));
        message.setReplyTo(contactRequest.email());
        
        try {
            mailSender.send(message);
            log.info("Contact form email sent successfully from: {}", contactRequest.email());
        } catch (Exception e) {
            log.error("Failed to send contact form email", e);
            // In a real application, you might want to handle this exception differently
        }
    }
    
    private String buildContactEmailBody(ContactRequest contactRequest) {
        return String.format(
                "New contact form submission:\n\n" +
                "Name: %s\n" +
                "Email: %s\n" +
                "Phone: %s\n" +
                "Subject: %s\n\n" +
                "Message:\n%s",
                contactRequest.name(),
                contactRequest.email(),
                contactRequest.phone(),
                contactRequest.subject(),
                contactRequest.message()
        );
    }
    
    // Additional email methods would be implemented here for reservations, job applications, etc.
}

