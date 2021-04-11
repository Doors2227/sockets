const { Socket } = require('net');
/**
 * para lograr que desde la consola del cliente enviemos mensajes en vivo al servidor 
 * usaremos esta libreira (lineas de codigo)
 */
const readline = require('readline').createInterface({
    //stdin es la entrada estandar del programa normalmente la consola pero podria ser un fichero ...
    input: process.stdin,
    //output por donde va a escribir basicamente la consola pero se puede redirigir para que sea un fichero incluso un socket 
    output: process.stdout,
})
const END = 'END';
const socket = new Socket();
/**Nos conectamos a nuestra maquina local === 127.0.0.1
*Tenemos como clientes un puerto desde el cual nuestro computador se conectara a los servidores, si no se especifica
*se nos dara uno por defecto.
*Especificamos como clientes un puerto al cual nos conectaremos puerto de conexion que el servidor abre para escuchar 
*las peticiones.
*/
socket.connect({ host: "localhost", port: 8000 })
socket.setEncoding('utf-8')
//En este punto estamos enviando la cadena de bits Hola al servidor
//socket.write('Hola');
//Cuando el usuario cliente escrba un mensaje se obtendra y con ese mensaje lo que se hara es enviarlo al servidor
readline.on("line", (message) => {
    socket.write(message);
    if(message === END){
        socket.end();
        process.exit(0);
    }
})
//En este punto obtenemos lo que nos retorna el servidor 
socket.on("data", (data) => {
    console.log(data);
});
/*
Sin estas lineas se generara un problema en la linea 29  process.exit(0);
El problema es que estamos cerrando el socket socket.end(); he inmediatamente
matamos el cliente. (El servidor crashea).
Por que, cuando se finaliza una conexion tcp el cliente le indica al servidor que quiere terminar
pero esa parte se tiene que esperar  que la otra le confirma la finalizacion de la conexion y no lo estamos haciendo. 
Por que en el cliente no nos esperamos y directamente matamos el proceso, entonces que pasa que el servidor
no puede confirmar la finalizacion de la conexion al cliente  y por eso crashea.

Cuanod de verdad este confirmado que se va a cerrar esto entonces es cuando matamos el programa
En otro caso simplemente intentamos finalizar pero no matamos el programa nos esperamos a que el servidor nos confirme 
la finalizacion.
*/

socket.on("close", () => process.exit(0))







