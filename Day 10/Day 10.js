const body = document.body;
const br = document.createElement('br')


let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

document.write("So we have Array Of ['A', 'B', 'C', 'A', 'B'] and We have removed duplicate now we have result is ","[",uniqueChars,"]" );
body.append(br)


let chars1 = ['A', 'A', 'A', 'C', 'B'];

chars1.forEach((c, index) => {
    console.log(`${c} - ${index} - ${chars1.indexOf(c)}`);
});



let chars2 = ['A', 'C', 'A', 'C', 'B'];

let uniqueChars1 = chars.filter((c, index) => {
    return chars2.indexOf(c) === index;
});

document.write("So we have Array Of ['A', 'C', 'C', 'A', 'B'] and We have removed duplicate now we have result is ","[",uniqueChars1,"]");

