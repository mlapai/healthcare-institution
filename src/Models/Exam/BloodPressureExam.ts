import {LaboratoryExamination} from "./LaboratoryExamination";
import {Doctor}                from "../Doctor";
import {Patient}               from "../Patient";

export class BloodPressureExam extends LaboratoryExamination {
    private upperBloodPressure: number;
    private lowerBloodPressure: number;
    private heartPulse: number;

    /**
     *
     * @param dateTime
     * @param doctor
     * @param patient
     * @param upperBloodPressure
     * @param lowerBloodPressure
     * @param heartPulse
     */
    constructor(
        dateTime: Date,
        doctor: Doctor,
        patient: Patient,
        upperBloodPressure?: number,
        lowerBloodPressure?: number,
        heartPulse?: number
    ) {
        super(dateTime, doctor, patient);
        this.upperBloodPressure = upperBloodPressure;
        this.lowerBloodPressure = lowerBloodPressure;
        this.heartPulse = heartPulse;
    }

    /**
     *
     * @param upperBloodPressure
     */
    public setUpperBloodPressure(upperBloodPressure: number): BloodPressureExam {
        this.upperBloodPressure = upperBloodPressure;

        return this;
    }

    /**
     *
     * @param lowerBloodPressure
     */
    public setLowerBloodPressure(lowerBloodPressure: number): BloodPressureExam {
        this.lowerBloodPressure = lowerBloodPressure;

        return this;
    }

    /**
     *
     * @param heartPulse
     */
    public setHeartPulse(heartPulse: number): BloodPressureExam {
        this.heartPulse = heartPulse;

        return this;
    }
}