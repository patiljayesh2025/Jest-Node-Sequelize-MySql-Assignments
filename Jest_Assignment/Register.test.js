var registers = require('./register');

test('Valid Log in', () => {
    uid = "Jayesh";
    pwd = "123";
    role = "admin";
    var valid = "Valid User";

    expect(registers.login(uid, pwd)).toEqual(valid);
});

test('Valid Registration', () => {
    uid = "Jayesh";
    pwd = "123";
    role = "admin";
    var valid = "Registration successful";

    expect(registers.registration(uid, pwd, role)).toEqual(valid)
});