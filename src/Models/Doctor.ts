import {Person} from "./Person";

export class Doctor extends Person {
    readonly specialty: string;

    /**
     *
     * @param firstName
     * @param lastName
     * @param specialty
     */
    constructor(firstName: string, lastName: string, specialty: string) {
        super(firstName, lastName);
        this.specialty = specialty;
    }

    public getSpecialty(): string {
        return this.specialty;
    }
}