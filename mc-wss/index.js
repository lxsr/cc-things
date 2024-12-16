import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 9090 });

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    console.log('received:', data.toString());
  })

  ws.send('test');
});