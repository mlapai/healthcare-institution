import {Doctor}  from "../Doctor";
import {Patient} from "../Patient";


export abstract class LaboratoryExamination {
    protected dateTime: Date;
    readonly doctor: Doctor;
    readonly patient: Patient;
    protected completed: boolean;

    /**
     *
     * @param dateTime
     * @param doctor
     * @param patient
     * @param completed
     */
    protected constructor(dateTime: Date, doctor: Doctor, patient: Patient, completed = false) {
        this.dateTime = dateTime;
        this.doctor = doctor;
        this.patient = patient;
        this.completed = completed;
    }

    public getDateTime(): Date {
        return this.dateTime;
    }

    /**
     *
     * @param dateTime
     */
    public setDateTime(dateTime: Date): this {
        this.dateTime = dateTime;
        return this;
    }

    public complete(): this
    {
        this.completed = true;
        return this;
    }
}