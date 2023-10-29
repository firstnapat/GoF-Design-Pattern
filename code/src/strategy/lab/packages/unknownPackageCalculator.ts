import { MonthlyCalulator } from "./monthlyCalculator";

export class UnknownPackageCalculator implements MonthlyCalulator {
    calculate(totalHours: number): number {
        return 0;
    }
}