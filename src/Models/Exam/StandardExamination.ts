import {LaboratoryExamination} from "./LaboratoryExamination";
import {Doctor}                from "../Doctor";
import {Patient}               from "../Patient";

export abstract class StandardExamination extends LaboratoryExamination {
    protected value: number;
    protected lastMealTime: Date;

    /**
     *
     * @param dateTime
     * @param doctor
     * @param patient
     * @param value
     * @param lastMealTime
     */
    protected constructor(dateTime: Date, doctor: Doctor, patient: Patient, value?: number, lastMealTime?: Date) {
        super(dateTime, doctor, patient);
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