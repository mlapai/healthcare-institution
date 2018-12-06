import {LaboratoryExamination} from "./LaboratoryExamination";

export abstract class StandardExamination extends LaboratoryExamination {
    protected value: number;
    protected lastMealTime: Date;

    /**
     *
     * @param dateTime
     * @param value
     * @param lastMealTime
     */
    constructor(dateTime: Date, value?: number, lastMealTime?: Date) {
        super(dateTime);
        this.value = value;
        this.lastMealTime = lastMealTime;
    }

    /**
     *
     * @param value
     */
    public setValue(value: number): this {
        this.value = value;
        return this;
    }

    /**
     *
     * @param lastMealTime
     */
    public setLastMealTime(lastMealTime: Date): this {
        this.lastMealTime = lastMealTime;
        return this;
    }
}