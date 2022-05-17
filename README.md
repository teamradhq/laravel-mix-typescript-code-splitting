# Laravel Mix TypeScript Code Splitting

Using dynamic `import()` function does not extract modules when using TypeScript.

If we compile JavaScript, bundles are extracted:

```bash
npm run ts

Laravel Mix v6.0.43   

✔ Compiled Successfully in 119ms
┌──────────────────────────────────────┬───────────┐
│                                 File │ Size      │
├──────────────────────────────────────┼───────────┤
│                     /dist/js/main.js │ 10.3 KiB  │
│          dist/js/main/src_js_b_js.js │ 588 bytes │
└──────────────────────────────────────┴───────────┘
webpack compiled successfully

Process finished with exit code 0
```

If we compile TypeScript, we only get main entry file:

```bash
npm run ts

Laravel Mix v6.0.43   

✔ Compiled Successfully in 918ms
┌───────────────────────────────────────┬──────────┐
│                                  File │ Size     │
├───────────────────────────────────────┼──────────┤
│                      /dist/ts/main.js │ 1.05 KiB │
└───────────────────────────────────────┴──────────┘
webpack compiled successfully

Process finished with exit code 0
```

I found this working with a detailed `tsconfig.json` but am able to replicate with a minimal one as demonstrated in this repo.
