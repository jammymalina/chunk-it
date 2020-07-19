export interface ChunkIt {
  count(count: number, strict?: boolean): any[];
  size(size: number): any[];
}

const validatePositiveNumber = (val: number, methodName: string): void => {
  if (isNaN(val) || typeof val !== "number" || val < 1) {
    throw new TypeError(`ChunkIt ${methodName} accepts only numbers >= 1`);
  }
};

export const chunkIt = (arr: any[]): ChunkIt => {
  if (!Array.isArray(arr)) {
    throw new TypeError("ChunkIt doesn't support splitting non-array objects");
  }

  return {
    size: (size: number): any => {
      validatePositiveNumber(size, "size");
      const chunkSize = Math.floor(size);
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      return result;
    },
    count: (count: number, strict = false): any => {
      validatePositiveNumber(count, "count");
      const chunkCount = Math.floor(count);
      const chunkSize = Math.floor(arr.length / chunkCount);
      if (chunkSize === 0) {
        if (strict) {
          throw new Error(`Unable to split the array into ${chunkCount} chunks`);
        }
        return arr.map((item) => [item]).concat(new Array(chunkCount - arr.length).fill([]));
      }
      let leftoverItemCount = arr.length - chunkSize * chunkCount;
      const result = [];
      let offset = 0;
      while (offset < arr.length) {
        const currentChunkSize = leftoverItemCount > 0 ? chunkSize + 1 : chunkSize;
        result.push(arr.slice(offset, offset + currentChunkSize));
        offset += currentChunkSize;
        --leftoverItemCount;
      }
      return result;
    },
  };
};
