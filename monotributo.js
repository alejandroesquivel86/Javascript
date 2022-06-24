//CALCULO DE CATEGORIA
let categoriaCliente;
let ingresos = document.getElementById("ingresoAnualCliente");
let botoncalcular = document.getElementById("btnCalcular");

botoncalcular.addEventListener("click",calcularCategoria)

document.getElementById("categoriaCalculada").value = categoriaCliente;

function calcularCategoria(){      
        if((parseInt(ingresos.value)) != 0){   
            switch (true) {
                case ((parseInt(ingresos.value)) < 466201):
                    console.log("Categoría A");
                    document.getElementById("categoriaCalculada").value = "A";                                                       
                    alert   ("Categ A"); 
                    return categoriaCliente = "A";     
                    break;
                case (466202 < (parseInt(ingresos.value)))&&((parseInt(ingresos.value)) < 693002):                
                        console.log("Categoría B");
                        document.getElementById("categoriaCalculada").value = "B";
                        alert   ("Categ B");  
                        return categoriaCliente = "B";                                                
                        break;
                case (693003 < (parseInt(ingresos.value)))&&((parseInt(ingresos.value)) < 970203): 
                    console.log("Categoría C");
                    document.getElementById("categoriaCalculada").value = "C";                                     
                    alert   ("Categ C");  
                    return categoriaCliente = "C";   
                    break;
                default:                    
                    document.getElementById("categoriaCalculada").value = "Fuera";                                       
                    console.log("Fuera de Monotributo");       
                    alert   ("Fuera de Monotributo");  
                    return categoriaCliente = "'Fuera Monotributo'";  
                    break;
            }  
        } else {
            document.getElementById("categoriaCalculada").value = "No Calculado";
            alert("Ingresar un valor");       
            return categoriaCliente = "'No Calculado'";                                 
        };        
    };

//CARGA DE CLIENTES

// class ClienteNuevo {
//     constructor (razonSocial,direccion,cuit,ingresoAnual,categoriaClase){
//         this.razonSocial=razonSocial.toUpperCase();
//         this.direccion=direccion.toUpperCase();
//         this.cuit=cuit;
//         this.ingresoAnual=ingresoAnual;
//         this.categoriaClase=categoriaClase;
//     }
//     mostrarCliente=()=>console.log("Razon Social: "+this.razonSocial+
//                                     " direccion:"+this.direccion+
//                                     " CUIT:"+this.cuit+
//                                     " Ingreso Anual:"+this.ingresoAnual+
//                                     " Categoria:"+this.categoriaClase);
// }

// //array
// const clientes = [];

// for (let i = 1; i < 2; i++){
//     alert("podrá ingresar "+ (2-i) +" clientes");
//     clientes.push(new ClienteNuevo(prompt("Razón Social"), prompt("Direccion"),prompt("CUIT"),calcularCategoria(),categoriaCliente));    
// }

// clientes.forEach((cliente)=>{alert("Se agregó " +cliente.razonSocial+" - CUIT: "+cliente.cuit+" que según ingresos anuales le corresponde la categoría de monotributo: '"+cliente.categoriaClase+"'")});


// for (const cliente of clientes)
// cliente.mostrarCliente();

//calcularCategoria();

//getelementby...
let grilla=document.getElementById("grillaMonotributo");
let titulo=document.getElementById("titulo");
let categorias = document.getElementsByClassName("categoria");
let ingresosCategoria = document.getElementsByClassName("ingresoCategoria");
let boton=document.getElementById("boton");

//para pintar la grilla
function pintarGrilla(){
    if (boton.innerText=="Colorear Grilla") {
    grilla.style.background="black";
    titulo.style.color="red";
    for(const categoria of categorias){
        categoria.style.color="white";    
    }
    for(const ingreso of ingresosCategoria){
        ingreso.style.color="white";    
    }
    boton.innerText="Despintar"   
} else {
    grilla.style.background="white";
    titulo.style.color="black";
    for(const categoria of categorias){
        categoria.style.color="black";    
    }
    for(const ingreso of ingresosCategoria){
        ingreso.style.color="black";    
    }
    boton.innerText="Colorear Grilla"  
} 
}

//Storage
let clienteSeteado = localStorage.getItem("cliente");
if (cliente =null){
    clienteSeteado = "BEJERMAN"
}
document.getElementById("razonsocial").value = clienteSeteado;

let inputRazonSocial = document.getElementById("razonsocial");
let botonRecordar = document.getElementById("btnRecordarCliente");

localStorage.setItem("cliente",clienteSeteado);

botonRecordar.onclick=()=>{
    if(inputRazonSocial.value !==""){
        clienteSeteado = inputRazonSocial.value            
    }
    
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity:'top'
    }).showToast();

    localStorage.setItem("cliente",clienteSeteado);
    
}









// if(modo==null){
//     modo="light"
// }
// let principal=document.getElementById("principal");
// let boton=document.getElementById("btnRecordarCliente");
// document.body.className=modo;
// principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;

// localStorage.setItem("clienteFijo",modo);

// boton.onclick=()=>{
//     if(modo=="light"){
//         document.body.className="dark";
//         principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center dark";
//         modo="dark";
//         boton.innerText="Light Mode";
//     }else{
//         document.body.className="light";
//         principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center light";
//         modo="light";
//         boton.innerText="Dark Mode";
//     }
//     localStorage.setItem("modo",modo);
// }


