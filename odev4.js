let a = "ali veli can yılmaz";
let result = (a.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));
console.log(result);
