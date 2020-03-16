export const NUTRITIONS: NutritionEntry[] = [
  {label: 'Nutrition.Fat', limitsG: [3, 17.5], limitsML: [1.5, 8.75]},
  {label: 'Nutrition.SFat', limitsG: [1.5, 5], limitsML: [0.75, 2.5]},
  {label: 'Nutrition.Sugar', limitsG: [5, 22.5], limitsML: [2.5, 11.25]},
  {label: 'Nutrition.Salt', limitsG: [0.3, 1.5], limitsML: [0.3, 1.5]}
];

export class NutritionEntry {
  label: string;
  limitsG: number[];
  limitsML: number[];
}
