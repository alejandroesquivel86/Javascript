//CALCULO DE CATEGORIA
let categoriaCliente

function calcularCategoria(){
    let ingresos= parseInt(prompt("Colocá los Ingresos Brutos de los últimos 12 meses. Ej: 900000"));    
        if(ingresos != 0){   
            switch (true) {
                case (ingresos < 466201):
                    alert("Categoría A");
                    categoriaCliente = "A";
                    console.log("Categoría "+ categoriaCliente+ ": "+ingresos);
                    break;
                case (466202 < ingresos)&&(ingresos < 693002):                
                        alert("Categoría B");
                        categoriaCliente = "B";
                        console.log("Categoría "+ categoriaCliente+ ": "+ingresos);
                        break;
                        case (693003 < ingresos)&&(ingresos < 970203): 
                        alert("Categoría C");
                        categoriaCliente = "C";
                        console.log("Categoría "+ categoriaCliente+ ": "+ingresos);
                        break;
                default:
                    alert("Otra Categoría");
                    categoriaCliente = "'Fuera Monotributo'";
                    console.log("Categoría "+ categoriaCliente+ ": "+ingresos);
                    break;
            }  
        } else {
            alert("Ingresar un valor");
            console.log("No ingreso valor");
        }
        return (ingresos)
        
}

//CARGA DE CLIENTES

class ClienteNuevo {
    constructor (razonSocial,direccion,cuit,ingresoAnual,categoriaClase){
        this.razonSocial=razonSocial.toUpperCase();
        this.direccion=direccion.toUpperCase();
        this.cuit=cuit;
        this.ingresoAnual=ingresoAnual;
        this.categoriaClase=categoriaClase;
    }
    mostrarCliente=()=>console.log("Razon Social: "+this.razonSocial+
                                    " direccion:"+this.direccion+
                                    " CUIT:"+this.cuit+
                                    " Ingreso Anual:"+this.ingresoAnual+
                                    " Categoria:"+this.categoriaClase);
}

//array
const clientes = [];

for (let i = 1; i < 2; i++){
    alert("podrá ingresar "+ (2-i) +" clientes");
    clientes.push(new ClienteNuevo(prompt("Razón Social"), prompt("Direccion"),prompt("CUIT"),calcularCategoria(),categoriaCliente));    
}

clientes.forEach((cliente)=>{alert("Se agregó " +cliente.razonSocial+" - CUIT: "+cliente.cuit+" que según ingresos anuales le corresponde la categoría de monotributo: '"+cliente.categoriaClase+"'")});


for (const cliente of clientes)
cliente.mostrarCliente();

//calcularCategoria();

//ETELEMENTSBYCLASSNAME
let grilla=document.getElementById("grillaMonotributo");
let titulo=document.getElementById("titulo");
let categorias = document.getElementsByClassName("categoria");
let ingresos = document.getElementsByClassName("ingresoCategoria");
let boton=document.getElementById("boton");

//para pintar la grilla
function pintarGrilla(){
    grilla.style.background="black";
    titulo.style.color="red";
    for(const categoria of categorias){
        categoria.style.color="white";    
    }
    for(const ingreso of ingresos){
        ingreso.style.color="white";    
    }
    boton.innerText="Despintar"
}

