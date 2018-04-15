/* eslint-disable max-len */

const no2wl = require("./no2wl");

describe("number2wordlist", () => {
  const { number2wordlist } = no2wl;
  it("should have a function named number2wordlist", () => {
    expect(number2wordlist).not.toBe(undefined);
    expect(typeof number2wordlist).toBe("function");
  });

  it("should accept only one argument", () => {
    expect(() => number2wordlist("1")).not.toThrow();
    expect(() => number2wordlist()).toThrow();
    expect(() => number2wordlist(1, 2)).toThrow();
  });

  it("should accept only one argument which is a string", () => {
    expect(() => number2wordlist(1)).toThrow();
    expect(() => number2wordlist([])).toThrow();
    expect(() => number2wordlist({})).toThrow();
    expect(() => number2wordlist("1")).not.toThrow();
  });

  it("should accept only one argument which is a string made of digits", () => {
    expect(() => number2wordlist("1")).not.toThrow();
    expect(() => number2wordlist("12345")).not.toThrow();
    expect(() => number2wordlist("a")).toThrow();
    expect(() => number2wordlist("1b")).toThrow();
    expect(() => number2wordlist("a2")).toThrow();
    expect(() => number2wordlist("a2c")).toThrow();
    expect(() => number2wordlist("1b3")).toThrow();
  });

  it("should return an array", () => {
    const result = number2wordlist("1");
    expect(result instanceof Array).toBeTruthy();
  });

  it("should return an array of strings", () => {
    const result = number2wordlist("1");
    result.forEach((element) => {
      expect(typeof element).toBe("string");
    });
  });

  it("should return [] when input is '1'", () => {
    const result = number2wordlist("1");
    expect(result).toHaveLength(0);
  });

  it("should return ['a', 'b', 'c'] when input is '2'", () => {
    const result = number2wordlist("2");
    expect(result).toHaveLength(3);
    expect(result).toContain("a");
    expect(result).toContain("b");
    expect(result).toContain("c");
  });

  it("should return ['d', 'e', 'f'] when input is '3'", () => {
    const result = number2wordlist("3");
    expect(result).toHaveLength(3);
    expect(result).toContain("d");
    expect(result).toContain("e");
    expect(result).toContain("f");
  });

  it("should return ['g', 'h', 'i'] when input is '4'", () => {
    const result = number2wordlist("4");
    expect(result).toHaveLength(3);
    expect(result).toContain("g");
    expect(result).toContain("h");
    expect(result).toContain("i");
  });

  it("should return ['j', 'k', 'l'] when input is '5'", () => {
    const result = number2wordlist("5");
    expect(result).toHaveLength(3);
    expect(result).toContain("j");
    expect(result).toContain("k");
    expect(result).toContain("l");
  });

  it("should return ['m', 'n', 'o'] when input is '6'", () => {
    const result = number2wordlist("6");
    expect(result).toHaveLength(3);
    expect(result).toContain("m");
    expect(result).toContain("n");
    expect(result).toContain("o");
  });

  it("should return ['p', 'q', 'r', 's'] when input is '7'", () => {
    const result = number2wordlist("7");
    expect(result).toHaveLength(4);
    expect(result).toContain("p");
    expect(result).toContain("q");
    expect(result).toContain("r");
    expect(result).toContain("s");
  });

  it("should return ['t', 'u', 'v'] when input is '8'", () => {
    const result = number2wordlist("8");
    expect(result).toHaveLength(3);
    expect(result).toContain("t");
    expect(result).toContain("u");
    expect(result).toContain("v");
  });

  it("should return ['w', 'x', 'y', 'z'] when input is '9'", () => {
    const result = number2wordlist("9");
    expect(result).toHaveLength(4);
    expect(result).toContain("w");
    expect(result).toContain("x");
    expect(result).toContain("y");
    expect(result).toContain("z");
  });

  it("should return ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] when input is '23'", () => {
    const result = number2wordlist("23");
    expect(result).toHaveLength(9);
    ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].forEach(element =>
      expect(result).toContain(element));
  });

  it("should return ['ag', 'ah', 'ai', 'bg', 'bh', 'bi', 'cg', 'ch', 'ci'] when input is '24'", () => {
    const result = number2wordlist("24");
    expect(result).toHaveLength(9);
    ["ag", "ah", "ai", "bg", "bh", "bi", "cg", "ch", "ci"].forEach(element =>
      expect(result).toContain(element));
  });

  it("should return [ 'adg', 'adh','adi','aeg','aeh','aei','afg','afh','afi','bdg','bdh','bdi','beg','beh','bei','bfg','bfh','bfi','cdg','cdh','cdi','ceg','ceh','cei','cfg','cfh','cfi' ] when input is '234'", () => {
    const result = number2wordlist("234");
    expect(result).toHaveLength(27);
    [
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ].forEach(element => expect(result).toContain(element));
  });
});
