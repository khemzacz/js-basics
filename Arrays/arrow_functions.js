
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// doesn't work for references
// console.log(courses.includes({ id: 1, name: 'a'})); 


const course = courses.find((course) => {
    return course.name === 'a'; 
})

console.log(course);

// single line syntax
const index = courses.findIndex((course) => course.name === 'a')

console.log(index);