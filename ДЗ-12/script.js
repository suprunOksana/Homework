

function getAvgMark() {
    return this.getTotal() / this.marks.length;
}

function getMaxMark() {
    return Math.max.apply(null, this.marks);
}

function getMinMark() {
    return Math.min.apply(null, this.marks);
}

function getTotal() {
    return this.marks.reduce((total, amount) => total + amount);
}

function getInfo() {
    return `name : ${this.name}, faculty : ${this.faculty}, total : ${this.getTotal()}`;
}

function Student(name, faculty, marks) {

    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
    this.getAvgMark = getAvgMark;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
}


const student = new Student('Ivan', 'psychology', [25, 50, 40, 80, 100]);

console.log(student.getAvgMark());
console.log(student.getMaxMark());
console.log(student.getMinMark());
console.log(student.getTotal());
console.log(student.getInfo());
