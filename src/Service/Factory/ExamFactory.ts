import {LaboratoryExamination} from "../../Models/Exam/LaboratoryExamination";

export interface ExamFactory {
    createExam(dateTime: Date): LaboratoryExamination
}