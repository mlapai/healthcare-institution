import {ExamFactory}           from "./ExamFactory";
import {LaboratoryExamination} from "../../Models/Exam/LaboratoryExamination";
import {CholesterolLevelExam}  from "../../Models/Exam/CholesterolLevelExam";

export class CholesterolLevelExamFactory implements ExamFactory{

    /**
     *
     * @param dateTime
     */
    public createExam(dateTime: Date): CholesterolLevelExam {
        return new CholesterolLevelExam(dateTime);
    }
}