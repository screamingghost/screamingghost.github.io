#!/bin/bash
for url in $(cat archive.txt); do
  content="$(curl -s "$url")"
  name=$(echo "$url" | tr / _)
  echo "$content" >"../data/$name.txt"
done
