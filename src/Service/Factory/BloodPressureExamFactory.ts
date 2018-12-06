import {ExamFactory}           from "./ExamFactory";
import {BloodPressureExam}     from "../../Models/Exam/BloodPressureExam";

export class BloodPressureExamFactory implements ExamFactory{

    /**
     *
     * @param dateTime
     */
    public createExam(dateTime: Date): BloodPressureExam {
        return new BloodPressureExam(dateTime);
    }
}