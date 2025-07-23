//complete this code
class Person {
	private _name: string;
	private _age: number;

	constructor(name:string, age:number){
		this._name = name;
		this._age = age;
	}

	get name(): string {
    return this._name;
  }

	set age(): number {
		return this._age
	}

	
}

class Student extends Person {
	study(): void {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
	teach(): void {
    console.log(`${this.name} is teaching in javascript`);
  }
}
const student = new Student("Alice", 20);
student.study(); 

const teacher = new Teacher("Mr. John", 35);
teacher.teach(); 

teacher.age = 36; // Using the setter

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
