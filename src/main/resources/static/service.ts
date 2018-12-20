interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person): string {
    return "Hi ho " + person.firstName + " " + person.lastName + "!";
}
