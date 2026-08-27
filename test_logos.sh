#!/bin/bash
urls=(
  "https://www.omegahms.com/wp-content/themes/omegahms/assets/images/logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Teleperformance_logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Hinduja_Global_Solutions_Logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/Fujitsu_logo.svg"
  "https://conveytechlabs.com/wp-content/uploads/2025/03/convey-white-1-scaled.png"
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Airtel_logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/247.ai_logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/0/07/Flipkart_logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Tata_Motors_Logo.svg"
  "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
)

for url in "${urls[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" -L "$url")
  echo "$status - $url"
done
