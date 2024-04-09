//asynchronous way of writing reading files

// modules
const fs = require('fs');
const path = require('path');
//filapaths using path module
const filepath1 = path.resolve(__dirname , 'content' ,'subfolder' ,'test2.txt');
const filepath2 = path.resolve(__dirname , 'content' ,'subfolder' ,'test.txt');

// first task

console.log("starting first task");

fs.readFile(filepath1 ,'utf8',(error , result)=>{
    if(error){
        console.log(error);
        return;
    }
    const one = result;

    fs.readFile(filepath2 , 'utf8' , (error , result)=>{
        if(error){
            console.log(error);
            return
        }
        const two = result;
        console.log("done with first task");
    })
});

// second task

console.log("starting with next task");

// writing files with async code

fs.writeFile(filepath1," you are in linux os " , (error , result)=>{
    if(error){
        console.log(result);
        return ;
    }
    // console.log(result);
})


// we can observe the difference between the sync and async approach all the lines get evaluated simultaneously


