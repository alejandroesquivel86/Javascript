//Agente de Ayuda
//Paso 1
//Datos Razon Social
let clienteSeteado = localStorage.getItem("cliente");

if ((clienteSeteado == null)||(clienteSeteado == "")){
    clienteSeteado = "BEJERMAN"
}
document.getElementById("razonsocial").value = clienteSeteado;
console.log(clienteSeteado);

//Datos CUIT
let cuitSeteado = localStorage.getItem("cuit");

if ((cuitSeteado == null)||(cuitSeteado == "")){
    cuitSeteado = "30512823099"
}

document.getElementById("cuit").value = cuitSeteado;
console.log(cuitSeteado);

//Guardar Cliente y Validar CUIT
const inputRazonSocial = document.getElementById("razonsocial");
const inputCuit = document.getElementById("cuit");
const botonRecordar = document.getElementById("btnRecordarCliente");


localStorage.setItem("cliente",clienteSeteado);  
localStorage.setItem("cuit",cuitSeteado);  

let cuitvalidado = validarCuit (inputCuit.value);

botonRecordar.onclick=()=>{
    if((inputRazonSocial.value !== "")&&(inputCuit.value !== "")){
        if(cuitvalidado == true){
            console.log('valido');
            cuitSeteado = inputCuit.value;  
            clienteSeteado = inputRazonSocial.value;                
            Swal.fire('Cliente Guardado');

            
        }else{
            console.log('invalido');
            Swal.fire('No se puede guardar CUIT invalido');
        }

        
    }else{
        Swal.fire('Completar todos los datos por favor');
        }    
        document.getElementById("formCliente").addEventListener("submit", function(event){
                event.preventDefault()
                });
    localStorage.setItem("cliente",clienteSeteado);  
    localStorage.setItem("cuit",cuitSeteado);  
}       

function validarCuit(cuit) {
 
    if(cuit.length != 11) {
        return false;        
    }

    var acumulado= 0;
    var digitos= cuit.split("");
    var digito= digitos.pop();

    for(var i = 0; i < digitos.length; i++) {
        acumulado += digitos[9 - i] * (2 + (i % 6));
    }

    var verif = 11 - (acumulado % 11);
    if(verif == 11) {
        verif = 0;
    } else if(verif == 10) {
        verif = 9;
    }

    return digito == verif;
}

//Paso 2
//CALCULO DE CATEGORIA
const comboActividad = document.getElementById("comboActividad");
const categoriamostrada = document.getElementById("categoria");
const cuotamostrada = document.getElementById("cuota");
const sipamostrada = document.getElementById("sipa");
const aportemostrada = document.getElementById("aporte");
const totalmostrada = document.getElementById("total");
const preciomaxmostrada = document.getElementById("precioMaximo");

class Categoria{
    constructor(objLit){        
        this.categ=objLit.categ;
        this.ingresos=objLit.ingresos;
        this.superficie=objLit.superficie;
        this.energia=objLit.energia;
        this.alquiler=objLit.alquiler;
        this.impuesto=objLit.impuesto;
        this.sipa=objLit.sipa;
        this.obrasocial=objLit.obrasocial;
        this.total=objLit.total;
    }
    //Metodo deberia completar el HTML
    mostrarInfo(){
        categoriamostrada.innerText= this.categ;
        cuotamostrada.innerText="$ " +this.impuesto;
        sipamostrada.innerText="$ " +this.sipa;
        aportemostrada.innerText="$ "+this.obrasocial;
        totalmostrada.innerText="$ "+this.total;
    }
}

const objbienes=[];
const objservicios=[];

for(const categoria of categoriasbienes){
    objbienes.push(new Categoria(categoria));
};

for(const categoria of categoriasservicio){
    objservicios.push(new Categoria(categoria));
};


//Funcion para Buscar la Categoría según Ingresos
function buscarCategorias(actividad,parametro){
    let encontrado=actividad.find((param)=>param.ingresos>=parametro);    
    return encontrado;
}

function buscarCategoriasxIng(actividad,parametro){
    let encontrado=actividad.find((param)=>param.ingresos>=parametro);    
    return encontrado;
}

function buscarCategoriasxSup(actividad,parametro){
    let encontrado=actividad.find((param)=>param.superficie>=parametro);    
    return encontrado;
}

function buscarCategoriasxEnergia(actividad,parametro){
    let encontrado=actividad.find((param)=>param.energia>=parametro);    
    return encontrado;
}

function buscarCategoriasxAlquiler(actividad,parametro){
    let encontrado=actividad.find((param)=>param.alquiler>=parametro);    
    return encontrado;
}
const ingresosContribuyente= document.getElementById("ingresoAnualCliente");
const superficieContribuyente= document.getElementById("supAfectada");
const energiaContribuyente= document.getElementById("energia");
const alquileresContribuyente= document.getElementById("alquileres");
const botoncalcular = document.getElementById("btnCalcular");
const botonlimpiar = document.getElementById("btnLimpiar");
const selectElement = document.querySelector('#comboActividad');
var seleccionado;

selectElement.addEventListener('change', (event) => {
    seleccionado = event.target.value;    
    
    if(seleccionado==1){
        preciomaxmostrada.value= 49646.21;
        console.log("49646.21");
    }
    else {
        preciomaxmostrada.value= "";
        console.log("0.00");
    };   

    return seleccionado;
});

const array1 = [];

