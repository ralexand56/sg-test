interface Card {
  suit: Suit;
  rank: number;
}

type Suit = `hearts` | `diamonds` | `spades` | `clubs`;

type Hand = `flush` | `straight` | `twoPair` | `pair` | `none`;

function calculateHand(cards: Card[]): Hand {
  if (findFlush(cards)) {
    return `flush`;
  } else if (findStraight(cards)) {
    return `straight`;
  } else if (findTwoPair(cards)) {
    return `twoPair`;
  } else if (findPair(cards)) {
    return `pair`;
  }
  return `none`;
}

const findFlush = (cards: Card[]): boolean => {
  const suits = cards.map(x => x.suit);

  return new Set(suits).size === 1;
};

const findStraight = (cards: Card[]): boolean => {
  const orderedCards = cards.sort((a, b) => a.rank - b.rank).map(x => x.rank);
  if (!isIntervalOfOneFunction(orderedCards)) {
    return false;
  }

  return orderedCards[orderedCards.length - 1] - orderedCards[0] === 4;
};

const isIntervalOfOneFunction = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      if (arr[i] - arr[i - 1] !== 1) {
        return false;
      }
    }
  }

  return true;
};

const findTwoPair = (cards: Card[]): boolean => {
  let hash = {};
  let pairCount = 0;

  for (let item of cards) {
    if (!hash[item.rank]) {
      hash[item.rank] = 1;
    } else {
      hash[item.rank] += 1;
    }
  }

  for (let item in hash) {
    if (hash[item] / 4 >= 1) {
      return true;
    }

    if (hash[item] / 2 >= 1) {
      pairCount += 1;
    }
  }

  return pairCount === 2;
};

const findPair = (cards: Card[]): boolean => {
  let hash = {};

  for (let item of cards) {
    if (!hash[item.rank]) {
      hash[item.rank] = 1;
    } else {
      hash[item.rank] += 1;
    }
  }

  for (let item in hash) {
    if (hash[item] / 2 >= 1) {
      return true;
    }
  }

  return false;
};