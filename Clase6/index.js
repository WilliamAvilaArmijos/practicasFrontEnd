const fs = require('fs');
const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
//const anio= ['2017','2018','2019','2020','2021','2022']
if(fs.existsSync("TAREA")){
    console.log("El directorio ya existe")
}else{
    fs.mkdir("TAREA",(err)=>{
        if (err){
            console.log(err.message);
        }
        console.log("Directorio creado");
    });
}

var date = new Date(0,0,0);
var anio = date.getFullYear();
for (let index = 2017; index <= anio; index++) {
        fs.mkdir("TAREA\\"+anio[index],(err)=>{

    })
    for (let index2 = 0; index2 < meses.length; index2++) {
        fs.mkdir("TAREA\\"+anio[index]+'\\'+meses[index2],(err)=>{
        
        var dia = new Date(index, index2+1,0);
        for (let index3 = 1; index3 <= dia.getDate(); index3++) {
            fs.appendFile("TAREA\\"+anio[index]+'\\'+meses[index2]+'\\'+index3+'.txt','' , (err)=> {
                if (err){
                    console.log(err.message);
                }else{
                    console.log('Archivo creado');
                }     
            })
            
        }
            
        })
        
    }
    
}

