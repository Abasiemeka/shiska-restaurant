#!/bin/bash
# Database backup script for Shiska Restaurant

# Configuration
BACKUP_DIR="/backup"
CONTAINER_NAME="shiska-restaurant_db_1"
DB_NAME="shiska_restaurant"
DB_USER="postgres"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="${BACKUP_DIR}/${DB_NAME}_${TIMESTAMP}.sql"

# Ensure backup directory exists
mkdir -p ${BACKUP_DIR}

# Create backup
echo "Creating backup of ${DB_NAME} database..."
docker exec ${CONTAINER_NAME} pg_dump -U ${DB_USER} -d ${DB_NAME} -F p > ${BACKUP_FILE}

# Compress backup
echo "Compressing backup..."
gzip ${BACKUP_FILE}

# Remove backups older than 30 days
echo "Removing backups older than 30 days..."
find ${BACKUP_DIR} -name "${DB_NAME}_*.sql.gz" -type f -mtime +30 -delete

echo "Backup completed: ${BACKUP_FILE}.gz"

# List remaining backups
echo "Available backups:"
ls -lh ${BACKUP_DIR}

