import {Person} from "./Person";
import {Doctor} from "./Doctor";
import {LaboratoryExamination} from "./Exam/LaboratoryExamination";
import {BloodPressureExam} from "./Exam/BloodPressureExam";
import {BloodPressureValue} from "../Values/BloodPressureValue";
import {StandardExamination} from "./Exam/StandardExamination";
import {StandardExamValue} from "../Values/StandardExamValue";

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

        console.log(new Date(), 'Created patient "' + firstName + '"');
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
    public setDoctor(doctor: Doctor): Patient {
        this.doctor = doctor;
        console.log(new Date(), 'Patient "' + this.firstName + '" choosed doctor "' + doctor.getFirstName() + '"');

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

    public completeBloodPressureExam(
        bloodPressureExam: BloodPressureExam,
        bloodPressureValue: BloodPressureValue
    ): boolean {
        let exam = this.laboratoryExams.filter(function (exam) {
            return exam.getId() === bloodPressureExam.getId()
        });

        // exit with false if exam is not found
        if (exam.length === 0) {
            return false;
        }

        let foundExam = exam[0];

        // exit with false if exam is not an instance of BloodPressureExam
        if (!(foundExam instanceof BloodPressureExam)) {
            return false;
        }

        foundExam.setUpperBloodPressure(bloodPressureValue.getUpperPressure());
        foundExam.setLowerBloodPressure(bloodPressureValue.getLowerPressure());
        foundExam.setHeartPulse(bloodPressureValue.getLowerPressure());
        foundExam.complete();

        console.log('Patient "' + this.firstName + '" completed blood pressure exam with values ' + bloodPressureValue.upperPressure, bloodPressureValue.lowerPressure, bloodPressureValue.heartPulse + '');

        return true;
    }

    /**
     *
     * @param standardExam
     * @param standardExamValue
     */
    public completeStandardExam(standardExam: StandardExamination, standardExamValue: StandardExamValue): boolean {
        let exam = this.laboratoryExams.filter(function (exam) {
            return exam.getId() === standardExam.getId()
        });

        // exit with false if exam is not found
        if (exam.length === 0) {
            return false;
        }

        let foundExam = exam[0];

        // exit with false if exam is not an instance of BloodPressureExam
        if (!(foundExam instanceof StandardExamination)) {
            return false;
        }

        foundExam.setValue(standardExamValue.getValue());
        foundExam.setLastMealTime(standardExamValue.getLastMealTime());
        foundExam.complete();

        console.log('Patient "' + this.firstName + '" completed standard exam with values ' + standardExamValue.getValue(), standardExamValue.getLastMealTime() + '');

        return true;
    }
}