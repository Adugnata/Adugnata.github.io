// Exercise 1
String.prototype.filter = function(bannedWords) {
    let words = this.split(' ');
    return words.filter(word => !bannedWords.includes(word)).join(' ');
};

// Exercise 2
Array.prototype.bubbleSort = function() {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                isSorted = false;
            }
        }
    }
    return this;
};

// Exercise 3
// Create a Person function constructor.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greeting and salute methods to the prototype.
Person.prototype.greeting = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log("Good morning! In case I don't see you, good afternoon, good evening, and good night!");
};

// Create Teacher constructor derived from Person.
function Teacher(name, age) {
    Person.call(this, name, age);
}

// Inherit methods from Person.
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Implement the teach method.
Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
};

// Using Object.create with a factory function.
const personFactory = (name, age) => {
    const person = Object.create(personPrototype);
    person.name = name;
    person.age = age;
    return person;
};

const personPrototype = {
    greeting: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log("Good morning! In case I don't see you, good afternoon, good evening, and good night!");
    }
};

// Exercise 4
// Create Student constructor and Professor constructor using the object prototype approach.
function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

// Inherit methods from Person.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

// Override the greeting method for Student and Professor.
Student.prototype.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

Professor.prototype.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};
