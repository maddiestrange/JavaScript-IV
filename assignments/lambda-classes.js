// CODE here for your Lambda Classes

class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


class Instructor extends Person{
    constructor(instructorOptions){
        super(instructoroptions)
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(studentOptions){
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listsSubjects(){
       /* * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one. */
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}
  
class ProjectManagers extends Instructor{
    constructor(PMoptions){
        super(PMoptions)
        this.gradClassName = PMoptions.gradClassName;
        this.favInstructor = PMoptions.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}
