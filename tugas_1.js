const userDB ={
    username: "joko",
    password: "rahasia",
    role: "admin"
}

function loginUser (inputUsername, inputPassword, cb) {
    if (inputUsername === userDB.username && inputPassword === userDB.password){
        cb(userDB)
    } else
    {
        console.log("Username atau password salah");
    }
}

function getRole (user, cb)  {
    cb(user.role);
}

function getMenu (role, cb)  {
    if (role === "admin"){
        cb("dashboard admin");
    } else
    {
        cb("dashboard");
    }
}

loginUser("joko", "rahasia", function(userDB) {
    getRole(userDB,(role) => {
        getMenu(role, (menu) => {
            console.log ("Menu yang ditampilkan:", menu)
        });
    });
});