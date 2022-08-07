
export interface IUpgrade {
  name: string;
  description: string;
  type: "click" | "passive";
  value: number;
  cost: number;
}