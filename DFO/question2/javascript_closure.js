function closure() {
    var num_a = 5; // num_a is a local variable created by closure
    function inner() { // inner() is the inner function, a closure
        alert (num_a); // inner() uses variable declared in the parent function    
    }
    displayName();    
}
closure();

// So closure is the combination of fuctions that bundle together, which allows the inner fuction can have access to it's parent function.