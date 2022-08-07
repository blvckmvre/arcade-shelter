export const getCoinClickAchievements = (perClick: number) => [
  {
    name: "Power Boost",
    description: "Reach clicking power of 100 coins/click",
    condition: perClick >= 100,
  },
  {
    name: "Even More Productivity",
    description: "Reach clicking power of 1,000 coins/click",
    condition: perClick >= 1000,
  },
  {
    name: "Gruesome Weight",
    description: "Reach clicking power of 100,000 coins/click",
    condition: perClick >= 100000,
  },
  {
    name: "Clicking Will Do",
    description: "Reach clicking power of 10 million coins/click",
    condition: perClick >= 10000000,
  },
  {
    name: "Killer Clicks",
    description: "Reach clicking power of 1 billion coins/click",
    condition: perClick >= 1000000000,
  },
  {
    name: "Cool, But How?",
    description: "Reach clicking power of 1 trillion coins/click",
    condition: perClick >= 1000000000000,
  },
  {
    name: "Neverending Coin Nightmare",
    description: "Reach clicking power of 1 quadrillion coins/click",
    condition: perClick >= 1000000000000000,
  },
];
