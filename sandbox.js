
//alert('hello world');
console.log(1);
//this is a comment

/* this is also a comment*/
//strings:
console.log("Hi everyone");

let email = "darkshiira@hotmail.com";

let firstName = "Hanna";
let lastName = "Arefi";
let fullName = firstName + " " + lastName;

//Single characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

let index = email.indexOf('@');
console.log(index);

let results = email.lastIndexOf('m');
console.log(results);

//slice

let chopped = email.slice(0,10);
console.log(chopped);

let chop = email.substr(4,10);
console.log(chop);
//it adds the second numbers amount of spots

let change = email.replace('i', "w");
console.log(change);

// -------------------------------------------------------------------------------------------Numbers

let radius = 10;
const pi = 3.14;

console.log(radius, pi);
// ** betyder upphöjt let calc = pi * radius**2;
//console.log(calc);

//order of operations: B I D M A S (B - brackets, I - square, D-division,  M - multiplication, A - addition, S - subtraction)

/*let likes = 10
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
console.log(likes); */

//NaN = Not a number

let together = "the blog has " + radius + " likes!"
console.log(together);

// ---------------------------------- Template string-----------------------------------

const title = "Best reads of 2019"
const author = "Mario"
const likes = 30;

//Concatenation way 

let book = "The book called " + title + " by " + author + " has " + likes + " likes."
console.log(book);

//Template string way

let tempbook = `The log called ${title} by ${author} has ${likes} likes.`
 console.log(tempbook);

//Creating html templates

let html2 = `
<h2>${title}</h2>
<p>${author}</p>
<span>This blog has ${likes} likes. </span>
`;

console.log(html2);

// ------------------------------------- ARRAYS-----------------------

let ninjas = ["Hanna", "Mohammad", "Valle", "Loki"];

ninjas[3] = "LOKLOK";

console.log(ninjas[1]);

console.log(ninjas.length); 


//let ages [20, 25, 30, 35];



let togetherino = ninjas.join (",");
let position = ninjas.indexOf("Valle");
let jointhem = ninjas.concat(["mamma", "pappa"]);
let addin = ninjas.push( "mamma");
let popping = ninjas.pop();

// ---------------------- Null and undefined -----------------

let numb = null;

//Null = 0 in numbers, "null" in string

//-------------------Boolean and Comparisons-----------------------

console.log(true, false, "true", "false");

//methods can return booleans

let check = email.includes ("@");
console.log(check);

let preview = ninjas.includes("Loki");
console.log(preview);

//Comparison operators
let age = 30;
console.log(age == 25);
console.log(age != 30);
console.log(age > 24);
console.log(age < 25);
console.log(age <= 30);

console.log(firstName == "Hanna");
console.log(firstName > "Mohammad");

//---------------------------- Loose vs Strict ----------------

//Loose comparison
console.log(age == "30");
console.log(age != "30");

//strict comparison, different types cannot be equal

console.log(age === 25);
console.log(age!==25);
console.log(age === "30");

// ------------------- Type conversion ------------------------

let score = "100";
score = Number(score);
console.log(score + 1);
console.log(typeof score);

let makeastring = String(score);
console.log(typeof makeastring);

let blabla = Boolean(100);
console.log(blabla);

//Boolean, even numbers are true, odd numbers are false


// --------------------------------------------------------   CHAPTER 2 JAVASCRIPT BASIC --------------------------------------

//-------------------Controlflow basics ----------------------

// --------------- Loops----------------

//forloops

for(let i = 0; i < 5; i++){
console.log("in loop ", i)
}
console.log("loop finished");

const listing= ["shaun", "mario", "luigi"];

for (let i = 0; i < listing.length; i++){
    let htmlagain = `<div>${listing[i]}</div>`;
    console.log(htmlagain);
}

//Whileloop
let x = 0;
while(x < 5){
    console.log("in loop ", x);
    x++;
}

while(x < listing.length){
    console.log(listing[x]);
    x++;
}

//do while loop

do {
console.log("in loop ", x);
x++;}
while(x < 5);

//----------------conditional statements--------------

//if statement

const year = 2022;

if(year > 2022){
    console.log("you are in year 2022");
}

if(ninjas.length > 3)
{console.log("Thats alot of ninjas");
}

const password = "password";

if(password.length >= 12){
    console.log("That password is mighty strong");
}

else if(password.length >=8){
    console.log("That password is long enough");
}

else {
    console.log("Password is not long enough");
}

//logical operators or || and &&

if(password.length >= 12 || password.includes("@")){
    console.log("That password is mighty strong");
}

else if(password.length >=8){
    console.log("That password is long enough");
}

else {
    console.log("Password is not long enough");
}

