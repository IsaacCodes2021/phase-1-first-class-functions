function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}
  
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) { //callback function
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

//functions in JavaScript are firstclass objects 
//meaning they can be treated as any other object 
//they can be asssigned to variable,passed as values to other functions
//returned as a value from another function

//in-line functions 
exerciseRoutine(function () {
    console.log('stretch! Work that core!');
})
//in arrow notation
exerciseRoutine(() => console.log("Stretch! Work that core!"));

function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }

afterExercise();
// LOG: Nom nom nom, this protein bar is delicious!

//------LAB--------//

function receivesAFunction(funky1) {
    funky1();
}

function returnsANamedFunction() {
    const bog = function(){
    }
    return bog;
}

function returnsAnAnonymousFunction() {
    return () => console.log("anonymous funky")
}