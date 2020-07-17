export interface ChunkIt {
  byCount(count: number, strict?: boolean): any[];
  bySize(size: number): any[];
}

const validatePositiveNumber = (val: number, methodName: string): void => {
  if (isNaN(val) || typeof val !== "number" || Math.floor(val) <= 0) {
    throw new TypeError(`ChunkIt ${methodName} accepts only numbers >= 1`);
  }
};

export const chunkIt = (arr: any[]): ChunkIt => {
  if (!Array.isArray(arr)) {
    throw new TypeError("ChunkIt doesn't support splitting non-array objects");
  }

  const bySize = (size: number): any => {
    validatePositiveNumber(size, "bySize");
    const chunkSize = Math.floor(size);
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const byCount = (count: number, strict = false): any => {
    validatePositiveNumber(count, "byCount");
    const chunkCount = Math.floor(count);
    const chunkSize = Math.floor(arr.length / chunkCount);
    if (chunkSize === 0) {
      if (strict) {
        throw new Error(`Unable to split array into ${chunkCount} chunks`);
      }
      return arr.map((item) => [item]).concat(new Array(chunkCount - arr.length).fill([]));
    }
    const chunkSizes: number[] = new Array(chunkCount).fill(chunkSize);
    const leftoverItemCount = arr.length - chunkSize * chunkCount;
    for (let i = 0; i < leftoverItemCount; i += 1) {
      chunkSizes[i] += 1;
    }
    const result = [];
    let offset = 0;
    for (let i = 0; i < chunkSizes.length; i += 1) {
      result.push(arr.slice(offset, offset + chunkSizes[i]));
      offset += chunkSizes[i];
    }
    return result;
  };

  return {
    bySize,
    byCount,
  };
};
