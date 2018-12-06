import {Patient}                     from "./src/Models/Patient";
import {Doctor}                      from "./src/Models/Doctor";
import {BloodPressureExamFactory}    from "./src/Service/Factory/BloodPressureExamFactory";
import {CholesterolLevelExamFactory} from "./src/Service/Factory/CholesterolLevelExamFactory";
import {SugarLevelExamFactory}       from "./src/Service/Factory/SugarLevelExamFactory";
import {BloodPressureValue}          from "./src/Values/BloodPressureValue";
import {StandardExamValue}           from "./src/Values/StandardExamValue";

let doctor = new Doctor('Milan', 'Milanovic', 'someSpecialty');
let patient = new Patient('Dragan', 'Dragic', 2311987123321, 9172377);
patient.setDoctor(doctor);

let bloodPressureExamFactory = new BloodPressureExamFactory();
let cholesterolLevelExamFactory = new CholesterolLevelExamFactory();
let sugarLevelExamFactory = new SugarLevelExamFactory();

// creating exams
let bloodPressureExam = bloodPressureExamFactory.createExam(new Date());
let cholesterolLevelExam = cholesterolLevelExamFactory.createExam(new Date());
let sugarLevelExam = sugarLevelExamFactory.createExam(new Date());

// scheduling exams for patient
doctor.scheduleExam(patient, bloodPressureExam);
doctor.scheduleExam(patient, cholesterolLevelExam);
doctor.scheduleExam(patient, sugarLevelExam);

let bloodPressureValue = new BloodPressureValue(120, 80, 75);
let cholesterolLevelValue = new StandardExamValue(120, new Date());
let sugarLevelValue = new StandardExamValue(12332, new Date());

// patient completing exams
patient.completeBloodPressureExam(bloodPressureExam, bloodPressureValue);
patient.completeStandardExam(cholesterolLevelExam, cholesterolLevelValue);
patient.completeStandardExam(sugarLevelExam, sugarLevelValue);