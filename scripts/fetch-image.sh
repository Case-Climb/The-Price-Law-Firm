#!/bin/bash
# fetch-image.sh <photo-id> <output-name> [width]
# Downloads an Unsplash CDN image at a sane size for web use.
ID="$1"; OUT="$2"; W="${3:-1600}"
URL="https://images.unsplash.com/${ID}?fm=jpg&q=72&w=${W}&auto=format&fit=crop"
curl -sS -L --max-time 60 \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36" \
  "$URL" -o "assets/img/${OUT}.jpg" -w "%{http_code} %{size_download} ${OUT}.jpg\n"
