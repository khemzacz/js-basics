
// 00000001
// 00000010

// Bitwise OR
console.log(1 | 2);
console.log(1 & 2);

// Read, Write, Execute
// 00000100 Read
// 00000110 Read + Write
// 00000111 Read + Write + Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission =
 myPermission | readPermission | writePermission;
console.log(myPermission);

let message = 
 (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);