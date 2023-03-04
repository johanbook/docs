#!/bin/sh

find docs |
	rg md |
	xargs wc -w |
	sort -g |
	head -1 |
	tr -s ' ' |
	cut -d ' ' -f 3 |
	xargs vim
