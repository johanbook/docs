numArticles=$(find docs | rg md | wc -l)
numWords=$(find docs | rg md | xargs cat | wc -w)
numAverage=$(($numWords / $numArticles))

echo "Number of articles: $numArticles"
echo "Number of words: $numWords"
echo "Average words: $numAverage"
