

let mov = 0 
let saldo = 0.0
let deposito = 0.0
let retiro = 0
let desicion = true

do{

    mov = parseInt(prompt(`Seleccione el tipo de movimiento que desea realizar: \n1. Ingresar Dinero \n2. Retirar dinero \n3. Consultar Saldo \n4.Salir   `))

if(mov === 1){

    desicion = true
   
    do{
         deposito = parseFloat(prompt("Ingrese la cantidad que desea ingresar a su cuenta: "))

         if(deposito > 0){ 

            saldo= saldo + deposito
            
            console.log(deposito)
            
            
         }else{
            alert("ingrese una cantidad mayor a Cero")
            deposito = 0
         }
    

        } while(deposito === 0)
            console.log(deposito)

            alert("Deposito exitoso, \nsu nuevo saldo es: $" + saldo )

}else if(mov === 2){
      
    

    do{
        retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar de su cuenta: "))

        if(retiro > 0 && retiro < saldo){

            saldo = saldo - retiro

            }else if(retiro > saldo){

            alert("Saldo Insuficiente, ingrese una cantidad valida")
                retiro = 0
            
            }
            else{

                alert("ingrese una cantidad valida")
                retiro = 0
            }

        }   while(retiro === 0)

            alert("Retiro exitoso, \nsu nuevo saldo es: $" + saldo )




}else if(mov === 3){

    alert("su saldo es: $" + saldo )
   
    
}else if(mov === 4){
    break
}else{
    alert("opcion no valida, verifique su eleccion" )
}

desicion = confirm("Desea realizar otra operación?")
if(desicion === false){
    break
}

}while(0 < mov < 4)
    console.log(mov)
    alert("Gracias por usar nuestros servicios")