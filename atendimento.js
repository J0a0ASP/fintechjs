const fila = ["Luis","Roberta", "Ana"];

j = 1;
let i=0;
while (i<=2) {
    console.log ("Fila de clientes: " + fila);

        let nome = fila.shift();
        console.log ("\nAtendendo " + j + "º cliente..");

    console.log("Cliente atendido: " + nome);
    j++;
    i++;
}

    console.log ("SEM CLIENTES PARA ATENDER");

