const { tsExternalModuleReference, exportAllDeclaration } = require("@babel/types");
const matchers = require("./matchers");

describe('Matchers suite', () => {
    test("Comparing objects with toBe() and toBeEqual()", () => {
        var emp = { "id": 1, "name": "Jayesh", "dept": "IT", "designation": "Developer" }

        expect(matchers.returnObject()).toEqual(emp);
    })

})