# chunk-it

[<img alt="github" src="https://img.shields.io/badge/github-jammymalina/chunk--it-8da0cb?style=for-the-badge&labelColor=555555&logo=github">](https://github.com/jammymalina/chunk-it)
[<img alt="npmjs.com" src="https://img.shields.io/npm/v/@array-utils/chunk-it?logo=npm&style=for-the-badge&color=fc8d62&logo=npm">](https://www.npmjs.com/package/@array-utils/chunk-it)
[<img alt="build status" src="https://img.shields.io/github/workflow/status/jammymalina/chunk-it/CI?style=for-the-badge">](https://github.com/jammymalina/chunk-it/actions?query=branch%3Amaster)
[<img alt="sonar status" src="https://img.shields.io/sonar/quality_gate/jammymalina_chunk-it?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge">](https://sonarcloud.io/dashboard?id=jammymalina_chunk-it)
<img alt="types" src="https://shields-staging.herokuapp.com/npm/types/typescript?logo=typescript&style=for-the-badge">

Split any array into chunks.

## Usage

### chunkIt(arr)

Creates "chunker" for the array _arr_. Throws an error if _arr_ is not an array.

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// Creates "chunker"
const chunker = chunkIt([1, 2, 3, 4, 5, 6]);

// Throws an error if arr is not an array
chunkIt("boooooooooom");
```

### chunkIt.count(n, strict = false)

Splits an array into _n_ number of chunks. If _strict_ is set to true, the function will throw an error if there are fewer than _n_ elements in the array.

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// Splits an array into 5 chunks, array has fewer than 5 elements, default strict => false
const arr1 = [10, 20, 30];
const result1 = chunkIt(arr).count(5); // [[10], [20], [30], [], []]

// Throws an error, array has fewer than 5 elements, strict set to true
const arr2 = [10, 20, 30];
chunkIt(arr2).count(5, true); // throws Error

// Splits an array into 3 chunks, exactly 3 elements in the array, strict set to true
const arr3 = [10, 20, 30];
const result3 = chunkIt(arr3).count(3); // [[10], [20], [30]]

// Splits an array into 3 chunks
const arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
/* [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110],
] */
const result4 = chunkIt(arr4).count(3, true);
```

### chunkIt.size(n)

Splits an array into chunks of length / size _n_

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// Splits an array into chunks with max length / size of 3
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const result1 = chunkIt(arr).size(3); // [[10, 20, 30], [40, 50, 60], [70, 80, 90], [100]]
```
