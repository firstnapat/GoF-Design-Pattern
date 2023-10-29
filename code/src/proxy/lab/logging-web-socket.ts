import { WebsocketConnect, WebsocketConnectImpl } from './websocket-connect';

class LoggingWebSocket {
  private readonly url: string;
  private socket: WebsocketConnect | null;

  constructor(url: string) {
    this.url = url;
    this.socket = new WebsocketConnectImpl(url);
  }

  connect() {
    try {
      this.socket?.connect();
    } catch (e) {
      console.error(e);
    }
  }

  transformTimeToReadableFormat(date: Date = new Date()) {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    };

    const formattedDate: string = new Intl.DateTimeFormat(
      'en-US',
      options,
    ).format(date);

    return formattedDate
  }
    
  send(message: string) {
    if (this.socket) {
      if (message === 'now') {
        message = this.transformTimeToReadableFormat();
      }
      if (message === 'tomorrow') {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        const forrmattedDate = this.transformTimeToReadableFormat(date);
        message = forrmattedDate;
      }
      this.socket.send(message);
    } else {
      console.error('WebSocket is not connected.');
    }
  }
}

export default LoggingWebSocket;
