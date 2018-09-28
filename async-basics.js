console.log('Starting app...');

setTimeout(() => {
    console.log('Inside of call back');
}, 2000);

setTimeout(() => {
    console.log('Second Time out');
}, 0000)

console.log('Finishing app...');