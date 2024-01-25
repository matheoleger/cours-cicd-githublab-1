import { assert } from 'chai';
import ioClient from 'socket.io-client';
import server from '../server.js';

describe('Socket.io Server', function () {
  let socket;

  beforeEach(function (done) {
    socket = ioClient.connect('http://localhost:4000');

    socket.on('connect', function () {
      done();
    });
  });

});
