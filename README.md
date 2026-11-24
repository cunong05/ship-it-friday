# Ship It Friday

[![make.fun · u-mgwals-ship-it-friday-30bd407a](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/cunong05/ship-it-friday/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/cunong05/ship-it-friday/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)

## The entry

> feat: ship it Friday — tests pass on my machine, which is the only machine that matters. Deploying now. See you Monday, probably.

## Why it fits the brief

It's the classic Friday deploy: confidence built entirely on one machine, a
deploy happening anyway, and a cheerful acceptance that whatever breaks is
Monday's problem. Exactly the one-line commit an AI coding agent would write
right before breaking production on a Friday.

## How it works

`main.ts` holds the entry as a single constant, validates it (1–159 characters,
one line, non-whitespace, no trailing newline), writes it to
`/output/entry.txt`, then reads the file back and throws if the bytes differ
from the constant.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

- Bounty: [Ship It Friday](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
- Referral code: `4w89k05q`
- Prize pool: $2 in USDC

## License

MIT — see [LICENSE](LICENSE).
