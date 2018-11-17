/*  13  /_4_
         13 - 4 = 9 1
         9 - 4 = 5  1
         5 - 4 = 1  1
         1 - 4 = -3 

         Divion entera es 3
*/
// Caso base y caso recursivo
function divisionEntera(diviendo , divior){
    if (diviendo < divior){
        return 0
    } 
    return  1 + divisionEntera (diviendo -divior , divior)
}