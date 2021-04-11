//echo server es un servidor que al enviarle un mensaje lo devuelve.
//Libreria estandar de nodejs
const { Server } = require("net");

const server = new Server();

//Primera parte de la practica ----------------------
/** server.on("connection", (socket) => {
  //Cuando se conecte un cliente mostrara su IP con socket.remoteAddres y su puerto con remotePort 
  console.log(`New connection from ${socket.remoteAddress}:${socket.remotePort}`)

  /*Decodificamos el mensaje que nos envia el cliente. Si no se especifica  el setEncoding 
  se mostraran (bits) <Buffer 48 6f 6c 61> /

  socket.setEncoding('utf-8')
  //Obtenemos el mensaje del servidor cliente 
  socket.on("data", (data) => {
    //mostramos el mensaje que nos envio el cliente 
    console.log(data)
    //retornaremos el mensaje al cliente
    socket.write(data)
  });
})
**/
//Segunda parte de la practica 
const END = 'END';
server.on("connection", (socket) => {
  const remoteSocket = `${socket.remoteAddress}: ${socket.remotePort}`;
  console.log(`New connection from ${remoteSocket}`);
  socket.setEncoding('utf-8');
  socket.on("data", (message) => {
    //console.log(`${remoteSocket} -> ${message}`)
    if(message === END){
      //Arreglamos error de finalizacion
      //console.log(`Connection with ${remoteSocket} closed`);
      socket.end();
    } else{
      console.log(`${remoteSocket} -> ${message}`);
    }
  });
  socket.on("close ", () => {
    console.log(`Connection with ${remoteSocket} closed`);
  })
});

/*
Puertos los puestos son numeros de 16 bits por lo tanto: 2^16 = 65536 .
Host:'0.0.0.0' si no lo ponemos de esta forma se mezclaran IPv4 y IPv6, ahora mismo cohexiste dos versiones del 
protocolo IP (IPv4 && IPv6), al poner de esta forma el host solo nos aceptara las conexiones IPv4 
*/
server.listen({ port: 8000, host: "0.0.0.0" }, () => {
  console.log('Listening on port 8000')
});
