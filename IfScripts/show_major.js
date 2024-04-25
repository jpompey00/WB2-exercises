"use strict";

let testInfo = new StudentInfo("Hello", "BIO");

console.log(testInfo.toString())

//console.log(`Student: ${currentStudentIndex.studentName}\n Major: ${majorInfo[currentStudentIndex.studentMajor]}\n Advising Location: ${majorInfo[currentStudentIndex.studentMajor]}`)



//constructor object that you create based on the student 
function StudentInfo(studentName, studentMajor) {
    this.studentName = studentName;
    this.studentMajorCode = studentMajor;
    
    this.toString = function() {
        return this.studentName;
      };
}

//An object structured like a map that holds the Major Info
const majorInfo = {
    "BIOL": "Biology",
    "CSCI": "Computer Science",
    "ENG": "English",
    "HIST": "History",
    "MKT": "Marketing"

}

//An object structured like a map that holds the Advising location
const majorLocation = {
    "BIOL": "Science Bldg, Room 310",
    "CSCI": "Sheppard Hall, Room 314",
    "ENG": "Kerr Hall, Room 201",
    "HIST": "Kerr Hall, Room 114",
    "MKT": "Westley Hall, Room 310"
}



//Everything past this point was solely for testing data--------------

function testingFunction() {
//A group of dummy names to test making multiple objects from a loop----------------
    let nameArr = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack"];
    let majorArr = ["BIOL", "CSCI", "ENG", "HIST", "MKT"];

//A group of variables used in this------------------------------------------------
    let someNameIndex;
    let someMajorIndex;
    let studentDict = {};

//This for loop gets a random index from the Arrays above and makes new StudentInfo objects from them
    for (let i = 0; i < 10; i++) {

        someNameIndex = Math.round(Math.random() * (nameArr.length - 1));
        someMajorIndex = Math.round(Math.random() * (majorArr.length - 1));



        studentDict[`student${i}`] = new StudentInfo(nameArr[someNameIndex], majorArr[someMajorIndex]);


    }

//Prints out the info from the student objects into something readable and formatted
    for (let i in studentDict) {
        let currentStudentIndex = studentDict[i]

        //console.log(`Student: ${currentStudentIndex.studentName}\n Major: ${majorInfo[currentStudentIndex.studentMajor]}\n Advising Location: ${majorInfo[currentStudentIndex.studentMajor]}`)
    }



}





