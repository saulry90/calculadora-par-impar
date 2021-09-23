 function parimpar() 
{
    var imparneg=-1*document.getElementById("numero").value;
    var numeroUno=document.getElementById("numero").value;
    if (numeroUno === '')
    {
       document.getElementById("resultado").innerHTML=("Debe ingresar un número");
       return false;
    }
    else 
    {
        if(numeroUno==0)
        {
            document.getElementById("resultado").innerHTML=("<p>El número es PAR, porque el cociente de cero entre dos, da resto cero.</p>");
            return true;  
        }
        else
        {
            if(numeroUno==-1)
            {
                document.getElementById("resultado").innerHTML=("El número es<br><span>IMPAR NEGATIVO</span><p class='espacio'><img src='images/un-calcetin-neg.png' alt='impar de calcetines negativos'></p><p>Te deben <span>"+imparneg+"</span> calcetin.<br>Uhhh... el calcetín se quedó sin pareja.</p>");
                return true;
            }
            else
            {
                if(numeroUno==1)
                {
                    document.getElementById("resultado").innerHTML=("El número es<br><span>IMPAR</span><p><img src='images/un-calcetin.png' alt='un calcetín'></p><p>Si tuvieras <span>"+numeroUno+"</span> calcetín, estaría sin pareja.</p>");
                    return true;      
                }
                else
                {
                    if (numeroUno%2==0&&numeroUno<0)
                    {
                        document.getElementById("resultado").innerHTML=("El número es<br><span>PAR NEGATIVO</span><p class='espacio'><img src='images/par-calcetines-neg.png' alt='par de calcetines negativos'></p><p>Te deben <span>"+imparneg+"</span> calcetines.<br>Todos tienen pareja, acuerdate de pedirlos de vuelta!</p>");
                        return true;
                    }
                    else
                    {
                        if (numeroUno%2!=0&&numeroUno<0)
                        {
                            document.getElementById("resultado").innerHTML=("El número es<br><span>IMPAR NEGATIVO</span><p class='espacio'><img src='images/impar-calcetines-neg.png' alt='impar de calcetines negativos'></p><p>Te deben <span>"+imparneg+"</span> calcetines.<br>Uhhh... un calcetín se quedó sin pareja, te olvidaste de prestar uno!</p>");
                            return true;
                        }
                        else
                        {
                            if (numeroUno%2==0)
                            {
                            document.getElementById("resultado").innerHTML=("El número es<br><span>PAR</span><p><img src='images/par-calcetines.png' alt='par de calcetines'></p><p>Si tuvieras <span>"+numeroUno+"</span> calcetines, todos tendrían pareja.</p>");
                            return true;  
                            }
                            else
                            {
                            document.getElementById("resultado").innerHTML=("El número es<br><span>IMPAR</span><p class='espacio'><img src='images/impar-calcetines.png' alt='impar de calcetines'></p><p>Si tuvieras <span>"+numeroUno+"</span> calcetines, habría un calcetín sin pareja.</p>");  
                            return true;  
                            }
                        }    
                    }    
                } 
            }       
        }    
    }
}
function maxLengthCheck(object)
{
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
} 