import WebSocket from 'ws';
import LoggingWebSocket from './logging-web-socket';
import { WebsocketConnectImpl } from './websocket-connect';

jest.mock('ws');
describe('[Proxy - lab] LoggingWebSocket', function () {

  it('should return throw error when web socket is not connected', function () {
    // given
    const loggingWebSocket = new WebsocketConnectImpl('ws://example.com/socket');
    const send = () => loggingWebSocket.send("hello");

    expect(send).toThrowError('WebSocket is not connected.')
  });

  it('should return date time in human-readable format', function () {
    // given
    const loggingWebSocket = new LoggingWebSocket('ws://example.com/socket');
    jest.useFakeTimers().setSystemTime(new Date('2023-10-03'));
    loggingWebSocket.connect();

    // when
    loggingWebSocket.send('tomorrow');

    // then
    expect(WebSocket.prototype.send).toHaveBeenCalledWith(
      'Wednesday, October 4, 2023 at 07:00:00 AM GMT+7'
    );
  }); 

});
