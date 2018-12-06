import {Patient}                     from "./src/Models/Patient";
import {Doctor}                      from "./src/Models/Doctor";
import {BloodPressureExamFactory}    from "./src/Service/Factory/BloodPressureExamFactory";
import {CholesterolLevelExamFactory} from "./src/Service/Factory/CholesterolLevelExamFactory";
import {SugarLevelExamFactory}       from "./src/Service/Factory/SugarLevelExamFactory";

let doctor = new Doctor('Milan', 'Milanovic', 'someSpecialty');
let patient = new Patient('Dragan', 'Dragic', 2311987123321, 9172377);
patient.setDoctor(doctor);

let bloodPressureExamFactory = new BloodPressureExamFactory();
let cholesterolLevelExamFactory = new CholesterolLevelExamFactory();
let sugarLevelExamFactory = new SugarLevelExamFactory();

let bloodPressureExam = bloodPressureExamFactory.createExam(new Date());
let cholesterolLevelExam = cholesterolLevelExamFactory.createExam(new Date());
let sugarLevelExam = sugarLevelExamFactory.createExam(new Date());

doctor.scheduleExam(patient, bloodPressureExam);
doctor.scheduleExam(patient, cholesterolLevelExam);
doctor.scheduleExam(patient, sugarLevelExam);