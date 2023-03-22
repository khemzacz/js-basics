
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
];

// doesn't work for references
// console.log(courses.includes({ id: 1, name: 'a'})); 


const course = courses.find(function(course) {
    return course.name === 'a'; 
})

console.log(course);

const index = courses.findIndex(function(course) {
    return course.name === 'a'; 
})

console.log(index);