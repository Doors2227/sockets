# Video de referencia
https://www.youtube.com/watch?v=ln9qz-_bT2U
# sockets
Realizaremos un chat en consola donde tendremos un servidor escuchado en un puerto y varios clientes que pueden conectarse y enviar mensajes.
Si queremos realizar un servidor que acepte multiple conexiones ,es necesaria la programacion paralela para soportar multiples hilos (nodejs funciona con un event loop que nos ayudara a soportar multiples hilos (esto quiere decir que podremos olvidarnos de los hilos))
# Teoria 
¿Como se envia informacion (binarios) de una maquina a otra maquia?
Para que suceda tiene que existir una infraestructura subyacente que lo permita, ya sea una red cableada,inalambrica lo que sea que nos permita enviar bits de un lado a otro.
Esta infra estructura son routers y cables.
La red (internet): son multiples routers conectados entre si.
Dentro de esta red para poder enviar la informacion a una maquina o paquetes (bits).Tengo que conocer su direccion IP para saber como llegar a esa maquina, de forma que yo a mi router le envio un paquete con un destino y nuestro router sabra enrutarlo y el siguite y el siguinte igual ...
hasta llegar al destino y todo este enrutamiento ocurre gracias a nuestro protocolo IP
(Internet Protocol)
El protocolo IP  es como llego yo a una maquina en internet.
Con este protocolo podremos enviar paquetes a una maquina pero no podemos fiarnos de este protocolo por que las redes no son seguras.
Podremos enviar un paquete y que no llegue o que llegue dañado, incompleto o en desorden.
Para solucionar este problema se ha inventado el protocolo TCP(Transmition control protocol) para ofrecer mas seguridad en el envio de la informacion.
Todos estos protocolos estan implementados a nivel del kernel del sistema operativo estos simplemente nos ofrcen servicios para que los usemos en el caso del TCP nosotros tenemos los (sockets) y por lo tanto podemos comunicarnos con una maquina utilizandolos.
Un socket es una conexion TCP con otra maquina.
Si escribimos en lenguaje binario cualquier cosa en un socket sabemos que esa infomarcion va a ser leida por el otro socket (Bidireccional).
Esto funciona a nivel de Procesos nosotros tenemos un proceso un programa lo que sea y en la otra maquina existe otro proceso y se cominican atraves de sockets.
De esta forma, para identificar una maquina en internet tenemos las direcciones IP para identificar un progrma o un  proceso tenemos los puertos.

Ejemplo
Si yo tengo una maquina o un servidor y conozco su direccion IP y ademas se que en ese servidor hay varios programas corriento pues concatenendo su direccion IP mas el puerto que identifica a ese proceso en esta maquina, nosotros podemos comunicarnos con ese programa
a nivel TCP con sockets.
# Tener en cuenta 
Excisten mas protocolos aparte del TCP y el IP ...
# Resumen 
Para llegar a una maquina en internet tenemos que saber su direccion IP y una vez llegamos a esa maquina para comunicarnos con un programa tenemos que saber en que puerto esta corriendo ese programa, Estos puertos no son puertos fisicos, son puertos a nivel virtual el sistema operativo cuando le decimos en que puerto queremos comunicarnos el sistema operativo ya sabe cual es el programa que esta escuchando en ese puerto.
