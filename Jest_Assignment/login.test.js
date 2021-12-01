var logins = require('./login');

test('InValid User', () => {
    var uid = "Jayesh";
    var pwd = "123";
    var res = "Invalid User"
    expect(logins.login(uid, pwd)).toEqual(res);
});

test('Valid User', () => {
    var uid = "Jayesh";
    var pwd = "1234";
    var res = "Valid User"
    expect(logins.login(uid, pwd)).toEqual(res);
});