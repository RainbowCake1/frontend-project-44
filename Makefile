install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
makelint:
	npx eslint .
brain-even:
	node bin/brain-even.js
