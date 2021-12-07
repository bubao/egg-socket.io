/**
 * @Description:
 * @author: bubao
 * @Date: 2021-12-02 22:07:55
 * @LastEditors: bubao
 * @LastEditTime: 2021-12-07 21:02:54
 */
'use strict';

// or http://127.0.0.1:7001/chat
const socket = require('socket.io-client')('http://127.0.0.1:7001/chat');

socket.on('connect', () => {
  console.log('connect!');
  socket.emit('join', { roomid: 12345 });
});
socket.on('join', () => {
  socket.emit('chat', 'hello world!');
});
socket.on('res', msg => {
  console.log('res from server: %s!', msg);
});
