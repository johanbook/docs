find docs |
	rg md |
	xargs wc -w |
	sort |
	head -1 |
	tr -s ' ' |
	cut -d ' ' -f 3 |
	xargs vim
