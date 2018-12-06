import {ExamFactory}           from "./ExamFactory";
import {LaboratoryExamination} from "../../Models/Exam/LaboratoryExamination";
import {BloodPressureExam}     from "../../Models/Exam/BloodPressureExam";

export class BloodPressureExamFactory implements ExamFactory{

    /**
     *
     * @param dateTime
     */
    public createExam(dateTime: Date): LaboratoryExamination {
        return new BloodPressureExam(dateTime);
    }
}