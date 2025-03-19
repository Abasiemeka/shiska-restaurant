package com.shiska.restaurant.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class FileStorageService {

    @Value("${file.upload-dir:./uploads}")
    private String uploadDir;
    
    public String storeFile(MultipartFile file, String subdirectory) {
        try {
            // Create the directory if it doesn't exist
            Path uploadPath = Paths.get(uploadDir, subdirectory).toAbsolutePath().normalize();
            Files.createDirectories(uploadPath);
            
            // Generate a unique filename
            String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
            String fileExtension = getFileExtension(originalFilename);
            String filename = UUID.randomUUID().toString() + fileExtension;
            
            // Copy the file to the target location
            Path targetLocation = uploadPath.resolve(filename);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
            
            log.info("Stored file: {} in {}", filename, uploadPath);
            
            // Return the relative path
            return subdirectory + "/" + filename;
        } catch (IOException ex) {
            log.error("Could not store file", ex);
            throw new RuntimeException("Could not store file. Please try again.", ex);
        }
    }
    
    private String getFileExtension(String filename) {
        if (filename.lastIndexOf(".") != -1 && filename.lastIndexOf(".") != 0) {
            return filename.substring(filename.lastIndexOf("."));
        } else {
            return "";
        }
    }
    
    public void deleteFile(String filePath) {
        try {
            Path path = Paths.get(uploadDir, filePath).toAbsolutePath().normalize();
            Files.deleteIfExists(path);
            log.info("Deleted file: {}", path);
        } catch (IOException ex) {
            log.error("Could not delete file", ex);
            throw new RuntimeException("Could not delete file. Please try again.", ex);
        }
    }
}

