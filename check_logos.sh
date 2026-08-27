domains=(
  "omegahms.com"
  "teleperformance.com"
  "hgs.cx"
  "mitsubishi.com"
  "fujitsu.com"
  "conveytechlabs.com"
  "airtel.in"
  "accenture.com"
  "247.ai"
  "elmeasure.com"
  "flipkart.com"
  "elecsis.com"
  "jindalx.com"
  "upgrad.com"
  "tatamotors.com"
  "wipro.com"
)
for domain in "${domains[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "https://logo.clearbit.com/$domain")
  echo "$domain: $status"
done
