var registered = [];

function login(uid, pwd) {
    let user = registered.find(user => user.userid === uid && user.password === pwd);
    if (user != undefined) {
        return "Valid User";
    } else {
        return "Invalid User";
    }
}

function registration(uid, pwd, role) {
    if (uid != "" && pwd != "") {
        if (role != admin && role != user) {
            let user = {
                "userid": uid,
                "password": pwd,
                "roleoftheuser": role
            }
            registered.push(user);
            console.log("Registration successful");
            console.log(registered);
            return "Registration successful";
        }
    } else {
        console.log("Failed to register")
        return "Failed to register";

    }
}



module.exports = {
    registration,
    login
}