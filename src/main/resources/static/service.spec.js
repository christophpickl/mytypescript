import { greet } from "./service.js";
import { expect } from 'chai';
import 'mocha';
describe('greet function', () => {
    it('should return greeting', () => {
        let person = { firstName: "Christoph", lastName: "Doe" };
        const result = greet(person);
        expect(result).to.equal('Hello Christoph Doe!');
    });
});
//# sourceMappingURL=service.spec.js.map