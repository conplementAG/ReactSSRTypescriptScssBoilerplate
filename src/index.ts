import http from 'http';
import server from './server';

const app = http.createServer(server);

app.listen(process.env.PORT || 3000, (error: any) => {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  let currentServer = server;

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    // HMR works by replacing the request listener, hence the code below
    app.removeListener('request', currentServer);
    const newServer = require('./server').default;
    app.on('request', newServer);
    currentServer = newServer;
  });
}