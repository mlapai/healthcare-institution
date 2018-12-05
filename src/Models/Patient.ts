import {Person}                from "./Person";
import {Doctor}                from "./Doctor";
import {LaboratoryExamination} from "./Exam/LaboratoryExamination";

export class Patient extends Person {

    readonly jmbg: number;
    readonly medicalRecordNumber: number;
    private doctor: Doctor;
    private laboratoryExams: LaboratoryExamination[] = [];

    /**
     *
     * @param firstName
     * @param lastName
     * @param jmbg
     * @param medicalRecordNumber
     * @param doctor
     * @param laboratoryExams
     */
    constructor(
        firstName: string,
        lastName: string,
        jmbg: number,
        medicalRecordNumber: number,
        doctor?: Doctor,
        laboratoryExams: LaboratoryExamination[] = []
    ) {
        super(firstName, lastName);
        this.jmbg = jmbg;
        this.medicalRecordNumber = medicalRecordNumber;
        this.doctor = doctor;
        this.laboratoryExams = laboratoryExams;
    }

    public getJmbg(): number {
        return this.jmbg;
    }


    public getMedicalRecordNumber(): number {
        return this.medicalRecordNumber;
    }

    /**
     *
     * @param doctor
     */
    public changeDoctor(doctor: Doctor): Patient {
        this.doctor = doctor;
        return this;
    }

    public getLaboratoryExams(): LaboratoryExamination[] {
        return this.laboratoryExams
    }

    /**
     *
     * @param laboratoryExams
     */
    public setLaboratoryExams(laboratoryExams: LaboratoryExamination[]): this {
        this.laboratoryExams = laboratoryExams;
        return this;
    }

    /**
     *
     * @param laboratoryExam
     */
    public addLaboratoryExam(laboratoryExam: LaboratoryExamination) {
        this.laboratoryExams.push(laboratoryExam);
    }

    /**
     *
     * @param laboratoryExam
     */
    public removeLaboratoryExam(laboratoryExam: LaboratoryExamination): boolean {
        let key = this.laboratoryExams.indexOf(laboratoryExam);
        if (key === -1) {
            return false;
        }
        this.laboratoryExams.splice(key, 1);
        return true;
    }
}