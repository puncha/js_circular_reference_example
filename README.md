Javascript Circular Reference Example
===

This example demos how module redirection leads to circular reference.

Run:
```bash
yarn install
yarn test
```
And you will see the following test results:
```text
 PASS  __tests__/app_test.ts
  ✓ BlockDetails is undefined because of circular reference! (4ms)
```

Checkout [\_\_tests\_\_/app_test.ts](./__tests__/app_test.ts) to analyze.
