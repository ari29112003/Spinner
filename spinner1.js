setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r💜  '); 
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r| '); 
}, 100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/ '); 
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r-  '); 
}, 2000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r❤️  '); 
}, 2500);


