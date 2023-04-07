const { resolve } = require('path');

require('colors');


const showMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log("=================".green);
        console.log("      Menu       ".green);
        console.log("=================\n".green);
        
        console.log(`${'1.'.green } Make Task`);
        console.log(`${'2.'.green } List Task`);
        console.log(`${'3.'.green } List Task Completed`);
        console.log(`${'4.'.green } List Task pending`);
        console.log(`${'5.'.green } Complete Task's`);
        console.log(`${'6.'.green } Delete Task`);
        
        console.log(`0. Exit \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Choose an option: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    }); 
}
const pause = () => {
    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\n Press ${ 'ENTER'.green } to continue: \n`, (opt) => {
            readLine.close();
            resolve();
        });
    })
    

}


module.exports ={
    showMenu,
    pause,
}