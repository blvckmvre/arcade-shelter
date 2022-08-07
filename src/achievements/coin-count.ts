export const getCoinCountAchievements = (coins: number) => [
  {
    name: "First steps",
    description: "Earn 1,000 coins",
    condition: coins >= 1000,
  },
  {
    name: "Sounds like a lot",
    description: "Earn 10,000 coins",
    condition: coins >= 10000,
  },
  {
    name: "Ah, another thousand...",
    description: "Earn 100,000 coins",
    condition: coins >= 100000,
  },
  {
    name: "Rising fury",
    description: "Earn 1 million coins",
    condition: coins >= 1000000,
  },
  {
    name: "It's always not enough",
    description: "Earn 1 billion coins",
    condition: coins >= 1000000000,
  },
  {
    name: "Beyond the limits",
    description: "Earn 1 trillion coins",
    condition: coins >= 1000000000000,
  },
  {
    name: ".Being.",
    description: "Earn 1,111,111,111,111,111 coins",
    condition: coins >= 1111111111111111,
  },
  {
    name: "THEY SEEK TO FIND YOU",
    description: "It would be better to stop. Right now.",
    condition: coins >= Number.MAX_SAFE_INTEGER,
  },
];
