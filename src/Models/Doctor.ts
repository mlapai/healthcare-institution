import {Person}                from "./Person";
import {Patient}               from "./Patient";
import {LaboratoryExamination} from "./Exam/LaboratoryExamination";

export class Doctor extends Person {
    readonly specialty: string;

    /**
     *
     * @param firstName
     * @param lastName
     * @param specialty
     */
    constructor(firstName: string, lastName: string, specialty: string) {
        super(firstName, lastName);
        this.specialty = specialty;

        console.log(new Date(), 'Created doctor "' + firstName + '"');
    }

    public getSpecialty(): string {
        return this.specialty;
    }

    /**
     *
     * @param patient
     * @param exam
     */
    public scheduleExam(patient: Patient, exam: LaboratoryExamination): void
    {
        exam.setDoctor(this);
        patient.addLaboratoryExam(exam);
    }
}