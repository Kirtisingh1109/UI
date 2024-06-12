function sum(a, b) {

    console.log("Sum = " + (a + b));

}
var a = 5;
var b = 10;
sum(a, b);

function login(loginId, password) {

     if (loginId == null && password == null) {

         document.write('<h1 style=colour:red>loginId is required</h1>' + '<br>' + '<h1>Password is required</h1>')
     } else if (loginId == 'abc@gmail.com' && password == 'pass123') {
        document.write('<h1 style=color:green>login succesfully')
    } else if (loginId == 'abcAgmail.com' || password == null) {
        document.write('<h1 style=color:red>password is required')
    }
}

var loginId = "abc@gmail.com";
var password = null;

login(loginId, password)

