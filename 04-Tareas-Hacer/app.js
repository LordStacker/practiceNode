require('colors');
const { showMenu, pause } = require('./helpers/messages');
console.clear();

const main = async() => {
    console.log("Hey world");

    let opt = '';
    do{
       opt = await showMenu();
       if( opt !== '0'){
        await pause();
       }
       
    }
    while(opt !== '0'){

    }

    //pause();

}

main();