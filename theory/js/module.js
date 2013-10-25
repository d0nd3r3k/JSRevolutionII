
/*
 * IIFE: Imidiatly Invoke Fuction Expression.
 * This will prevent polluting the Gloabl Namespace
 */

(function () {

    //Private Variables
    var versionRoman = 'II';
    console.log("Welcome to The JavaScript Revolution " + versionRoman);

    // Return this when animation is done
    var callback = function(){
        $('.source').fadeIn()
    }

    // You still have access to any global variable
    $('h1').animate({
    fontSize: "3em",
    marginTop: '0.9in'
  }, 300, "linear", callback)

})()

/*
 * Module Pattern using the IIFE. 
 */
var moduleName = (function () {
    var privateVariable = 'Private Variable';

    var privateMethod = function () {
        console.log('This is private function');
    };

    // this is the "revealed" part of the module
    return { 
        publicVariable: 'Public Variable',
        publicMethod: function () {
            console.log('This is a public function.');
        }
    };
}());

// Usage
moduleName.publicMethod()
console.log(moduleName.publicVariable)

// Will print undefined
console.log(moduleName.privateVariable)