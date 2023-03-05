install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
makelint:
	npx eslint .
brain-even:
	node bin/games/brain-even.js
brain-calc:
	node bin/games/brain-calc.js
brain-gcd:
	node bin/games/brain-gcd.js
brain-progression:
	node bin/games/brain-progression.js
brain-prime:
	node bin/games/brain-prime.js