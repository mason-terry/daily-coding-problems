/*
This problem was asked by Square.

Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.
*/

const simulateCoinToss = () => {
  const randNum = Math.floor(Math.random() * 10);
  if (randNum >= 2) {
    return "heads";
  }
  return "tails";
};

const test100Flips = () => {
  let heads = 0;
  let tails = 0;
  for (let i = 0; i < 100; i++) {
    const toss = simulateCoinToss();
    if (toss === "heads") {
      heads++;
    } else {
      tails++;
    }
  }

  console.log({ heads });
  console.log({ tails });
  return { heads, tails };
};

test100Flips();
