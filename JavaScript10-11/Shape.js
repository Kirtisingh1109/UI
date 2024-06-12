// class Hello{

//     var= Hello;

//     constructor(Hello){
//         this.Hello=Hello;

//     }
//     printHello(){
//         console.log(Hello);
//     }

    
    
// }

// Define a class named 'HelloWorld'
class HelloWorld {
    // The constructor method is called when a new instance of the class is created
    constructor(message) {
        this.message = message;
    }

    // Method to display the message
    sayHello() {
        console.log(this.message);
    }
}

// Create an instance of the HelloWorld class
let hello = new HelloWorld('Hello, World!');

// Call the sayHello method to display the message
hello.sayHello(); // Output: Hello, World!
