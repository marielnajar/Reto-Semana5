/*
        let base= Number(prompt("ingrese la base del tringulo: "));
        let altura= Number(prompt("ingrese la altura del triangulo: "));

        area= base * altura / 2;

        console.log(`el area del triangulo es: ${area}`);
        */
     /* 
       let L= Number(prompt("Ingrese la cantidad de litros: "));
       let PG = Number(prompt("Ingrese el precio por galon: "));
       
       TG = L / 3.785;
       GA = PG * TG;

       console.log(`La ganancia es: ${GA}`);
    */

       let TI= prompt("Ingrese el tipo de hamburguesa: ");
       let N= Number(prompt("Ingrese el numero de hamburguesa: "));
       let TP= prompt("Ingrese el tipo de pago: ");
   
       if (TI== "sencilla") 
       {
           PA= 20 *N;
       
       }
   
       if (TI=="dobles")
       {
           PA= 25 * N;
       }
       if (TI=="triple")
       { 
           PA = 28 * N;
       }
   
       if (TP== "con tarjeta")
       {
           CA = 0.05 * PA;
       }
       else
       {
           CA= 0;
       }
   
       TOT = PA + CA;
       console.log(`El total a pagar es: ${TOT}`);
   