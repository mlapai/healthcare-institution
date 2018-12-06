export class StandardExamValue {
    readonly value: number;
    readonly lastMealTime: Date;

    /**
     *
     * @param value
     * @param lastMealTime
     */
    constructor(value: number, lastMealTime: Date) {
        this.value = value;
        this.lastMealTime = lastMealTime;
    }

    public getValue(): number {
        return this.value;
    }

    public getLastMealTime(): Date {
        return this.lastMealTime;
    }
}