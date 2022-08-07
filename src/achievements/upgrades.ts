export const getUpgradesAchievements = (
  upgrades: { name: string; count: number }[]
) => [
  {
    name: "Up?",
    description: "Claim 15 upgrades",
    condition: upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 15,
  },
  {
    name: "Up!",
    description: "Claim 100 upgrades",
    condition: upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 100,
  },
  {
    name: "Armed to the Teeth",
    description: "Claim 1,000 upgrades",
    condition: upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 1000,
  },
  {
    name: "Artificial Intelligence",
    description: "Claim 1 million upgrades",
    condition:
      upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 1000000,
  },
  {
    name: "Technological Singularity",
    description: "Claim 1 billion upgrades",
    condition:
      upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 1000000000,
  },
  {
    name: "Up... Up...",
    description: "Claim 1 trillion upgrades",
    condition:
      upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 1000000000000,
  },
  {
    name: "No More Room for Improvement?",
    description: "Claim 1 quadrillion upgrades",
    condition:
      upgrades.map((a) => a.count).reduce((a, b) => a + b, 0) >= 1000000000000000,
  },
];
