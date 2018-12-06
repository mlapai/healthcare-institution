import {LaboratoryExamination} from "./LaboratoryExamination";

export class BloodPressureExam extends LaboratoryExamination {
    private upperBloodPressure: number;
    private lowerBloodPressure: number;
    private heartPulse: number;

    /**
     *
     * @param dateTime
     * @param upperBloodPressure
     * @param lowerBloodPressure
     * @param heartPulse
     */
    constructor(
        dateTime: Date,
        upperBloodPressure?: number,
        lowerBloodPressure?: number,
        heartPulse?: number
    ) {
        super(dateTime);
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