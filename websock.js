const socket = require('socket.io-client')('192.168.2.85:1337');

socket.on('connect', function(){
  console.log('connected');
  socket.emit('aaaaaaaaaaaaaaaa');
});
socket.on('event', function(data){
  socket.emit('aaaaaaaaaaaaaaaa');
});
socket.on('disconnect', function(){
  socket.emit('aaaaaaaaaaaaaaaa');
});
