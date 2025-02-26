// Problem 1: Student Management System
const student = {
    name: "Aryan Khan",
    rollNumber: 101,
    marks: {
        Math: 99,
        Science: 95,
        English: 80,
        History: 70
    },
    getAverageMarks: function() {
        let total = Object.values(this.marks).reduce((sum, mark) => sum + mark, 0);
        return total / Object.keys(this.marks).length;
    },
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Passed" : "Failed";
    }
};

console.log(student.getAverageMarks());
console.log(student.checkPassOrFail());