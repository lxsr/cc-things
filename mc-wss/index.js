import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 9090 });

wss.on('connection', (ws) => {
  ws.on('error', console.error);

  ws.on('message', (data) => {
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
        console.log("message:", data.toString());
      }
    });
  })
});

const interval = setInterval(() => {
  wss.clients.forEach((ws) => {
    ws.ping();
  });
}, 30000);

wss.on('close', () => {
  clearInterval(interval);
})