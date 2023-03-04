#!/bin/sh

echo "Shortest articles:"
find docs | rg md | xargs wc -w | sort -g | head -5
