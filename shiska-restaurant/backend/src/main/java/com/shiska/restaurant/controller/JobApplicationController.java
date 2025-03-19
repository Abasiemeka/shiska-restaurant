package com.shiska.restaurant.controller;

import com.shiska.restaurant.dto.request.JobApplicationRequest;
import com.shiska.restaurant.dto.response.ApiResponse;
import com.shiska.restaurant.model.JobApplication;
import com.shiska.restaurant.service.JobApplicationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/careers/applications")
@RequiredArgsConstructor
@Tag(name = "Job Applications", description = "Job applications management API")
public class JobApplicationController {
    
    private final JobApplicationService jobApplicationService;
    
    @GetMapping
    @Operation(summary = "Get all applications", description = "Retrieves a list of all job applications")
    public ResponseEntity<ApiResponse<List<JobApplication>>> getAllApplications() {
        return ResponseEntity.ok(ApiResponse.success(jobApplicationService.getAllApplications()));
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get application by ID", description = "Retrieves a job application by its ID")
    public ResponseEntity<ApiResponse<JobApplication>> getApplicationById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success(jobApplicationService.getApplicationById(id)));
    }
    
    @GetMapping("/position/{position}")
    @Operation(summary = "Get applications by position", description = "Retrieves job applications filtered by position")
    public ResponseEntity<ApiResponse<List<JobApplication>>> getApplicationsByPosition(
            @PathVariable String position) {
        return ResponseEntity.ok(ApiResponse.success(jobApplicationService.getApplicationsByPosition(position)));
    }
    
    @GetMapping("/status/{status}")
    @Operation(summary = "Get applications by status", description = "Retrieves job applications filtered by status")
    public ResponseEntity<ApiResponse<List<JobApplication>>> getApplicationsByStatus(
            @PathVariable JobApplication.ApplicationStatus status) {
        return ResponseEntity.ok(ApiResponse.success(jobApplicationService.getApplicationsByStatus(status)));
    }
    
    @PostMapping
    @Operation(summary = "Create application", description = "Creates a new job application")
    public ResponseEntity<ApiResponse<JobApplication>> createApplication(
            @Valid @RequestBody JobApplicationRequest applicationRequest) {
        JobApplication createdApplication = jobApplicationService.createApplication(applicationRequest);
        return new ResponseEntity<>(ApiResponse.success(createdApplication), HttpStatus.CREATED);
    }
    
    @PostMapping(value = "/{id}/resume", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Upload resume", description = "Uploads a resume for an existing job application")
    public ResponseEntity<ApiResponse<JobApplication>> uploadResume(
            @PathVariable Long id,
            @RequestParam("file") MultipartFile file) {
        // In a real application, you would save the file to a storage service and get a URL
        String resumeUrl = "https://storage.example.com/resumes/" + id + "/" + file.getOriginalFilename();
        JobApplication updatedApplication = jobApplicationService.updateResumeUrl(id, resumeUrl);
        return ResponseEntity.ok(ApiResponse.success(updatedApplication));
    }
    
    @PutMapping("/{id}/status")
    @Operation(summary = "Update application status", description = "Updates the status of an existing job application")
    public ResponseEntity<ApiResponse<JobApplication>> updateApplicationStatus(
            @PathVariable Long id,
            @RequestParam JobApplication.ApplicationStatus status) {
        return ResponseEntity.ok(ApiResponse.success(jobApplicationService.updateApplicationStatus(id, status)));
    }
    
    @DeleteMapping("/{id}")
    @Operation(summary = "Delete application", description = "Deletes a job application by its ID")
    public ResponseEntity<ApiResponse<Void>> deleteApplication(@PathVariable Long id) {
        jobApplicationService.deleteApplication(id);
        return ResponseEntity.ok(ApiResponse.success(null));
    }
}

