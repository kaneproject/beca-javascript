var stompClient = null;
var username = null;



function conectar() {
    username = document.getElementById("usuario").value;

    if(username) {

        var socket = new SockJS('http://192.168.1.63:8090/ws');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, siConectado, siError);
    }
}


function siConectado() {
    // Suscripcion al topic
    stompClient.subscribe('/topic/public', mensajeRecibido);

    // Envio de usuario al servidor
    stompClient.send("/app/chat.addUser",
        {},
        JSON.stringify({sender: username, type: 'JOIN'})
    )
    document.getElementById("status").innerText = "Conectado como " + username;
    
}


function siError(error) {
    document.getElementById("status").innerText = "No conectado!"
    alert("No he podido conectar " + error);  
}


function enviarMensaje(event) {
    var mensaje = document.getElementById("mensaje").value

    
    var mensajeDeChat = {
        sender: username,
        content: mensaje,
        type: 'CHAT'
    };
    stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(mensajeDeChat));
    document.getElementById("mensaje").value = '';
    
    //event.preventDefault();
}


function mensajeRecibido(mensaje) {
    var msg = JSON.parse(mensaje.body);
    var mensajes = document.getElementById("mensajes");
    if(msg.type === 'JOIN') {
        mensajes.value = mensajes.value + msg.sender + ' Conectado!\n';
    } else if (msg.type === 'LEAVE') {
        mensajes.value = mensajes.value + msg.sender + ' Ha abandonado el chat!\n';
    } else {
        mensajes.value = mensajes.value + msg.sender + ' ' + msg.content + "\n";
    }

}