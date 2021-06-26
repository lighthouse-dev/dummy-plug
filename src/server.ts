import express from 'express';

const app = express();

// 보안을 위해 X-Powered-By 헤더를 제거 (https://expressjs.com/ko/advanced/best-practice-security.html)
app.disable('x-powered-by');

const port = Number(process.env.DUMMY_PLUG_PORT) || 8081;

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 start dummy-plug. http://localhost:${port}/`);
});
