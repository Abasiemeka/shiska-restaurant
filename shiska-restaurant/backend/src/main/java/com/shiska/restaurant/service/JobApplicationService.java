package com.shiska.restaurant.service;

import com.shiska.restaurant.dto.request.JobApplicationRequest;
import com.shiska.restaurant.exception.ResourceNotFoundException;
import com.shiska.restaurant.model.JobApplication;
import com.shiska.restaurant.repository.JobApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobApplicationService {
    
    private final JobApplicationRepository jobApplicationRepository;
    
    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }
    
    public JobApplication getApplicationById(Long id) {
        return jobApplicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job application not found with id: " + id));
    }
    
    public List<JobApplication> getApplicationsByPosition(String position) {
        return jobApplicationRepository.findByPosition(position);
    }
    
    public List<JobApplication> getApplicationsByStatus(JobApplication.ApplicationStatus status) {
        return jobApplicationRepository.findByStatus(status);
    }
    
    public List<JobApplication> getApplicationsByEmail(String email) {
        return jobApplicationRepository.findByEmail(email);
    }
    
    @Transactional
    public JobApplication createApplication(JobApplicationRequest applicationRequest) {
        JobApplication application = JobApplication.builder()
                .fullName(applicationRequest.fullName())
                .email(applicationRequest.email())
                .phone(applicationRequest.phone())
                .position(applicationRequest.position())
                .experience(applicationRequest.experience())
                .coverLetter(applicationRequest.coverLetter())
                .status(JobApplication.ApplicationStatus.RECEIVED)
                .build();
        
        return jobApplicationRepository.save(application);
    }
    
    @Transactional
    public JobApplication updateApplicationStatus(Long id, JobApplication.ApplicationStatus status) {
        JobApplication application = getApplicationById(id);
        application.setStatus(status);
        return jobApplicationRepository.save(application);
    }
    
    @Transactional
    public JobApplication updateResumeUrl(Long id, String resumeUrl) {
        JobApplication application = getApplicationById(id);
        application.setResumeUrl(resumeUrl);
        return jobApplicationRepository.save(application);
    }
    
    @Transactional
    public void deleteApplication(Long id) {
        JobApplication application = getApplicationById(id);
        jobApplicationRepository.delete(application);
    }
}

