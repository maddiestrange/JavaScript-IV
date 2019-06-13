// CODE here for your Lambda Classes

/* Class constuctors */
class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}


class Instructor extends Person{
    constructor(instructorOptions){
        super(instructorOptions)
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
    gradeChange(student){
        student.grade = student.grade + Math.random;
        console.log(`${student.name}'s new grade is ${student.grade}.`)
    }
}

class Student extends Person{
    constructor(studentOptions){
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
        this.grade = studentOptions.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
    graduate(instructor){
        if(this.grade < 70){
            var i;
            for (i = 0; this.grade< 70; i++){
            return instructor.gradeChange(this);
            }
        }
        else if (this.grade > 70){
            console.log(`${this.name} is ready to graduate!`)
        }
    }
}
  
class ProjectManager extends Instructor{
    constructor(PMoptions){
        super(PMoptions)
        this.gradClassName = PMoptions.gradClassName;
        this.favInstructor = PMoptions.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}


/* Objects */

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 50,
});

    const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

  const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

    const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

    const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

    const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

    const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});

    const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});

dan.speak();
console.log(dan.age)
console.log(dan.specialty);
console.log(dan.favLanguage);
console.log(dan.catchPhrase);
dan.demo('Javascript');
dan.grade(nisa, 'Javascript');

nisa.speak();
console.log(nisa.age);
console.log(nisa.previousBackground);
console.log(nisa.className);
nisa.listsSubjects();
nisa.PRAssignment('Javascript');
nisa.sprintChallenge('Javascript');
nisa.graduate(austin);

austin.speak();
console.log(austin.gradClassName);
console.log(austin.favInstructor);
console.log(austin.age);
console.log(austin.specialty);
console.log(austin.favLanguage);
console.log(austin.catchPhrase);
austin.demo('Javascript');
austin.grade(nisa, 'Javascript')
austin.standUp('Web21');
austin.debugsCode(nisa, 'Javascript');

