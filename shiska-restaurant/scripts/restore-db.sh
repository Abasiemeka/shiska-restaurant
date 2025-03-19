#!/bin/bash
# Database restore script for Shiska Restaurant

# Check if backup file is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <backup_file>"
    echo "Example: $0 /backup/shiska_restaurant_20250318_120000.sql.gz"
    exit 1
fi

# Configuration
BACKUP_FILE=$1
CONTAINER_NAME="shiska-restaurant_db_1"
DB_NAME="shiska_restaurant"
DB_USER="postgres"

# Check if backup file exists
if [ ! -f ${BACKUP_FILE} ]; then
    echo "Error: Backup file ${BACKUP_FILE} not found."
    exit 1
fi

# Confirm with user
echo "WARNING: This will overwrite the current database with the backup."
echo "Database: ${DB_NAME}"
echo "Backup file: ${BACKUP_FILE}"
read -p "Are you sure you want to continue? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Restore cancelled."
    exit 1
fi

# Decompress if gzipped
if [[ ${BACKUP_FILE} == *.gz ]]; then
    echo "Decompressing backup file..."
    gunzip -c ${BACKUP_FILE} > /tmp/restore_temp.sql
    RESTORE_FILE="/tmp/restore_temp.sql"
else
    RESTORE_FILE=${BACKUP_FILE}
fi

# Restore database
echo "Restoring database from backup..."
cat ${RESTORE_FILE} | docker exec -i ${CONTAINER_NAME} psql -U ${DB_USER} -d ${DB_NAME}

# Clean up
if [[ ${BACKUP_FILE} == *.gz ]]; then
    echo "Cleaning up temporary files..."
    rm ${RESTORE_FILE}
fi

echo "Restore completed successfully."

