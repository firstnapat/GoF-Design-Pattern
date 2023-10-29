import { FixedPackageCalculator } from "./fixedPackageCalculator";
import { HourflexPackageCalculator } from "./hourflexPackageCalculator";
import { MonthlyCalulator } from "./monthlyCalculator";
import { PackageType } from "./packageType";
import { SteppingPackageCalculator } from "./steppingPackageCalculator";
import { UnknownPackageCalculator } from "./unknownPackageCalculator";

export class PackageFactory {
    static createPackage(packageType: PackageType): MonthlyCalulator {
    switch (packageType) {
        case PackageType.FIXED:
            return new FixedPackageCalculator();    
        case PackageType.HOUR_FLEX:
            return new HourflexPackageCalculator();
        case PackageType.STEPPING:
            return new SteppingPackageCalculator();
        default:
            return new UnknownPackageCalculator();
        }
    }
}