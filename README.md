# chunk-it

[<img alt="github" src="https://img.shields.io/badge/github-jammymalina/chunk--it-8da0cb?style=for-the-badge&labelColor=555555&logo=github" height="20">](https://github.com/jammymalina/chunk-it)
[<img alt="npmjs.com" src="https://img.shields.io/npm/v/@array-utils/chunk-it?logo=npm&style=flat-square&color=fc8d62&logo=npm" height="20">](https://www.npmjs.com/package/@array-utils/chunk-it)
[<img alt="build status" src="https://img.shields.io/github/workflow/status/jammymalina/chunk-it/CI?style=for-the-badge" height="20">](https://github.com/jammymalina/chunk-it/actions?query=branch%3Amaster)

Split any array into chunks.

## Usage

### chunkIt(arr)

Constructor

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// Create "chunker"
const chunker = chunkIt([1, 2, 3, 4, 5, 6]);
const chunks = chunker.bySize(2);
```

### byCount()

Splits array into _n_ number of chunks. If _strict_ is set to true, the function will throw an error if there are fewer than _n_ elements in the array.

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// splits array into 5 chunks, array has fewer than 5 elements, strict set to false
const arr1 = [10, 20, 30];
const result1 = chunkIt(arr).byCount(5, false); // [[10], [20], [30], [], []]

// throws an error, array has fewer than 5 elements, strict set to true
const arr2 = [10, 20, 30];
chunkIt(arr2).byCount(5, true); // throws Error

// splits array into 3 chunks, exactly 3 elements in array, default strict = false
const arr3 = [10, 20, 30];
const result3 = chunkIt(arr3).byCount(3); // [[10], [20], [30]]

// splits array into 3 chunks
const arr4 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
/* [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110],
] */
const result4 = chunkIt(arr4).byCount(3, true);
```

### bySize

Splits array into chunks of length / size `n`

```javascript
import { chunkIt } from "@array-utils/chunk-it";

// splits array into chunks with max length / size of 3
const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const result1 = chunkIt(arr).bySize(3); // [[10, 20, 30], [40, 50, 60], [70, 80, 90], [100]]
```
