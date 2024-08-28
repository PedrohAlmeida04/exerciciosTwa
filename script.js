var fraseInicio = "elefante incomoda muita gente";
var palavra = "elefantes";
var finalFrase = "muito mais";

function imprime() {

    for(var i = 1; i<100; i++)
    {
        console.log(fraseInicio);
        var somaIncomoda= "incomodam";

        for(var j = 1; j <= 10; j++)
        {
            console.log(`${j} ${palavra} ${somaIncomoda} ${finalFrase}`);
            somaIncomoda = somaIncomoda + somaIncomoda;
        }
        console.log("Descrescendo");
        
        for(var k = 10; k > 0; k--)
        {
            console.log(`${k} ${palavra} ${somaIncomoda} ${finalFrase}`);
            somaIncomoda = somaIncomoda + somaIncomoda;
        }
    }
}

imprime();
