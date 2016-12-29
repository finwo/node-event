uglifyjs:
	{ echo "// Build by" $$(whoami) "@" $$(date) ; uglifyjs -c -m -- dist/global-events.js ; } > dist/global-events.min.js
