
// changeTitle()
// class Person {
// 	constructor(firstName, lastName, age){
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// 	}
// }

// const Rita = new Person ("Rita","Jensen",25);
// const Jensen = new Person ("Jens","Peterson",30); 

// console.log(Jens.isOlderThan`Rita`);
// console.log(Rita);
// console.log(Rita instanceof Person);
// console.log(Rita instanceof Object)



//what we learned at class

class Person {
    constructor(firstName, lastName, age, title) {
      // fix name so display() can work
      this.name = firstName + lastName;
      this.title = title;
      this.age = age;
    }
  
    changeTitle(newTitle) {
      // change title to newTitle
      this.title = newTitle;
    }
  
    static isOlderThan(first, second) {
      // compare with another person
      // return bool
      const older = first.age > second.age ? first : second;
      return `${older.name} is older`;
    }
  
    display() {
      return `${this.name} is a ${this.title}.`;
    }
  }
  
  const rohit = new Person("rohit", "sharma", 29, "programmer");
  rohit.changeTitle("chef");
  console.log(rohit.display());
  
  const rohan = new Person("rohan", "", 25);
  console.log(Person.isOlderThan(rohit, rohan));
  
  // rohit.display = function(){};
  // console.log(rohit);
  // console.log(rohit instanceof Person);
  // console.log(rohit instanceof Object);
  
  // Person.prototype.display = function() {
  //   return `${this.name} is a ${this.title}.`;
  // }


//Rohit´s code:
  class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
  }
}

class CV {
  constructor(jobs, educations, email) {
    // write code here
    this.jobs = jobs;
    this.educations = educations;
    this.email = email;
  }

  addJob(job) {
    // add functionality here
    // if(typeof job !== 'object')
    //   throw 'Job is not an object';

    if (!(job instanceof Job)) throw "addJob only accepts Job(s)";

    this.jobs.push(job);
  }

  removeJob(job) {
    // add functionality here
    const index = this.jobs.indexOf(job);
    this.jobs.splice(index, 1);
  }

  addEducation(education) {
    // add functionality here
  }

  removeEducation(education) {
    // add functionality here
  }
}

const rohitCV = new CV([], [], "rs@rohit.sh");
const job1 = new Job(1, "Datarobot");
rohitCV.addJob(job1);
// rohitCV.removeJob(job1);
try {
  // rohitCV.addJob("some job");

  rohitCV.addJob({
    id: 3
  });
} catch (e) {
  console.error(e);
}

console.log(rohitCV);
