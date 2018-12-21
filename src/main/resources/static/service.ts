console.log("hello from service.ts");

export interface Person {
    firstName: string;
    lastName: string;
}

export function greet(person: Person): string {
    return "Hi " + person.firstName + " " + person.lastName + "!";
}
