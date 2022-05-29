# typedoc-bug

This repository showcases a bug with TypeDoc where it will refuse to generate any documentation for code in a `declare global` block.

Steps to reproduce:

- `git clone git@github.com:Zamiell/typedoc-bug.git`
- `cd typedoc-bug`
- `npm ci`
- `cat Foo.d.ts`
- `npx typedoc --entryPoints Foo.d.ts`
