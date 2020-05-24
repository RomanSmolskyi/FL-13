function Student(name, email) {
  this.studentName = name;
  this.studentEmail = email;
  this.homeworkResults = [];

  this.getName = function () {
    return this.studentName;
  };
}
