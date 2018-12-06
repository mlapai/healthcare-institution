import {ExamFactory}           from "./ExamFactory";
import {SugarLevelExam}        from "../../Models/Exam/SugarLevelExam";

export class SugarLevelExamFactory implements ExamFactory{

    /**
     *
     * @param dateTime
     */
    createExam(dateTime: Date): SugarLevelExam {
        return new SugarLevelExam(dateTime);
    }

}