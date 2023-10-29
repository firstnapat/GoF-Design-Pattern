import { MonthlyCalulator } from "./monthlyCalculator";

export class FixedPackageCalculator implements MonthlyCalulator {
    public calculate(totalHours: number): number {
        return 500;
    }
}