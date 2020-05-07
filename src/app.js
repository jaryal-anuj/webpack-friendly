
var register=(email,username, password )=>{
    console.log("Registered",email,username,password);
}

var payload = ['alex@codecourse.com','alex','cats'];

register.apply(null,payload)
register(...payload)