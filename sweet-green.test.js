const calculateHand = require("./sweet-green");

describe("Calculate card hand tests", () => {
  test("The hand is a flush", () => {
    const flushHand = [
      { suit: "clubs", rank: 2 },
      { suit: "clubs", rank: 8 },
      { suit: "clubs", rank: 5 },
      { suit: "clubs", rank: 7 },
      { suit: "clubs", rank: 4 }
    ];

    expect(calculateHand(flushHand)).toEqual("flush");
  });

  test("The hand that is both a straight and a flush is a flush", () => {
    const straightHand = [
      { suit: "clubs", rank: 1 },
      { suit: "clubs", rank: 2 },
      { suit: "clubs", rank: 3 },
      { suit: "clubs", rank: 4 },
      { suit: "clubs", rank: 5 }
    ];

    expect(calculateHand(straightHand)).toEqual("flush");
  });

  test("The hand is a straight", () => {
    const straightHand = [
      { suit: "clubs", rank: 1 },
      { suit: "clubs", rank: 2 },
      { suit: "spades", rank: 3 },
      { suit: "clubs", rank: 4 },
      { suit: "diamonds", rank: 5 }
    ];

    expect(calculateHand(straightHand)).toEqual("straight");
  });

  test("The hand is a straight", () => {
    const straightHand = [
      { suit: "spades", rank: 9 },
      { suit: "spades", rank: 10 },
      { suit: "diamonds", rank: 11 },
      { suit: "hearts", rank: 12 },
      { suit: "diamonds", rank: 13 }
    ];

    expect(calculateHand(straightHand)).toEqual("straight");
  });

  test("The hand with duplicates is not a straight", () => {
    const handWithDuplicates = [
      { suit: "clubs", rank: 1 },
      { suit: "clubs", rank: 3 },
      { suit: "spades", rank: 3 },
      { suit: "clubs", rank: 4 },
      { suit: "diamonds", rank: 5 }
    ];

    expect(calculateHand(handWithDuplicates)).not.toEqual("straight");
  });

  test("The hand is twoPair", () => {
    const handWithTwoPair = [
      { suit: "clubs", rank: 5 },
      { suit: "diamonds", rank: 5 },
      { suit: "spades", rank: 3 },
      { suit: "hearts", rank: 12 },
      { suit: "clubs", rank: 12 }
    ];

    expect(calculateHand(handWithTwoPair)).toEqual("twoPair");
  });

  test("The hand with one pair is not twoPair", () => {
    const handWithOnePair = [
      { suit: "clubs", rank: 1 },
      { suit: "clubs", rank: 3 },
      { suit: "spades", rank: 3 },
      { suit: "hearts", rank: 4 },
      { suit: "diamonds", rank: 5 }
    ];

    expect(calculateHand(handWithOnePair)).not.toEqual("twoPair");
  });

  test("The hand with four of a kind is twoPair", () => {
    const handWithFourOfKind = [
      { suit: "clubs", rank: 3 },
      { suit: "clubs", rank: 3 },
      { suit: "spades", rank: 3 },
      { suit: "hearts", rank: 3 },
      { suit: "diamonds", rank: 1 }
    ];

    expect(calculateHand(handWithFourOfKind)).toEqual("twoPair");
  });

  test("The hand is pair", () => {
    const handWithAPair = [
      { suit: "clubs", rank: 3 },
      { suit: "clubs", rank: 3 },
      { suit: "spades", rank: 2 },
      { suit: "hearts", rank: 4 },
      { suit: "diamonds", rank: 5 }
    ];

    expect(calculateHand(handWithAPair)).toEqual("pair");
  });

  test("The hand with 3 of a kind is still a pair", () => {
    const handWithThreeOfKind = [
      { suit: "clubs", rank: 1 },
      { suit: "clubs", rank: 2 },
      { suit: "spades", rank: 3 },
      { suit: "clubs", rank: 5 },
      { suit: "diamonds", rank: 5 }
    ];

    expect(calculateHand(handWithThreeOfKind)).toEqual("pair");
  });

  test("The hand is none", () => {
    const noneHand = [
      { suit: "clubs", rank: 1 },
      { suit: "diamonds", rank: 3 },
      { suit: "spades", rank: 12 },
      { suit: "clubs", rank: 4 },
      { suit: "hearts", rank: 11 }
    ];

    expect(calculateHand(noneHand)).toEqual("none");
  });
});