// logical NOT (!)
let user = false;
//user not log in
if(!user){
console.log("You must be logged in to continue");
}

console.log(!true);
console.log(!false);

// break and continue

const scor = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scor.length; i++){
    
 if(scor[i] === 0)
{

 continue;}

 console.log("Your score ", scor[i]);

 if (scor[i] === 100){ 
        console.log("Congrats, you got max score")
        break;
    }
}

const grade = "P";

switch(grade){
    case "A":
        console.log("You got an A");
        break; 
    case "B":
        console.log("You got an B");
        break;

    case "C":
        console.log("You got an C");
        break;

    case "D":
        console.log("You got an D");
        break;

    case "E":
        console.log("You got an E");
         break;

    default:
        console.log("not a valid grade");

}
// Variables and block scopes
if(true){
    let year = 2023;
    console.log("it is now :", year);
if(true){
    let year = 2024;
 console.log(year);
}}
console.log(year);


// --------------------------------------------------------   CHAPTER 4 Functions and methods --------------------------------------
//function declaration - is hoisted = can be defined anywhere on the site.
function greet(){
console.log("hello there");
}

//function expression - with semicolons (a function stored inside a variable) - is not hoisted
// A better way to code?
const speak = function(name = "luigi", time = "night"){
console.log(`Good ${time} ${name}`);
};


greet();
speak("Hanna", "morning");

// ------ Returning a value

const calcArea = function(radius){
    return area = 3.14 * radius**2;
    
};

const a = calcArea(5);
console.log(a);

const calcVol = function(area){
    
};


// ----------------- Arrowfunction-------- with one peremiter doesnt need ()

const calAr = (radius) => 3.14 * radius**2;

calAr(5);
console.log(area);

const great = () => "Hello, world";

great();
console.log(great());

/*const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length, i++)(
        total += products[i] + products[i]*tax;)
        return total;
    )

}
*/
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i]*tax;
    }
return total;
}

    console.log(bill([10,15,30], 0.2));

// -------------- functions vs methods ------------ 

    // function

const hellow = () => "Hellow";

let resultOne = hellow();
console.log(resultOne);

    //methods - essentially functions that you call to do something

    let resultTwo = fullName.toUpperCase();

    console.log(resultTwo);

// --------------------------- CALLBACK FUNCTIONS ------------
// Passes in another function as an argument
    // -------------------------- Scrolls through each name --------------



const logPerson = (ninja, index) => 
{console.log(`${index} - hellow ${ninja} `)}

ninjas.forEach(logPerson);


const ul = document.querySelector(".people");

let html= ``;

