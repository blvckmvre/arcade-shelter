export const getCoinSecondAchievements = (perSecond: number) => [
  {
    name: "Entrepreneur",
    description: "Have passive income of 100 coins/second",
    condition: perSecond >= 100,
  },
  {
    name: "Ease of Production",
    description: "Have passive income of 1,000 coins/second",
    condition: perSecond >= 1000,
  },
  {
    name: "Arcade Machines Start to Break",
    description: "Have passive income of 100,000 coins/second",
    condition: perSecond >= 100000,
  },
  {
    name: "Too Rich for Forbes",
    description: "Have passive income of 10 million coins/second",
    condition: perSecond >= 10000000,
  },
  {
    name: "Relax and Make Billions",
    description: "Have passive income of 1 billion coins/second",
    condition: perSecond >= 1000000000,
  },
  {
    name: "The Only Owner",
    description: "Have passive income of 1 trillion coins/second",
    condition: perSecond >= 1000000000000,
  },
  {
    name: "Too Much to Handle",
    description: "Have passive income of 1 quadrillion coins/second",
    condition: perSecond >= 1000000000000000,
  },
];
