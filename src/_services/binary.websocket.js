var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=21052');

ws.onopen = function(evt) {
    ws.send(JSON.stringify({ticks:'R_10'}));
    console.log('On Open enviado');
};

ws.onmessage = function(msg) {
   var data = JSON.parse(msg.data);
   console.log('ticks update: %o', data);
};