ninjas.forEach((person) => {
    html += `<li style= "color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

//------------------------------------------------------CHAPTER 5 - OBJECT LITERALS------------------------------
//Objects have properties(email, username, gender) and things they can do(methods; ex login logout)
//or properties in blog: title, content, author, and things it can do: publish, unpublish, delete.

//Defining properties:
let useri = {
    name:"crystal",
    age: 30,
    email: "crystal@thenetninja.co.uk",
    location: "berlin",
    blogs: [
        {title: "Why mac & cheese rules", likes: 30},
    {title: "Ten things to make with marmite", likes: 25}
],
    login: function(){
        console.log("the user is logged in");
    },
    logout: function(){
        console.log("the user log out");
    },
    logBlogs: function(){
        console.log("This user has written: ");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);

        })
    }
};

console.log(useri.name);
//anotherway of doing it:
console.log(useri["name"]);

//changing the properties:
useri.age = 35;
useri["name"] = "Mario";
console.log(useri.age);
console.log(useri.name);

console.log(typeof useri);


//---------------- Adding Methods------

useri.login();
useri.logout();

//------------------------------This-------------------------

//it is a context object (Works within the block)
//This cannot be used with arrowfunctions

console.log(this);
useri.logBlogs();

//Storing objects inside an array:
const blogs = [
    {title: "Why mac & cheese rules", likes: 30},
    {title: "Ten things to make with marmite", likes: 25}
];

console.log(blogs);


// ------------------ Mathobject -----


console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const areal = 7.7;
console.log(Math.round(areal)); //Rounding
console.log(Math.floor(areal)); //down
console.log(Math.ceil(areal)); //up
console.log(Math.trunc(areal)); // takes away decimals

const random = Math.random();

console.log(random);
console.log(Math.round(random*100));

//Primitive and Reference types

//Primitive - stored on a stack - bit faster 
//Numbers, strings, Booleans, null, undefined, symbols

//Reference types  - stored in a heap - bit slower - only copies pointers
//Object literals, arrays, functions, dates, all other objects


// -------------------------- CHAPTER 6 - DOCUMENT OBJECT MODEL -------------------------------

// add content, popups, change css styles, react to clicking ex.

//DOM add, change and delete content.
//Make a cool pop-up effect in the webpage

// DOM - Created by the browser, a HTML is loaded inside it  - a"Document" object, that we want our Javascript to interact with

// you can write document. to find all different properties

// document.get ... 

// Inside the document is nodes which different hiarchies. Html is a root node. h1, p is text nodes.

// -------------------------------------  Selecting - Quering the DOM , preferable ------------------------

//const para = document.querySelector(`div.error`);
//const para = document.querySelector(`.error`);
//const para = document.querySelector(`p`);
//const para = document.querySelector(`body>h1`);

const paras = document.querySelectorAll(`p`);
//console.log(para);
console.log(paras);


console.log(paras[2]);

//Arrays
paras.forEach(para => {
    console.log(para);
});


const errors = document.querySelectorAll(`.error`);

console.log(errors);

// Selector = singular node
//SelectorAll = multiple nodes.


 // --------------------------------------Other ways to Query DOM-------------------

// get an element by ID(singular)

 const titly = document.getElementById(`page-title`);

 console.log(titly);
// get elements  by their classname(plural)

const errorss = document.getElementsByClassName(`error`);
console.log(errorss);
console.log(errors[1]);

//get elements by their tagname

const paragraph = document.getElementsByTagName(`p`);
console.log(paragraph);

// -------------------- Adding and changing page content ---------------------

const para = document.querySelector(`p`);

console.log(para.innerText);

para.innerText += "ninjas are awesome"; //just = to change it completly

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText = "I love theese people <3";
});

const content = document.querySelector(`.content`);
console.log(content.innerHTML);

content.innerHTML += "<h2>This is a new H2 </h2>";

ninjas.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// --------------------------- getting and setting attributes -------------------


const link = document.querySelector(`a`);

console.log(link.getAttribute(`href`));
link.setAttribute(`href`, `https://www.thenetninja.co.uk`);
link.innerText = "The netninjas Website";

const mssg = document.querySelector(`p`);

console.log(mssg.getAttribute(`class`));

mssg.setAttribute(`class`, `success`);

mssg.setAttribute(`style`,`color:red`);


// How to set attribute without completely overwriting it

console.log(titly.style);
console.log(titly.style.color);

titly.style.margin = "50px";
titly.style.color = "crimson";

titly.style.color = "";

//Adding and Remove classes from elements

//add a class :     nameOfShit.classList.add("name of new fucking class")
// remove a class:  nameOfShit.classList.remove("")

/* --------- Challenge -------------
const content = document.querySelectorAll("p");

// content[0].classList.add("error");
// content[4].classList.add("error");
// content[6].classList.add("error");
// content[1].classList.add("success");
// content[3].classList.add("success");
// content[7].classList.add("success");

content.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  } else if (p.textContent.includes("success")) {
    p.classList.add("success");
  }
});

console.log(content); */

// Toggle a class

titly.classList.toggle("test");
titly.classList.toggle("test");

// ------------------- Parents, children and siblings --------------

//              html (root node)
//              /           \
//          head            body
//          /           /   /   \
//      title       h1      div(parent)     div - sibling divs
//                           / \
//                          p   p(children)    p - siblings

const article = document.querySelector(`article`);

console.log(article.children);

//To be able to use for each
console.log(Array.from(article.children)); // Doesnt alter the original.

Array.from(article.children).forEach((child) => {
    child.classList.add(`article-element`);
});

const articleTitle = document.querySelector("h2");

console.log(articleTitle.parentElement); // To find the parent
console.log(articleTitle.parentElement.parentElement);

console.log(articleTitle.nextElementSibling);
console.log(articleTitle.previousElementSibling);

//You can even chain it:
console.log(articleTitle.nextElementSibling.parentElement.children);

// ------------- Event Basics --------

const button = document.querySelector(`button`);
button.addEventListener(`click`, () => {
   // ul.innerHTML += `<li>something new</li>`;
   const li = document.createElement("li");
   li.textContent = "Something new to do";
   ul.append(li);
   //prepend to put it on the top.
});

const items = document.querySelectorAll("li");

//items.forEach(item => {
 //   item.addEventListener(`click`, e => {
   // if (e.target.tagName === "LI"){
      //  e.target.remove();
 //   }
    //e.target.style.textDecoration = "line-through"
   //e.stopPropagation(); //Stops the event to fire up to the parents.
    

//});

// ------------- Creating and removing elements -----------

const uli = document.querySelector("ul");

// ul.remove(); To just remove it all

uli.addEventListener("click," e => {
    if( e.target.tagName === "LI"){
        e.target.remove();
    }
});