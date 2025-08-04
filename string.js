let Name = "Imran Mohammed";
console.log(Name);

// string print by character
for(let i=0; i<Name.length; i++){
    console.log(Name[i])
}

// character at specific position
console.log(Name.charAt(1));
console.log(Name[1]);

// // covert Upppercase and lowercase case whole
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

// // Find substribg
console.log(Name.includes("oha"));
console.log(Name.indexOf("ran"));
console.log(Name.startsWith("I"));
console.log(Name.endsWith("D"));

// // substring or slicing
console.log(Name.slice(2, 7));
console.log(Name.substring(2, 7));

// string replace
let newString = Name.replace("Mohammed" , "sanvi");
console.log(newString);

let sentence = "I am a competitive programmer"
let word = sentence.split(" ");
console.log(word);
let updatedSentence = word.join("-");
console.log(updatedSentence);

// string concatenation
console.log("This is " + Name + " " + sentence);

// repeat
console.log(Name.repeat(5));