"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_js_1 = require("./service.js");
const chai_1 = require("chai");
require("mocha");
describe('greet function', () => {
    it('should return greeting', () => {
        let person = { firstName: "Christoph", lastName: "Doe" };
        const result = service_js_1.greet(person);
        chai_1.expect(result).to.equal('Hello Christoph Doe!');
    });
});
//# sourceMappingURL=service.spec.js.map