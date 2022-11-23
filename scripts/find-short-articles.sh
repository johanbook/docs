echo "Shortest articles:"
find docs | rg md | xargs wc -w | sort | head -5 
