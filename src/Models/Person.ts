export abstract class Person {
    protected firstName: string;
    protected lastName: string;

    /**
     *
     * @param firstName
     * @param lastName
     */
    protected constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName() {
        return this.firstName
    }

    public getLastName() {
        return this.lastName;
    }

    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}