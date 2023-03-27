filterObjects("all")
function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("each-project");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1){
            addClass(x[i], "show");
        }
            
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    console.log(arr1);
    arr2 = name.split(" ");
    console.log(arr2);
    for (i=0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i])== -1){
            element.className += " " + arr2[i];
            console.log(element.className);
        }
            
    }
}

function removeClass(element,name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ")
}

var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("each-project");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



var app = document.getElementById('autoType');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter
    .typeString('hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm first year computer science student at georgia tech!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("here's a little bit about me:")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I love to run!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString( "I love learning about self-development!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I love to design!")
    .pauseFor(1000)
    .deleteAll()
    .start();






    var car = {
    make: "volvo", //key value pair is called property
    speed: 160,
    engine: { 
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [{make:"BMW"}, {maker:"BMW"}] //arrays can also contain objects
    }, //still called property even though it's project
    drive: function(){ return "drive";}

};

var shoppinglist = [
    "apple",
    "orange",
    "pear"
];





















var array = [
    "string",
    100,
    ["embed", 200],
    {car: "ford"},
    function(){return "dive";}
];

//member
car.engine.pistons[0].make
//how to target function
array[4]
//ƒ (){return "dive";}
array[4]() //actually return function when parenthesis is included
//'dive'

array[1+1-2] //can identify member using math equations + variables!
//'string'