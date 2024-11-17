class School
{
    constructor(name)
    {
        this.name = name;
        this.teachers = [];
        this.students = [];
        this.adress = "hisstornsgatan 10";
        this.zipcode = "21647";
        this.city = "Limhamn";
        
    }

    addTeacher(teacher)
    {
        this.teachers.push(teacher)
    }
};

class Subject
{
constructor(name)
{
    this.name = name;
    this.students =[];
    this.teachers = [];   
}

addStudent(student)
{
this.students.push(student);
student.subjects.push(this);
}

};



class Student 
{
    constructor(name)
    {
    this.namne = name;
    this.age;
    this.subjects =[];
    }
}

class Teacher {
    constructor(name)
    {
        this.name = name;
        this.subjects = [];
    }

    

 addSubject(subject) {
    this.subjects.push(subject);
    subject.teachers.push(this)
}
}

function addSubjectToTeacher(subject,teacher)
{
    subject.teachers.push(teacher);
    teacher.subjects.push(subject);
}




//Subjects

const Math = new Subject("Math");
const English = new Subject("English");
const Swedish = new Subject("Swedish");

//teachers

const Erik = new Teacher("Erik");
const Niklas = new Teacher("Niklas");
const Gordana = new Teacher("Gordana");

//Students
const Rahim = new Student("Rahim");
const Kory = new Student("Kory");
const Abdallah = new Student("Abdallah");
const Ahmed = new Student("Ahmed");





addSubjectToTeacher(Math,Erik)
Math.addStudent(Rahim);
Math.addStudent(Kory);
Math.addStudent(Abdallah);
Math.addStudent(Ahmed);


