import fs from 'fs'

export const dataBLog = fs.readFile('../pages/blog/test.md', 'utf-8', (err, contenido)=>{
  if(err){
      throw err; //Detiene la ejecucion del programa si hay algun error
      console.log(err);
  }
  else{
      console.log(contenido);
  }
});

