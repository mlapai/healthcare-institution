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
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    /**
     *
     * @param firstName
     * @param lastName
     * @param specialty
     */
    function Doctor(firstName, lastName, specialty) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.specialty = specialty;
        return _this;
    }
    Doctor.prototype.getSpecialty = function () {
        return this.specialty;
    };
    return Doctor;
}(Person_1.Person));
exports.Doctor = Doctor;
