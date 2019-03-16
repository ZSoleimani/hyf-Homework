const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length > 5 && studentName !=='Queen'){
        console.log('cannot add more students to class 07'); 
    } else if (class07Students.includes(studentName)){
        console.log('student' +' '+studentName+' '+ 'is already in the class') 
    } else if (studentName===''){
    console.log('You can not add an empty string to a class');
    } else {
        class07Students.push(studentName); 
    }

}


addStudentToClass('Hema')
addStudentToClass('Nayana')
addStudentToClass('Fowad')
addStudentToClass('Dennis')
addStudentToClass('Swapna')
addStudentToClass('Swapna')
addStudentToClass('Omid')
addStudentToClass('Queen')
addStudentToClass('Gholi')





function getNumberOfStudents() {
   return class07Students.length;
}

console.log(class07Students);
