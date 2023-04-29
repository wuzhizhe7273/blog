import {v4 as uuidv4} from 'uuid';

if(process.argv && process.argv.length > 0){
    const workspaceArg=process.argv[2]; //The workspacepace
    const filePath = process.argv[3]; //The path of the file
    const title = process.argv[4]; //Title of the page
    console.log(uuidv4());

}