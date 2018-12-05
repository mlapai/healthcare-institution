"use strict";
exports.__esModule = true;
var LaboratoryExamination = /** @class */ (function () {
    /**
     *
     * @param dateTime
     * @param doctor
     * @param patient
     * @param completed
     */
    function LaboratoryExamination(dateTime, doctor, patient, completed) {
        if (completed === void 0) { completed = false; }
        this.dateTime = dateTime;
        this.doctor = doctor;
        this.patient = patient;
        this.completed = completed;
    }
    LaboratoryExamination.prototype.getDateTime = function () {
        return this.dateTime;
    };
    /**
     *
     * @param dateTime
     */
    LaboratoryExamination.prototype.setDateTime = function (dateTime) {
        this.dateTime = dateTime;
        return this;
    };
    LaboratoryExamination.prototype.complete = function () {
        this.completed = true;
        return this;
    };
    return LaboratoryExamination;
}());
exports.LaboratoryExamination = LaboratoryExamination;