botoncalcular.onclick=()=>{   
    //Bienes
    if ((seleccionado==1)&&(ingresosContribuyente.value>0)){  

        if((ingresosContribuyente.value>6019594.89)||(superficieContribuyente.value>200)||(superficieContribuyente.value>200)||(energiaContribuyente.value>20000)||(alquileresContribuyente.value>533822.27)){
            Swal.fire("Fuera del Monotributo excede los parametros del regimen");
            categoriamostrada.innerText= "";
            cuotamostrada.innerText="$ 0.00";
            sipamostrada.innerText="$ 0.00";
            aportemostrada.innerText="$ 0.00";
            totalmostrada.innerText="$ 0.00";
            array1.pop();
            document.getElementById("formCalculo").addEventListener("submit", function(event){
                event.preventDefault()});   
        }else{

        let resultado1=buscarCategoriasxIng(objbienes,ingresosContribuyente.value);
        array1.push(resultado1.ingresos);
        if(superficieContribuyente.value!=0){
                let resultado2=buscarCategoriasxSup(objbienes,superficieContribuyente.value);
                array1.push(resultado2.ingresos);            
            }       
        if(energiaContribuyente.value!=0){
                let resultado3=buscarCategoriasxEnergia(objbienes,energiaContribuyente.value);
                array1.push(resultado3.ingresos);            
            }    
        if(alquileresContribuyente.value!=0){
                let resultado4=buscarCategoriasxAlquiler(objbienes,alquileresContribuyente.value);
                array1.push(resultado4.ingresos);            
            }    
        let resultadoA1 = 0

        for ( let numero of array1 ) {
            if (resultadoA1 < numero)
            resultadoA1 = numero;
          }
        
        let resultado=buscarCategorias(objbienes,resultadoA1);
 
        console.log(array1);
        console.log(resultado);

            if(resultado == undefined){
                Swal.fire("Fuera del Monotributo excede los parametros del regimen");
            }else{
                resultado.mostrarInfo(); 
                Swal.fire("Exitoso");
                array1.pop();
            }
            document.getElementById("formCalculo").addEventListener("submit", function(event){
                event.preventDefault()});        
            }
        }

    //Servicios

    else if((seleccionado==2)&&(ingresosContribuyente.value>0)){      

                if((ingresosContribuyente.value>4229985.60)||(superficieContribuyente.value>200)||(superficieContribuyente.value>200)||(energiaContribuyente.value>20000)||(alquileresContribuyente.value>533822.27)){
            Swal.fire("Fuera del Monotributo excede los parametros del regimen");
            categoriamostrada.innerText= "";
            cuotamostrada.innerText="$ 0.00";
            sipamostrada.innerText="$ 0.00";
            aportemostrada.innerText="$ 0.00";
            totalmostrada.innerText="$ 0.00";
            array1.pop();
            document.getElementById("formCalculo").addEventListener("submit", function(event){
                event.preventDefault()});   
        }else{

        let resultado1=buscarCategoriasxIng(objservicios,ingresosContribuyente.value);
        array1.push(resultado1.ingresos);
        if(superficieContribuyente.value!=0){
                let resultado2=buscarCategoriasxSup(objservicios,superficieContribuyente.value);
                array1.push(resultado2.ingresos);            
            }       
        if(energiaContribuyente.value!=0){
                let resultado3=buscarCategoriasxEnergia(objservicios,energiaContribuyente.value);
                array1.push(resultado3.ingresos);            
            }    
        if(alquileresContribuyente.value!=0){
                let resultado4=buscarCategoriasxAlquiler(objservicios,alquileresContribuyente.value);
                array1.push(resultado4.ingresos);            
            }    
        let resultadoA1 = 0

        for ( let numero of array1 ) {
            if (resultadoA1 < numero)
            resultadoA1 = numero;
          }
        
        let resultado=buscarCategorias(objservicios,resultadoA1);
 
        console.log(array1);
        console.log(resultado);

            if(resultado == undefined){
                Swal.fire("Fuera del Monotributo excede los parametros del regimen");
            }else{
                resultado.mostrarInfo(); 
                Swal.fire("Exitoso");
                array1.pop();
            }
            document.getElementById("formCalculo").addEventListener("submit", function(event){
                event.preventDefault()});        
            }
    }
    else{
        Swal.fire("Complete los campos Obligatorios");
        document.getElementById("formCalculo").addEventListener("submit", function(event){
            event.preventDefault()});   
    }    
    };
    
    botonlimpiar.onclick=()=>{
        preciomaxmostrada.value="";
        ingresosContribuyente.value="";
        superficieContribuyente.value="";
        selectElement.value=0;
        categoriamostrada.innerText= "";
        cuotamostrada.innerText="$ 0.00";
        sipamostrada.innerText="$ 0.00";
        aportemostrada.innerText="$ 0.00";
        totalmostrada.innerText="$ 0.00";
        array1.pop();
    }
    

//Imprimir
let botonImprimir=document.getElementById("btnImprimir");

botonImprimir.onclick=()=>{
    window.print();
    console.log("Imprimido")
}

//GETJSON
function obtenerJson(){
    const URLJSON="usuarios.json";
    //agregamos un boton
    document.querySelector("#usuarios").innerHTML='<button id="cargarUsuarios"class="btn btn-secondary" >Ver Usuarios</button>';
    //evento para el boton
    document.querySelector("#cargarUsuarios").onclick=()=>{
        fetch(URLJSON)
            .then((respuesta)=>respuesta.json())
            .then((data)=>{
                console.log(data);
                let usuariosSys=data.usuarios;
                for(const usus of usuariosSys){
                    document.querySelector("#usuarios").innerHTML+=`
                    <div>
                        <h3>${usus.nombre}</h3>
                        <p>${usus.edad}</p>
                    </div>
                    `;
                }
            })
            .catch((error)=>{
                console.log("Error en el archivo: "+error);
            })
            .finally(()=>{
                console.log("GRACIAS POR VENIR")
            })
    }
}

obtenerJson();