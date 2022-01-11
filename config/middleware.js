module.exports = {
    settings: {
      cors: {
        enabled: true,
        // origin: ['*']
        origin: ['http://localhost:3000', 'http://localhost:1337', 'https://staging-brg.break.co.kr', 'https://staging-brg3.break.co.kr']
      },
    },
  };