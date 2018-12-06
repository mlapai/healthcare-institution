import {ExamFactory}           from "./ExamFactory";
import {LaboratoryExamination} from "../../Models/Exam/LaboratoryExamination";
import {SugarLevelExam}        from "../../Models/Exam/SugarLevelExam";

export class SugarLevelExamFactory implements ExamFactory{

    /**
     *
     * @param dateTime
     */
    createExam(dateTime: Date): LaboratoryExamination {
        return new SugarLevelExam(dateTime);
    }

}