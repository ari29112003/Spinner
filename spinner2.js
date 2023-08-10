const symbols= "|/-❤️|-/❤️"
var i= 0

const spinner= ()=>{
  process.stdout.write(symbols[i]);
  i++;

  if(i < symbols.length){
    setTimeout(() => {
      process.stdout.write('\r '),
    spinner()
    }, 500);
};
}

spinner();