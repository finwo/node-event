uglifyjs:
	{ echo "// Build by" $$(whoami) "@" $$(date) ; uglifyjs -c -m -- dist/gsevent.js ; } > dist/gsevent.min.js
