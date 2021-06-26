import express from 'express';
import cors from 'cors';

const app = express();

// 보안을 위해 X-Powered-By 헤더를 제거 (https://expressjs.com/ko/advanced/best-practice-security.html)
app.disable('x-powered-by');

const port = Number(process.env.DUMMY_PLUG_PORT) || 8080;

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 start dummy-plug. http://localhost:${port}/`);
});

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.get('/v1/profile', (_req: express.Request, res: express.Response) => {
  res.json(require('./data/profile.json'));
});

app.patch('/v1/users/:id', (req: express.Request, res: express.Response) => {
  /*
    fetch('http://localhost:8080/v1/users/1', {
      method: 'PATCH',
    })
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.log(err))
  */
  res.json({ status: `id:${req.params.id} patch success` });
});
