import { MonthlyCalulator } from "./monthlyCalculator";

export class HourflexPackageCalculator implements MonthlyCalulator {
    public calculate(totalHours: number): number {
        return totalHours * 50;
    }
}