import {Doctor} from "../Doctor";

export abstract class LaboratoryExamination {
    protected id: string;
    protected dateTime: Date;
    protected doctor: Doctor;
    protected completed: boolean;

    /**
     *
     * @param dateTime
     * @param completed
     */
    protected constructor(dateTime: Date, completed = false) {
        this.id = this.guid();
        this.dateTime = dateTime;
        this.completed = completed;
    }

    public guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    public getId()
    {
        return this.id;
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

    /**
     *
     * @param doctor
     */
    public setDoctor(doctor: Doctor): this {
        this.doctor = doctor;
        return this;
    }

    public complete(): this {
        this.completed = true;
        return this;
    }
}