"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    /**
     *
     * @param firstName
     * @param lastName
     * @param jmbg
     * @param medicalRecordNumber
     * @param doctor
     * @param laboratoryExams
     */
    function Patient(firstName, lastName, jmbg, medicalRecordNumber, doctor, laboratoryExams) {
        if (laboratoryExams === void 0) { laboratoryExams = []; }
        var _this = _super.call(this, firstName, lastName) || this;
        _this.laboratoryExams = [];
        _this.jmbg = jmbg;
        _this.medicalRecordNumber = medicalRecordNumber;
        _this.doctor = doctor;
        _this.laboratoryExams = laboratoryExams;
        return _this;
    }
    Patient.prototype.getJmbg = function () {
        return this.jmbg;
    };
    Patient.prototype.getMedicalRecordNumber = function () {
        return this.medicalRecordNumber;
    };
    /**
     *
     * @param doctor
     */
    Patient.prototype.changeDoctor = function (doctor) {
        this.doctor = doctor;
        return this;
    };
    Patient.prototype.getLaboratoryExams = function () {
        return this.laboratoryExams;
    };
    /**
     *
     * @param laboratoryExams
     */
    Patient.prototype.setLaboratoryExams = function (laboratoryExams) {
        this.laboratoryExams = laboratoryExams;
        return this;
    };
    /**
     *
     * @param laboratoryExam
     */
    Patient.prototype.addLaboratoryExam = function (laboratoryExam) {
        this.laboratoryExams.push(laboratoryExam);
    };
    Patient.prototype.removeLaboratoryExam = function (laboratoryExam) {
    };
    return Patient;
}(Person_1.Person));
exports.Patient = Patient;
