/**
 * @Description:
 * @author: bubao
 * @Date: 2021-12-07 20:27:51
 * @LastEditors: bubao
 * @LastEditTime: 2021-12-07 20:52:33
 */
'use strict';

module.exports = app => {
  // app.io.of('/')
  app.io.route('chat', app.io.controller.chat.index);

  // app.io.of('/chat')
  app.io.of('/chat').route('chat', app.io.controller.chat.index);
  app.io.of('/chat').route('join', app.io.controller.chat.join);

};
