# Exit on error
set -e

# AWS Credentials
export AWS_S3_BUCKET=s3://files.telemetryjet.com

# Clear release content folder
mkdir -p content/releases
rm -rf content/releases/*

# Run python script to generate markdown from all files in release folder
python3 -V
pip3 -V
python3 generate.py