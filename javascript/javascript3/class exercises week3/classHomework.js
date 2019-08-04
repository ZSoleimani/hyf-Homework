// Exercise 1:
class User {
	constructor(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
	}
}

// Exercise 2:
let User1 = new User('Zahra', 'Soleimani');
console.log(User1);
//part 2) how to log out just one of the properties?
console.log(User1.firstName);


class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
// 	getName(){
// 		return this.name;
// 	}
// 	setName(newName){
// this.name = name;
// 	}
// }
// let Person = new Person = new Person ('Anders', 28);
// console.log(person1.getName());
// person1.setName('Niels');
// console.log(person1.getName());

   getPerson(){
	   return `this person is ${this.name}, and is ${this.age} years old`;
   }
   wasBorn(){
	   let currentYear = new Date().getFullYear();
	   return current - this.age;
   }
}

// Exercise 3:
class fullName {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	
	}
	getFullName(){
		 return this.firstName + " " + this.lastName;
		}
}
let fullName1 = new fullName('Henrik','Østergard');
console.log(fullName1.getFullName());

//befor part 4:
// class post {
// 	constructor(username, text, time) {
// 		this.username = username;
// 		this.text = text;
// 		this.time = time;
// 	}
 
// }
// class Feed {
// 	constructor(posts) {
// 		this.posts = posts;
// 	}
// 	addPost(post) {
//     this.post.push(post);
// 	}
// 	removePost(postId) {
// 		this.postd = this.posts.filter(post => post.id !== postId)
// 	}
	
// 	render(){
// 		let app = document.getElementById("app");
// 		let heading = document.captureEvents("h1");
// 		heading.innerHTML= "Feed";
// 		app.appendChild(heading);

// 	}
// }
// let post1 = new Post("Andersravn", "This is my post about something". new Date());
// let post2 = new Post("Niels", "This is my post about something")



// Exercise 4:

class CV {
	constructor (jobs, educations, email){
		this.jobs= jobs;
		this.educations = educations;
		this.email = email;

	}
	addJob(job) {
		this.jobs.push(job);  }
	
	removeJob(jobId) {
		this.jobs = this.jobs.filter(job => job.id !== jobtId)
	  }
	  
	addEducation(education) {
		this.educations.push(education);
	  }
	
	removeEducation(educationId) {
		  this.educations = this.educations.filter(education => education.id !== educationId)
		
	  }
}

class Job {
   constructor (id, title, description, startDate, endDate){
   this.id = id;
   this.title = title;
   this.description = description;
   this.startDate = startDate;
   this.education = endDate;
   }
   

}

class Education {
	constructor(id, title,school,address, startDate, endDate){
	this.id= id;
	this.title= title;
	this.school= school;
	this.address= address;
	this.startDate = startDate;
	this.endDate = endDate;
	}

}
var job = new Job(0,"teacher","amazing teacher",2010, 2019);
let cv = new CV([], [], "myemail");
cv.addJob(job);
console.log(cv);