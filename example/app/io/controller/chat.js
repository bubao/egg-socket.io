/**
 * @Description:
 * @author: bubao
 * @Date: 2021-12-07 20:27:51
 * @LastEditors: bubao
 * @LastEditTime: 2021-12-07 21:27:38
 */
'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0];
      console.log('chat :', message + ' : ' + process.pid);
      const say = await this.ctx.service.user.say();
      //   this.ctx.socket.emit('res', say);
      // this.app.of('/chat').adapter.broadcast('res', say);
      this.app.io.of('/chat').to(12345).emit('res', say);
    }

    async join() {
      const { roomid } = this.ctx.args[0];
      console.log('roomid', roomid);
      //   console.log("this.app.io.of('/chat')", this.app.io.of('/chat').adapter.remoteJoin);
      await new Promise(resolve => {

        this.app.io.of('/chat').adapter.remoteJoin(this.ctx.socket.id, roomid, () => {
          console.log('xxxxx');
          resolve();
        });
      });
      this.app.io.of('/chat').to(roomid).emit('join');

    }
  }
  return Controller;
};
