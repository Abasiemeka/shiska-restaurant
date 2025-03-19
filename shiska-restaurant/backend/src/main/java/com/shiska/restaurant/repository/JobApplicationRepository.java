package com.shiska.restaurant.repository;

import com.shiska.restaurant.model.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByPosition(String position);
    List<JobApplication> findByStatus(JobApplication.ApplicationStatus status);
    List<JobApplication> findByEmail(String email);
}

