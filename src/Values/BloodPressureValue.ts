export class BloodPressureValue {
    readonly upperPressure: number;
    readonly lowerPressure: number;
    readonly heartPulse: number;

    constructor(upperPressure: number, lowerPressure: number, heartPulse: number) {
        this.upperPressure = upperPressure;
        this.lowerPressure = lowerPressure;
        this.heartPulse = heartPulse;
    }

    public getUpperPressure(): number {
        return this.upperPressure;
    }

    public getLowerPressure(): number {
        return this.lowerPressure;
    }

    public getHeartPulse(): number {
        return this.heartPulse;
    }
}