export const UNITS = [
  {value: 'g', isWeight: true},
  {value: 'ml', isWeight: false},
  {value: 'l', isWeight: false}
];

export class Unit {
  value: string;
  isWeight: boolean;
}

export class MeasurementInput {
  value: number;
  unit: Unit;
}
