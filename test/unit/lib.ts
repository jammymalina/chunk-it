import "mocha";

import { expect } from "chai";

import { chunkIt } from "../../src/lib";

describe("chunkIt", () => {
  it("should return ChunkIt interface", () => {
    const chunkItFunctions = chunkIt([]);
    expect(chunkItFunctions).to.exist;
  });

  it("should throw TypeError, undefined argument", () => {
    expect((chunkIt as any).bind(null)).to.throw(TypeError);
  });

  it("should throw TypeError, null argument", () => {
    expect((chunkIt as any).bind(null, null)).to.throw(TypeError);
  });

  it("should throw TypeError, string argument", () => {
    expect((chunkIt as any).bind(null, "boom")).to.throw(TypeError);
  });

  describe("count", () => {
    it("should split empty array into 3 chunks, default strict", () => {
      const arr = [] as any[];
      const expectedArr = [[], [], []];
      expect(chunkIt(arr).count(3)).to.deep.equal(expectedArr);
    });

    it("should split array into 5 chunks, array has fewer than 5 elements, strict set to false", () => {
      const arr = [10, 20, 30];
      const expectedArr = [[10], [20], [30], [], []];
      expect(chunkIt(arr).count(5, false)).to.deep.equal(expectedArr);
    });

    it("should split array into 3 chunks, exactly 3 elements in array", () => {
      const arr = [10, 20, 30];
      const expectedArr = [[10], [20], [30]];
      expect(chunkIt(arr).count(3, true)).to.deep.equal(expectedArr);
    });

    it("should split array into 3 chunks", () => {
      const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
      const expectedArr = [
        [10, 20, 30, 40],
        [50, 60, 70, 80],
        [90, 100, 110],
      ];
      expect(chunkIt(arr).count(3, true)).to.deep.equal(expectedArr);
    });

    it("should split array into 4 chunks", () => {
      const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
      const expectedArr = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90],
        [100, 110, 120],
      ];
      expect(chunkIt(arr).count(4, true)).to.deep.equal(expectedArr);
    });

    it("should NOT split empty array into 3 chunks, strict set to true", () => {
      const arr = [] as any[];
      expect(chunkIt(arr).count.bind(null, 3, true)).to.throw("Unable to split the array into 3 chunks");
    });

    it("should NOT split array into 5 chunks, array has fewer than 5 elements, strict set to true", () => {
      const arr = [10, 20, 30];
      expect(chunkIt(arr).count.bind(null, 5, true)).to.throw("Unable to split the array into 5 chunks");
    });

    it("should throw TypeError, non-number argument", () => {
      const count = chunkIt([]).count;
      expect((count as any).bind(null, "boom")).to.throw(TypeError);
    });

    it("should throw TypeError, negative number argument", () => {
      const count = chunkIt([]).count;
      expect((count as any).bind(null, -1)).to.throw(TypeError);
    });
  });

  describe("size", () => {
    it("should NOT split empty array into chunks", () => {
      expect(chunkIt([]).size(10)).to.have.lengthOf(0);
    });

    it("should split array into chunks with max length of 3", () => {
      const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      const expectedArr = [[10, 20, 30], [40, 50, 60], [70, 80, 90], [100]];
      expect(chunkIt(arr).size(3)).to.deep.equal(expectedArr);
    });

    it("should split array into chunks, chunk size greater than array size", () => {
      const arr = [10, 20, 30];
      const expectedArr = [[10, 20, 30]];
      expect(chunkIt(arr).size(5)).to.deep.equal(expectedArr);
    });

    it("should throw TypeError, non-number argument", () => {
      const size = chunkIt([]).size;
      expect((size as any).bind(null, "boom")).to.throw(TypeError);
    });

    it("should throw TypeError, negative number argument", () => {
      const size = chunkIt([]).size;
      expect((size as any).bind(null, -1)).to.throw(TypeError);
    });
  });
});
